import React from "react";
import { Link, Outlet } from "react-router-dom";

function Layout() {
  let userAccessToken = localStorage.getItem("my-user");

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <Link to="list">Lists</Link>
          </li>
          <li>
            <Link to="tailwind">tailwind</Link>
          </li>
          <li>
            <Link to="login">Login Here</Link>
          </li>
          {userAccessToken && (
            <li>
              <Link to="my/profile">My Profile</Link>
            </li>
          )}
          <li>
            <Link to="users">Users List</Link>
          </li>
          <li>
            <Link to="hooks">Hooks</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

export default Layout;
