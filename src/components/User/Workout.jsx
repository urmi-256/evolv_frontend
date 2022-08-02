import React from "react";
import performedSrc from "../../assets/vectors/performed.svg";
import scheduledSrc from "../../assets/vectors/scheduled.svg";
import ArrowButton from "../UI/ArrowButton";

import USER_DATA from "../../assets/DUMMY_DATA.json";
import styles from "./Workout.module.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];


// Uses ISO 8601 as date format in JSON (Standard format)
const Workout = ({ index }) => {
  const userId = USER_DATA.users[index].userId;
  const performedDate = new Date(USER_DATA.users[index].performedDate);
  const scheduledDate = new Date(USER_DATA.users[index].scheduledDate);
  const feedback = USER_DATA.users[index].feedback;

  const currentDate = new Date();
  const alertState =
    currentDate.getDate() === scheduledDate.getDate() &&
    currentDate.getMonth() === scheduledDate.getMonth() &&
    currentDate.getFullYear() === scheduledDate.getFullYear();

  return (
    <div className={styles.box}>
      <div className={styles.date}>
        <span>
          <img src={performedSrc} alt="performedSrc" />
          <p>{`${performedDate.getUTCDate()} ${
            months[performedDate.getUTCMonth()]
          }`}</p>
        </span>
        <span className={`${alertState && `${styles.alert}`}`}>
          <img src={scheduledSrc} alt="scheduledSrc" />
          <p>{`${scheduledDate.getUTCDate()} ${
            months[scheduledDate.getUTCMonth()]
          }`}</p>
        </span>
      </div>
      <ArrowButton feedback={feedback} linkTo={`/${userId}/workout`} />
    </div>
  );
};

export default Workout;
