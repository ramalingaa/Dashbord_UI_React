import React from 'react'
import HeaderList from "./local.json"
import "./Header.css"
const Header = () => {
  return (
    <div className = "flex header-container">
        {
            HeaderList.map((header) => {
                return (
                    <div key = {header.icon} className = {`flex singleHeader-container card-bgColor ${header.HeaderText === "Delayed" ? "delayedCard" :""}`}>
                        <div className = "headerIcon-container">
                            <i className= {`${header.icon} align-icon`}></i>
                        </div>
                        <p className = "header-count">{header.TotalProjects}</p>
                        <p>{header.HeaderText}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Header