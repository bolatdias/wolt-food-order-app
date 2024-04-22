import React from "react";
import Avatar from "./avatar";
import './profile-header.css'
import background from '../../assets/pexels-eberhard-grossgasteiger-691668.jpg'

const ProfileHeader = ({ username, joinedAt }) => {

    return (
        <div className="profile-header-container">
            <img className="dark-overlay" src={background}></img>
            <Avatar username={username} />
            <h2 className="text-white">{username}</h2>
            <p className="text-white">Registred at:  {joinedAt.slice(0, 10)}</p>
        </div>
    )
}

export default ProfileHeader