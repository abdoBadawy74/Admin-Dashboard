import React, { useContext, useState, useEffect } from "react";
import "./Bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Menu } from "../../Context/MenuContext"
import { WindowSize } from "./../../Context/WindowContext";

import { links } from "./Links";

export default function SideBar() {
  const menu = useContext(Menu);
  const isOpen = menu.isOpen;
  const windowSize = useContext(WindowSize);
  console.log(windowSize.windowSize);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "70px",
          right: "0",
          width: "100%",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
          display:
            windowSize.windowSize < "768"
              ? isOpen
                ? "block"
                : "none"
              : "none",
        }}
      ></div>

      <div
        className="side-bar"
        style={{
          right: windowSize.windowSize < "768" ? (isOpen ? "0" : "-220px") : "0",
          width: isOpen ? "220px" : "fit-content",
          position: windowSize.windowSize < "768" ? "fixed" : "sticky",
        }}
      >

        <div className="mt-4">
          {links.map((link, key) => {
            return (
              <NavLink
                key={key}
                to={link.path}
                className={"flex px-2 py-2 items-center gap-2 my-2 hover:bg-[#E5ECF6] transition rounded"}
              >
                <img
                  style={{
                    padding: isOpen ? "10px 8 10px 15px" : "10px 8px",
                  }}
                  src={link.icon}
                  alt="icon"
                />
                <p className="" style={{ display: isOpen ? "block" : "none" }}>
                  {link.name}
                </p>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}