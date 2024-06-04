import React from "react";

const Footer = ({ noOfItems }) => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>copyright &copy; {year}</p>
      <span>
        {noOfItems} {noOfItems > 1 ? "items" : "item"} in your list.
      </span>
    </footer>
  );
};

export default Footer;
