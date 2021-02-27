import React from "react";
import Router from "next/router";

const LogoutBtn = ({ logoutHandler }: any) => (
  <button id="logoutBtn" onClick={() => Router.push("/api/logout")}>
    Log Out
  </button>
);

export default LogoutBtn;
