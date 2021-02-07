import Link from "next/link";
import { withRouter } from "next/router";
import { Navbar } from "react-bootstrap";
import LogoutBtn from "./Auth/Logout";

const Header = ({ router: { pathname } }: any) => (
  <Navbar className="justify-content-between navBar">
    <Navbar.Brand className="navBrand">GraphQL Tutorial App</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end navContainer navButton">
      <LogoutBtn
        logoutHandler={() => {
          ("");
        }}
      />
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(Header);
