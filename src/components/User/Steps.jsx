import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Target from "../UI/Target.jsx";

import USER_DATA from "../../assets/DUMMY_DATA.json";
import "react-circular-progressbar/dist/styles.css";
import styles from "./Steps.module.css";

const Steps = ({ index }) => {
  const stepsWalked = USER_DATA.users[index].stepsWalked;
  const stepsTarget = USER_DATA.users[index].stepsTarget;
  const percentage = (stepsWalked / stepsTarget) * 100;

  return (
    <div className={styles.box}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          rotation: 0.25,
          pathColor: "#7FD18C",
        })}
      >
        <h4>{stepsWalked}</h4>
        <p className="subtitle">
          walked
        </p>
      </CircularProgressbarWithChildren>
      <Target initialTarget={stepsTarget} changeValue={500} />
    </div>
  );
};

export default Steps;
