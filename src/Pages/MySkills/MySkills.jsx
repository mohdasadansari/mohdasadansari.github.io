import React from 'react'
import './MySkills.css'

const MySkills = ({ bgimg, name }) => {
  return (
    <div className="mySkills">
      <div className="mySkillsIcon">
        <div className="mySkillsImgContainer">
          <img src={bgimg} alt={name} className="mySkillsImg" />
        </div>
      </div>
      <p className="mySkillsName">{name}</p>
    </div>
  )
}

export default MySkills