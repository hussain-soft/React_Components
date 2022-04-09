import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
      <nav>
        <div className="heading">
          <NavLink to="/">Template</NavLink>
          {/* <a href="/">Template</a> */}
        </div>
        <div className="list-container">
          <ul>
            <li className="items item-1">
              <NavLink to="/">home</NavLink>
              {/* <a href="/">home</a> */}
            </li>
            <li className="items item-2">
              <NavLink to="/services">services</NavLink>
              {/* <a href="/services">services</a> */}
            </li>
            <li className="items item-3">
              <NavLink to="/about">about</NavLink>
              {/* <a href="/about">about</a> */}
            </li>
            <li className="items item-4">
              <NavLink to="/contact">contact</NavLink>
              {/* <a href="/contact">contact</a> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
