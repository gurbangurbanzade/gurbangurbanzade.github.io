"use client";
import React, { useState } from "react";
import BackBtn from "../../components/backBtn/index";
import "./style.scss";
function Riddle() {
  const [category, setcategory] = useState("Select a Category");
  return (
    <>
      {/* <BackBtn /> */}
      <div className="riddle">
        <div className="content">
          <header className="header" role="banner">
            <h1 className="logo">
              <a href="/">
                <span
                  onClick={() => {
                    <Link to={"/"}></Link>;
                  }}
                >
                  Riddle
                </span>
              </a>
            </h1>
            <div className="nav-wrap">
              <nav className="main-nav" role="navigation">
                <ul
                  className="unstyled list-hover-slide"
                  style={{ flexDirection: "column" }}
                >
                  <li>
                    <button
                      onClick={() => {
                        setcategory("HTML");
                      }}
                    >
                      HTML
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setcategory("CSS");
                      }}
                    >
                      CSS
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setcategory("BootStrap");
                      }}
                    >
                      BootStrap
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setcategory("React");
                      }}
                    >
                      React
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <div className="mainContent">
            <h1>{category}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Riddle;
