import React from "react";

import styles from "./Macro.module.css";
const Macro = ({ value }) => {
  const { name, target, consumed, color } = value;

  const percentage = consumed/target * 100;

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <p>{name}</p>
        <p>{target}g</p>
      </div>
      <div className={styles.progressBar}>
        <div
          style={{
            "--width": `${(percentage)}%`,
            backgroundColor: `${color}`,
          }}
        ></div>
        {percentage<90 ? <p           style={{
            "--width": `${(percentage)+2}%`,
           "color": `${color}`,
          }}>{consumed}g</p> : <p           style={{
            "--width": `${(percentage)-12}%`,
           "color": "#ffffff",
          }}>{consumed}g</p>}
      </div>
    </div>
  );
};

export default Macro;
