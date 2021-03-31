import MainNav from './MainNav'
import SideNav from './SideNav'
import MatchCard from './MatchCard'

import React, { useState, useEffect } from 'react'
import Amplify, { API, Auth, Hub } from 'aws-amplify'
import {Link, Redirect} from 'react-router-dom'
import { getMatch, getUser, listMatchs } from '../graphql/queries'
import { updateUser } from '../graphql/mutations'


const userList = []
const userInfo = []

const Matching = ( ) => {
  const [userID, setUserID] = useState(false)
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [prosUsers, setProsUsers] = useState(userList)
  const [index, setIndex] = useState(0)
  const [currUserInfo, setCurrUserInfo] = useState(userInfo)

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
          setUserID(userID)

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
    setCurrUserInfo(userInfo)
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

  async function passUser(matchID){

    //var currUser = await getUserInfo(userID)

    var currUserData = currUserInfo.data.getUser

    var notSeenArr = currUserData.notSeen
    var skippedArr = currUserData.skipped

    var i = notSeenArr.indexOf(matchID)
    notSeenArr.splice(i, 1)

    skippedArr.push(matchID)

    var updateValues = {
      id: currUserData.id,
      notSeen: notSeenArr,
      skipped: skippedArr
    }

      /*(async () => {
        await API.graphql({ query: updateUser, variable:{UpdateUserInput: updateValues}})
      })()*/
      // figure this out tomorrow
    //setIndex(index+1)
  }

  async function likeUser(matchID){
    //(async () => {
    var currMatch = await getUserInfo(matchID)
//      var currMatch = await getUserInfo(matchID)

    var currMatchData = currMatch.data.getUser
    var currUserData = currUserInfo.data.getUser

    var notSeenArr = currUserData.notSeen
    var likedArr = currUserData.liked

    var matchNotSeenArr = currMatchData.notSeen
    var matchLikedArr = currMatchData.liked

    if(matchLikedArr.includes(currMatchData.id)){
      // create match status_flag upcoming
      // move out of notSeen
      // render match component (pass in info to make match)
    } else if(matchNotSeenArr.includes(currMatchData.id)){
      // create match status_flag pending
      // move out of notSeen
    } else {
      // move out of notSeen
    }

    /*var i = notSeenArr.indexOf(matchID)
    notSeenArr.splice(i, 1)

    skippedArr.push(matchID)

    var updateValues = {
      id: currUserData.id,
      notSeen: notSeenArr,
      skipped: skippedArr
    } */

      /*(async () => {
        await API.graphql({ query: updateUser, variable:{UpdateUserInput: updateValues}})
      })()*/
      // figure this out tomorrow
    //})()
    //setIndex(index+1)
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
          <button className="pass" id={userType + "-pass"} onClick={() => passUser(prosUsers[index])} >Not Right Now.</button>
          <button className="connect" id={userType + "-conn"} onClick={() => likeUser(prosUsers[index])} >Connect.</button>
          </div>
        </div>
      )
    }
    </div>
  )

}

export default Matching
