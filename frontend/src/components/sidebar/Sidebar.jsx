import React, { useState } from "react";

import { Link } from "react-router-dom";

const SIDEBAR_DATA = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Students",
    path: "/students",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Results",
    path: "/results",
  },
];
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="bg-slate-300 w-1/5 h-screen flex items-center justify-center">
      <nav className="w-full">
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars"></Link>
          </li>

          {SIDEBAR_DATA.map((item, index) => {
            return (
              <li className="cursor-pointer p-4 hover:bg-slate-400" key={index}>
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
