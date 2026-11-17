import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async (e) => {
    e.preventDefault();

    if (!formData.username || !formData.password) {
      setMessage("Please Fill All Feilds");
      return;
    }
    try {
      setLoading(true);
      setMessage("");

      const response = await axios.post("https://dummyjson.com/auth/login", {
        username: formData.username,
        password: formData.password,
        expiresInMins: 30,
      });
      console.log(response.data);
      setUser(response.data);
      setMessage("Login Successfull");
      toast.success("Login Successfull");
      navigate("/");
      setFormData({
        username: " ",
        password: " ",
      });
    } catch (error) {
      console.log(error);
      setMessage("Invalid Username and password");
      toast.error("Invalid Username and password");
      setUser(null);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100  via-purple-500 flex justify-center items-center">
      <div className="bg-white  w-100 w[380px] rounded-3xl shadow-2xl p-8">
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 rounded-full bg-indigo-200 flex items-center justify-center text-4xl">
            👤
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Welcome
        </h1>
        <p className="text-center text-gray-500 mt-2 m-8 font-semibold">
          Sign in to Continue
        </p>
        <form onSubmit={login}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Your username"
              className="w-full border border-gray-300 rounded-lg px-2 py-2 outiline-none focus:border-indigo-600 focus:ring-indigo-300"
            ></input>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Your Password"
              className="w-full border border-gray-300 rounded-lg px-2 py-2 outiline-none focus:border-indigo-600 focus:ring-indigo-300"
            ></input>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300 mt-5"
          >
            {loading ? "Logining In..." : "Login"}
          </button>
        </form>

        {message && (
          <p
            className={`text-center mt-5 font-medium ${
              message.includes("Successfull")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default Form;
