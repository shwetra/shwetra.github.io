import React from "react";
import { Button } from "@chakra-ui/react";
// import { NavLink as Link, useLocation } from "react-router-dom";
import  {Link} from "react-scroll"
function NavLink({ to, name, onClose, ...rest }) {
  // const location = useLocation();

  // const isActive = location.pathname === to;

  return (
    <Link to={to} spy={true} smooth={true} offset={50} duration={2000} onClick={onClose}>
      <Button
        
        size="sm"
         
        {...rest}
      >
        {name}
      </Button>
    </Link>
  );
}

export default NavLink;