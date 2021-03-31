import MainNav from './MainNav'
import SideNav from './SideNav'
import MatchCard from './MatchCard'

import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'
import { getMatch, getUser, listMatchs } from '../graphql/queries'

const userList = []

const Matching = ( ) => {
  const [userID, setUserID] = useState(false)
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [prosUsers, setProsUsers] = useState(userList)
  const [index, setIndex] = useState(0)
  //const [userLength, setUserLength] = useState(0)

  // false = student, true = company
  const [userType, setUserType] = useState(true)

//  const userType = false

  useEffect(() => {
    let isCancelled = false
    Auth.currentSession()
      .then(currUser => {
        var userID = currUser['idToken']['payload']['sub']
          if(currUser['idToken']['payload']['custom:student'] === '1'){
            getProsUsers(userID, false)
            setUserType(false)
          } else {
            getProsUsers(userID, true)
            setUserType(true)
          }
        return () => {
          isCancelled = true
        }
       })
      .catch(err => {
        setRedirectToLogin(true)
      })
  }, [])

  async function getProsUsers(userID, type){
    var userid = userID.toString();
    //(async () => {
    var userInfo = await getUserInfo(userid)
    var notSeenIds = userInfo.data.getUser.notSeen;
    //setUserLength(notSeenIds.length);
    (async () => {
      var allUserData = []
      // can change this so it only keeps one at a time
      for(var id in notSeenIds){
        await API.graphql({ query: getUser, variables: {id: notSeenIds[id]}}).then(prosUserData => {
          var userData = prosUserData.data.getUser
          if(type == false){
            // user is student - will view company
            var displayData = {
              response_rate: userData.response_rate,
              id: userData.id,
              name: userData.firstName + " " + userData.lastName,
              position: userData.position,
              org: userData.organization,
              loc: userData.located,
              bio: userData.bio,
              companySize: userData.company_size,
              website: userData.website,
              about: userData.about,
              tech: userData.tech_skills,
              soft: userData.soft_skills,
              values: userData.values,
              life: userData.life_at,
              benefits: userData.benefits
            }
            allUserData.push(displayData)
          } else {
            var displayData = {
              response_rate: userData.response_rate,
              id: userData.id,
              name: userData.firstName + " " + userData.lastName,
              school: userData.organization,
              degMaj: userData.degree + ", " + userData.major,
              loc: userData.location,
              bio: userData.bio,
              experience: userData.highlights,
              tech: userData.tech_skills,
              soft: userData.soft_skills,
              values: userData.values,
              life: userData.life_at,
              benefits: userData.benefits
            }
            allUserData.push(displayData)
          }
        })
      }
      setProsUsers(allUserData)
    })()
  }

  // unsure how we're flagging student vs student
  async function getUserType(userID){
    await API.graphql({ query: getUser, variables: {id: userID.toString() }}).then(response => {
      var type = response.data.getUser.typeOfUser;
      if(type == "Company"){
        setUserType(true)
      }
      else {
        console.log("student")
        setUserType(false)
      }
    }).catch(err => {
      console.log(err);
    });

  }

  async function getUserInfo(userID){
    // make a function with a lot less info (not necessary to get whole user here)
    return await API.graphql({ query: getUser, variables: {id: userID}})
  }

  function matchInteraction(interType, matchID){
    console.log(matchID);
    setIndex(index+1)
  }

  return (
    <div className = "dashboard">
    {
      redirectToLogin === true && (
        <Redirect to= '/login' />
      )
    }
    {
      redirectToLogin === false && (
        <div className = "internal-body">
        <MainNav />
        <SideNav />
          <div className="matching-div">
          <MatchCard userType={userType} userInfo={prosUsers[index]} end={prosUsers.length} index={index}/>
          <button className="pass" id={userType + "-pass"} onClick={() => matchInteraction("pass", prosUsers[index])} >Not Right Now.</button>
          <button className="connect" id={userType + "-conn"} onClick={() => matchInteraction("connect", prosUsers[index])} >Connect.</button>
          </div>
        </div>
      )
    }
    </div>
  )

}

export default Matching
