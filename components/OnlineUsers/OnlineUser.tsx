import React from "react";

export interface User {
  name: string;
}
export interface OnlineUserProps {
  user: User;
}

const OnlineUser = ({ user }: OnlineUserProps) => {
  return (
    <div className="userInfo">
      <div className="userImg">
        <i className="far fa-user" />
      </div>
      <div className="userName">{user.name}</div>
    </div>
  );
};

export default OnlineUser;
