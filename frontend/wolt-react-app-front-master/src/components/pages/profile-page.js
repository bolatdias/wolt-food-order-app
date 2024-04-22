// ProfilePage.jsx

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import userService from "../../service/user-service";
import { PropagateLoader } from "react-spinners";
import ProfileHeader from "../avatar/profile-header";
// import OrderHistoryCard from "../order-history-card/order-history-card";
import OrderHistory from "../order-history/order-history";
  
const ProfilePage = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await userService.getInfoByUserName(username);
        setUserData(response);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div>
      {!isLoading ? (
        <>
          <ProfileHeader
            joinedAt={userData.joinedAt}
            username={userData.username}
          />
          <div className="container mt-5">
            <OrderHistory></OrderHistory>
          </div>
        </>
      ) : (
        <div className="container mt-5  p-5 d-flex  justify-content-center mb-5">
          <PropagateLoader color="#49ceff" />
        </div>
      )}
    </div>
  );
};



export default ProfilePage;
