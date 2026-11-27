import axios from "axios";
import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";
import { base_url } from "../utils/constants";

function Users() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(Boolean);

  let fetchUsers = async () => {
    setLoading(true);
    try {
      let response = await axios.get(`${base_url}/api/student/list/`);
      //   console.log("Users Log", response.data);
      //   console.log("one users", response.data.users);
      //   console.log("User ID", response.data);

      console.log(response.data.responseData);

      setUser(response.data.responseData);
      setLoading(false);
      setError("");
    } catch (error) {
      setLoading(true);
      setError(error.message);
    }
  };
  //   console.log(user);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <div>{loading && <p>{"Loading..."}</p>}</div>
      Users
      {!loading && (
        <table>
          <tr>
            <th> Name</th>
            <th>Email</th>
            <th>Phone</th>&nbsp;&nbsp;
            <th>age</th>&nbsp;&nbsp;&nbsp;
            {/* <th>Company</th> */}
          </tr>
          {user.map((items) => (
            <tr>
              <td>{items.name}</td>
              <td>{items.email}</td>
              <td>{items.phone}</td>&nbsp;&nbsp;&nbsp;
              <td>{items.age}</td>
              {/* <td>{items.company.name}</td> */}
              {/* <td>
                <img src={items.image} />
              </td> */}
            </tr>
          ))}
        </table>
      )}
      <div>
        <button onClick={fetchUsers}>Load Users</button>
      </div>
    </div>
  );
}

export default Users;
