import React from 'react'
import TeamMoodData from "./local.json"
import "./TeamMood.css"
const TeamMood = () => {
  return (
    <div className = "flex flex-column teamMood-container card-bgColor ">
        <h3>{TeamMoodData.HeaderText}</h3>
        {
            TeamMoodData.TeamMoodData.map((teamMember, index) => {
                return (
                    <div className = "singleMember-container ">
                        <div className = "flex mood-container">
                            <img src = {teamMember.profileImage} alt = {teamMember.name} className = "avatar"/>
                            <div className = "flex flex-column">
                                <p>{teamMember.name}</p>
                                <p className = "subtext">{teamMember.role}</p>
                            </div>
                        </div>
                        <input type = "range" value = {teamMember.moodStatus.value} max = {"5"} readOnly = {true} className = {`teamModd-status statusBg${index}`}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TeamMood