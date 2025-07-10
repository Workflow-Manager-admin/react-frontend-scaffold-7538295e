import React from "react";

// PUBLIC_INTERFACE
function Footer() {
  /** Footer with copyright, styled for light theme */
  return (
    <footer className="footer">
      <div className="container">
        <span>
          &copy; {new Date().getFullYear()} ReactKavia. All rights reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
