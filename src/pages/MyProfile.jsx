import axios from "axios";
import React, { useEffect, useState } from "react";
import { base_url } from "../utils/constants";

function MyProfile() {
  const [user, setUser] = useState([]);
  let userAccessToken = localStorage.getItem("user_token");
  console.log("Get ", userAccessToken);

  let fetchMyProfile = async () => {
    try {
      let response = await axios.get(`${base_url}/api/auth/my-profile/`, {
        headers: {
          Authorization: userAccessToken,
        },
      });
      setUser(response.data.responseData);

      console.log("Log Result", response.data.responseData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyProfile();
  }, []);

  return (
    <div>
      <ul>
        {user.map((items) => (
          <li>
            {items.name}
            {items.email}
            {items.phone}
          </li>
        ))}
      </ul>
      {user.map((items) => (
        <ul>
          <li>{items.name}</li>
          <li>{items.email}</li>
          <li>{items.phone}</li>
        </ul>
      ))}
    </div>
  );
}

export default MyProfile;
