import React from "react";
import "../styles/footer.css";

function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement("p", null, "© 2024 Cabinet Dentaire. Tous droits réservés.")
  );
}

export default Footer;
