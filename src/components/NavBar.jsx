import { Button, Grommet } from "grommet";
import React from "react";
import "../App.css";
import { auth } from "../firebase/config";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const theme = {
    global: {
      colors: {
        text: "white",
      },
    },
  };
  return (
    <div className="navBar-wrap0">
      <div className="nav-wrap1">
        <div className="navitem">
          <div className="title">
            <h3>Memories v1.0</h3>
          </div>
        </div>{" "}
        <div className="nav-wrap2">
          {auth.currentUser && (
            <div className="navitem">
              <Grommet theme={theme}>
                <Button
                  label="Sign out"
                  color="white"
                  size="small"
                  onClick={() => {
                    auth.signOut();
                  }}
                />
              </Grommet>
            </div>
          )}
          <div className="navitem">
            <NavLink
              to="/about"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              {" "}
              About{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
