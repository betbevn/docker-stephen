import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/users"}>Users</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
