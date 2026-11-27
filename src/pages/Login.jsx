import axios from "axios";
import React, { useState } from "react";
import { base_url } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [success, setSuccess] = useState(Boolean);
  const [loading, setLoading] = useState(Boolean);

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  var userToken;

  let handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      let response = await axios.post(`${base_url}/api/auth/login`, {
        email: email,
        password: password,
      });
      // console.log("User Token", response.data.responseData);
      userToken = response.data.responseData;
      localStorage.setItem("user_token", userToken);
      let responsecode = response.data.responseCode;

      if (responsecode != 200) {
        toast.error(response.data.responseMessage);
      }
      if (responsecode == 200) {
        toast.success("Login Successfull");
        navigate("/my/profile");
      }
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
    setemail("");
    setPassword("");
    setUser([]);
    setSuccess(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              <circle cx="12" cy="16" r="1" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-slate-900">Welcome back</h1>

          <p className="text-sm text-slate-500 mt-2">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email address
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>

            <input
              type="text"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
            />
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition cursor-pointer">
            Login
          </button>

          {success && (
            <button
              onClick={handleLogout}
              className="w-full border border-red-200 text-red-600 hover:bg-red-50 font-medium py-3 rounded-lg transition cursor-pointer"
            >
              Logout
            </button>
          )}
        </form>

        {error && (
          <div className="mt-5 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm text-center">
            {error}
          </div>
        )}

        {success && (
          <div className="mt-5 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center">
            {user ? "Welcome" : "Please Login Again"} {user.firstName}
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-slate-200 text-center text-xs text-slate-400">
          Secure account login
        </div>
      </div>
    </div>
  );
}

export default Login;
