import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { name } from "./utils/constants";
import HelloWorld from "./pages/Hello";
import NewComponent from "./pages/NewComponent";
import Greeting from "./pages/Greeting";
import Alert from "./pages/Alert";
import Conditional from "./pages/Conditional";
import Lists from "./pages/Lists";
import Form from "./pages/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";
import Hooks from "./pages/Hooks";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Greeting />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="list" element={<Lists />} />
            <Route path="login" element={<Form />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
