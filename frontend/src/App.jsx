import React from "react";
import "./styles/style.css";
import "./styles/style.css";
// import "./javascripts/script.js"; 
import Header from "./components/Home/Header";
import Page1 from "./components/Home/Page1";
import Page2 from "./components/Home/Page2";
import Page3 from "./components/Home/Page3";
import Page4 from "./components/Home/Page4";
import Footer from "./components/Home/Footer";
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="bg-[#f4eede]">
      <Header>
        <Login />
      </Header>
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
    </div>
  );
}

export default App;
