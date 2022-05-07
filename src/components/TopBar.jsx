import { AppBar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

export const TopBar = () => {
  return (
    <AppBar className='topBar' position='fixed'>
      <div className='top-container'>
        <h2 className='logo'>AutoMart</h2>
        <nav>
          <ul>
            <li>
              <Link to='/' className='Link'>
                <span>Home</span>
              </Link>{" "}
            </li>
            <li>
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
