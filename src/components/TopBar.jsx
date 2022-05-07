import { AppBar } from "@material-ui/core";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export const TopBar = () => {
  const { pathname } = useLocation();
  const location = pathname.split("/")[1];

  return (
    <AppBar className='topBar' position='fixed'>
      <div className='top-container'>
        <h2 className='logo'>AutoMart</h2>
        <nav>
          <ul>
            <li
              style={{ borderBottom: location === "" && "1px solid #221f50" }}
            >
              <Link to='/' className='Link'>
                <span>Home</span>
              </Link>{" "}
            </li>
            <li
              style={{
                borderBottom: location === "post" && "1px solid #221f50",
              }}
            >
              {" "}
              <Link to='/post' className='Link'>
                <span>Post Advert</span>{" "}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </AppBar>
  );
};
