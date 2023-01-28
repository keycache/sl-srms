import React, { useState } from "react";

import { Link } from "react-router-dom";

const SIDEBAR_DATA = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
  },
  {
    title: "Students",
    path: "/students",
    cName: "nav-text",
  },
];
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="bg-slate-300 w-1/5">
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <div>Menu</div>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>

          {SIDEBAR_DATA.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
