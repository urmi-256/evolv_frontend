import React from "react";
import { useNavigate } from "react-router-dom";
import arrow from "../../assets/vectors/arrow.svg";
import alert from "../../assets/vectors/alert.svg";

import styles from "./ArrowButton.module.css";

const ArrowButton = ({ linkTo, feedback }) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(linkTo);
  };

  return (
    <button
      className={`${feedback ? `${styles.feedbackState}` : ""} ${
        styles.button
      }`}
      onClick={navigateTo}
    >
      <img src={feedback ? alert : arrow} />
    </button>
  );
};

export default ArrowButton;
