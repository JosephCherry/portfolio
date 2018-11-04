import React from "react";
import { Link } from "@reach/router";

const NavLink = props => {
  const { activeClass, ...restProps } = props;
  return (
    <Link
      {...restProps}
      getProps={({ isCurrent }) => {
        let className = props.className || "";
        if (isCurrent) {
          className += " " + activeClass;
        }

        return {
          className
        };
      }}
    />
  );
};

export default NavLink;
