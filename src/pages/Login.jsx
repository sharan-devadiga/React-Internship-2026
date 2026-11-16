import axios from "axios";
import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(Boolean);
  const [loading, setLoading] = useState(Boolean);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  var userToken;
  let handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let response = await axios.post("https://dummyjson.com/auth/login", {
        username: username,
        password: password,
      });
      console.log("Login Response", response);
      console.log("User Token", response.data.accessToken);

      userToken = response.data.accessToken;
      localStorage.setItem("my-user", userToken);
      setUser(response.data);
      setSuccess(true);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setError(error.message);
    }
  };

  let handleLogout = () => {
    localStorage.removeItem("my-user");
    setUsername("");
    setPassword("");
    setUser([]);
    setSuccess(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      Login
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter Your Username </label>
            <br></br>
            <input
              type="text"
              name="name"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <br></br>
          <div>
            {" "}
            <label>Enter Your password </label>
            <br></br>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br></br>

          <button>Login</button>

          {success && <button onClick={handleLogout}>Logout</button>}
        </form>
      </div>
      <div>{error && <p style={{ color: "red" }}>{error}</p>}</div>
      <div>
        {success && (
          <div>
            <p style={{ color: "green" }}>
              {user ? "Welcome" : "Please Login Again"}
              {user.firstName}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
