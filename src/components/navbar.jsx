import React from "react";

const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Counters List
        {/* <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span> */}
      </a>
    </nav>
  );
};

export default NavBar;
