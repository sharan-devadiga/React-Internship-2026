import axios from "axios";
import React, { useEffect, useState } from "react";
import { useActionData } from "react-router-dom";

function Users() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(Boolean);

  let fetchUsers = async () => {
    setLoading(true);
    try {
      let response = await axios.get("https://dummyjson.com/users");
      //   console.log("Users Log", response.data);
      //   console.log("one users", response.data.users);
      //   console.log("User ID", response.data);

      setUser(response.data.users);
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
      {/* <div>{error && <p style={{ color: "red" }}>{error}</p>}</div> */}
      <div>{loading && <p>{"Loading..."}</p>}</div>
      Users
      {!loading && (
        <table>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Bank currency</th>
            <th>Company</th>
          </tr>
          {user.map((items) => (
            <tr>
              <td>{items.firstName}</td>
              <td>{items.lastName}</td>
              <td>{items.address.address}</td>
              <td>{items.bank.currency}</td>
              <td>{items.company.name}</td>

              <td>
                <img src={items.image} />
              </td>
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
