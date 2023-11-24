import * as React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
const Header = styled(AppBar)`
  background-color: black;
  margin-bottom: 18px;
  /* font-style: ; */
`;

const Text = styled(NavLink)`
  font-size: 18px;
  margin-right: 18px;
  color: inherit;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <>
      <Header position="static">
        <Toolbar>
          <Text to="/" style={{ fontSize: "28px" }}>
            Rester
          </Text>
          <Text to="/add">Add User</Text>
          <Text to="/all">All Users </Text>
        </Toolbar>
      </Header>
    </>
  );
}
