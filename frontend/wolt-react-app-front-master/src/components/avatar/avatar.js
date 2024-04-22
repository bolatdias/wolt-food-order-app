import React from "react";

const Avatar = ({ username }) => {
  const avatarChar = username.charAt(0).toUpperCase();

  return (
    <div className="profile-avatar" style={avatarStyle}>
      {avatarChar}
    </div>
  );
};

const avatarStyle = {
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: '#3498db',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '64px',
};

export default Avatar;
