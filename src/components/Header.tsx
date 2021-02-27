import { withRouter } from "next/router";

const Header = ({ router: { pathname } }: any) => (
  <div className="navbar"></div>
);

export default withRouter(Header);
