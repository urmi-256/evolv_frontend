import React, { useState } from "react";
import Workout from "./Workout.jsx";
import Nutrition from "./Nutrition.jsx";
import Bell from "./Bell.jsx";
import Steps from "./Steps.jsx";
import StepsIcon from "../../assets/vectors/steps.svg";
import NutritionIcon from "../../assets/vectors/nutrition.svg";
import DumbbellIcon from "../../assets/vectors/dumbbell.png";
import ArrowIcon from "../../assets/vectors/arrow.svg";
import pfpSrc from "../../assets/pfp.png";

import DUMMY_DATA from "../../assets/DUMMY_DATA.json";
import styles from "./User.module.css";


const User = ({ index, windowWidth }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownToggler = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.row}>
      <div className={styles.name} onClick={dropdownToggler}>
        <img src={pfpSrc} alt="profile-picture" />
        <span>
          <h3>{DUMMY_DATA.users[index].name}</h3>
          <p className="subtitle space">{DUMMY_DATA.users[index].email}</p>
        </span>
        {windowWidth <= 995 && (
          <img
            src={ArrowIcon}
            className={`${styles.dropdown} ${
              dropdownOpen ? `${styles.open}` : ""
            }`}
            alt="dropdown"
          />
        )}
      </div>
      {(windowWidth > 995 || dropdownOpen) && (
        <>
          {windowWidth <= 995 && (
            <div className={styles.segment}>
              <div className={styles.heading}>
                <img src={StepsIcon} alt="icon" />
                <p>Steps</p>
              </div>
            </div>
          )}
          <Steps index={index} />
          {windowWidth <= 995 && (
            <div className={styles.segment}>
              <div className={styles.heading}>
                <img src={DumbbellIcon} className="dumbbell" alt="icon" />
                <p>Workout</p>
              </div>
            </div>
          )}
          <Workout index={index} />
          {windowWidth <= 995 && (
            <div className={styles.segment}>
              <div className={styles.heading}>
                <img src={NutritionIcon} alt="icon" />
                <p>Nutrition</p>
              </div>
            </div>
          )}
          <Nutrition index={index} isMobile={windowWidth <= 995} />
          <Bell />
        </>
      )}
    </div>
  );
};

export default User;
