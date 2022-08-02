import React, { useState } from "react";
import Add from "../../assets/vectors/add.svg";
import Minus from "../../assets/vectors/minus.svg";

import styles from "./Target.module.css";

const Target = ({ initialTarget, changeValue }) => {
  const [target, setTarget] = useState(initialTarget || 1000);

  const incrementHandler = () => {
    setTarget((prevTarget) => prevTarget + changeValue);
  };

  const decrementHandler = () => {
    setTarget((prevTarget) => {
      if (prevTarget - changeValue <= 0) return 0;
      return prevTarget - changeValue;
    });
  };

  return (
    <div className={styles.target}>
      <button style={{ marginTop: "0" }} onClick={incrementHandler}>
        <img src={Add} alt="increase" />
      </button>
      <span>
        <h2>{target / 1000}k</h2>
        <p className="subtitle space" style={{ letterSpacing: "1px" }}>
          target
        </p>
      </span>
      <button style={{ marginBottom: "0" }} onClick={decrementHandler}>
        <img src={Minus} alt="decrease" />
      </button>
    </div>
  );
};

export default Target;
