import React, { useState } from "react";

import Header from "./Header.jsx";
import User from "./User/User.jsx";

import USER_DATA from "../assets/DUMMY_DATA.json";
import styles from "./Container.module.css";

const Container = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWindowWidth(window.innerWidth));

  return (
    <div className={styles.container}>
      {windowWidth > 995 && <Header />}
      {USER_DATA.users.map((user, index) => {
        return (
          <User windowWidth={windowWidth} key={user.userId} index={index} />
        );
      })}
    </div>
  );
};

export default Container;
