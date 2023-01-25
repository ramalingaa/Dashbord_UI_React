import React from 'react'
import "./Footer.css"
import FooterData from "./local.json"
const Footer = () => {
  return (
    <div>
        <div className = "flex budgetStatus-header-container">
            <h3>Budget Status</h3>
            <div>
                <button className = "btn primary"><i class="fal fa-plus btn-icon"></i>Add New Project</button>
                <button className='btn outlined'><i class="fal fa-download btn-icon"></i>Download Report</button>
                <button className='btn outlined'><i class="fas fa-calendar-minus btn-icon"></i>dd/mm/yyyy - dd/mm/yyyy</button>
                <button className='btn outlined'><i class="fal fa-filter btn-icon"></i>Filter</button>
            </div>
        </div>
        <div className='flex budgetStatus-card-container'>
            {
                FooterData.FooterData.map((cardData) => {
                    return(
                        <div className='budgetStatus-card'>
                            <div className='flex'>
                               <div className = "header-left">
                                <div className='header-container'>
                                    <h4>{cardData.title}</h4>
                                    <span className='subtext'>{cardData.section}</span>
                                </div>
                                <div className='flex subText-container'>
                                    <span className='subtext'>{cardData.totalBudgetText}</span>
                                    <span>{cardData.totalBudgetValue}</span>
                                </div>
                                <div className='flex subText-container'>
                                    <span className='subtext'>{cardData.profitabilityText}</span>
                                    <span className= {`${cardData.title === "Insurance App"?"alertText":""}`}>{cardData.profitabilityValue}</span>
                                </div>
            
                               </div>
                               <img src = {cardData.img} className = "avatar" alt = {cardData.title} />
                            </div>
                            <div className='status-bar' style={{background: `${cardData.fill === "full"?cardData.color:`linear-gradient(90deg,${cardData.color} 50%, ${cardData.secondColor} 50%`}`}}>
                                
                            </div>
                            <div className='flex subText-container'>
                                <span>{cardData.actualHoursText}</span>
                                <span className= {`${cardData.title === "Insurance App"?"alertText":""}`}>{cardData.actualHoursValue}</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Footer