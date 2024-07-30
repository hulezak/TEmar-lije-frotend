import React from "react";

import { Link } from "react-router-dom";

const ALink = ({ linkName, goto }) => {
  return (
    <li>
      <Link to={goto} className="navbar-logo">
        {linkName}
      </Link>
    </li>
  );
};

export default ALink;
