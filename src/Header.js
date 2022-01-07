import React from "react";
import "./Header.css";
import Home from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import SuperviserAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotifictinIcon from "@material-ui/icons/Notifications";

import HeaderOption from "./HeaderOption";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn-icons.flaticon.com/png/512/3536/premium/3536505.png?token=exp=1641271973~hmac=67ae1f9c4add15e2902fc157861851f3"
          alt=""
        />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={Home} title={"Home"} />
        <HeaderOption Icon={SuperviserAccountIcon} title={"My Network"} />
        <HeaderOption Icon={BusinessCenterIcon} title={"Jobs"} />
        <HeaderOption Icon={ChatIcon} title={"Messaging"} />
        <HeaderOption Icon={NotifictinIcon} title={"Notifications"} />
        <HeaderOption avatar={true} title="me" onClick={logOutOfApp} />
      </div>
    </div>
  );
}

export default Header;
