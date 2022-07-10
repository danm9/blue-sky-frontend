import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import BlueSkyLogo from "../Images/topLogoBar.png";
import "./NavBar.css";

// Provides the nav bar for Admin browser view
export function AdminNavBar(props) {
  // Clears ssession storage when "logout" button is pressed
  const logOut = () => {
    sessionStorage.clear();
  };

  // Returns to "Home" page
  const returnHome = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <div onClick={returnHome} className="bgheader">
        <div className="cloudyHeader">
          <Image src={BlueSkyLogo} id="wdth" />
        </div>
      </div>
      <Navbar id="bckgnd">
        <Nav className="mx-auto">
          <Nav.Link href="/" id="wfnt" data-testid="logoutNav" onClick={logOut}>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
