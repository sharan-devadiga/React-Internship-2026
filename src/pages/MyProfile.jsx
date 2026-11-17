import axios from "axios";
import React, { useEffect, useState } from "react";

function MyProfile() {
  const [user, setUser] = useState();
  let userAccessToken = localStorage.getItem("my-user");
  console.log("Get ", userAccessToken);

  let fetchMyProfile = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/auth/me", {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
        },
      });
      setUser(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  return (
    <div>
      {user && (
        <ul>
          <li>{user.username}</li>
        </ul>
      )}
    </div>
  );
}

export default MyProfile;
