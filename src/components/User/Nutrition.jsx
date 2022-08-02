import React, { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { PieChart } from "react-minimal-pie-chart";
import Target from "../UI/Target.jsx";
import ArrowButton from "../UI/ArrowButton";
import Tooltip from "../ToolTip/Tooltip.jsx";


import USER_DATA from "../../assets/DUMMY_DATA.json";
import styles from "./Nutrition.module.css";

const Nutrition = ({ index , isMobile}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const userId = USER_DATA.users[index].userId;
  const proteinConsumed = USER_DATA.users[index].proteinConsumed;
  const proteinTarget = USER_DATA.users[index].proteinTarget;
  const fatConsumed = USER_DATA.users[index].fatConsumed;
  const fatTarget = USER_DATA.users[index].fatTarget;
  const carbConsumed = USER_DATA.users[index].carbConsumed;
  const carbTarget = USER_DATA.users[index].carbTarget;
  const calorieIntake = USER_DATA.users[index].calorieIntake;
  const calorieTarget = USER_DATA.users[index].calorieTarget;

  const totalConsumed = proteinConsumed + fatConsumed + carbConsumed;

  const macros = [
    {
      name: "PROTEIN",
      target: proteinTarget,
      consumed: proteinConsumed,
      color: "#F45C84",
    },
    {
      name: "FATS",
      target: fatTarget,
      consumed: fatConsumed,
      color: "#03C6FA",
    },
    {
      name: "CARBS",
      target: carbTarget,
      consumed: carbConsumed,
      color: "#F0C50F",
    },
  ];

  return (
    <div className={styles.box}>
      <Tippy visible={showTooltip} placement={`${isMobile ? "right" : "bottom"}`} content={<Tooltip macros={macros} />}>
        <span
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
          <PieChart
          animate={true}
          animationEasing="ease-out"
            totalValue={1}
            data={[
              {
                title: "Carbs",
                value: carbConsumed / totalConsumed,
                color: "#F0C50F",
              },
              {
                title: "Fats",
                value: fatConsumed / totalConsumed,
                color: "#03C6FA",
              },
              {
                title: "Protein",
                value: proteinConsumed / totalConsumed,
                color: "#F45C84",
              },
            ]}
            lineWidth={27}
            label={() => calorieIntake}
            labelStyle={{
              fontSize: "20px",
              fontFamily: "Montserrat",
              fontWeight: 700,
              lineHeight: "15px",
              fill: "#ffffff",
            }}
            labelPosition={0}
          />
          <p className={`subtitle ${styles.calorie}` }>calorie</p>
        </span>
      </Tippy>
      <Target initialTarget={calorieTarget} changeValue={100} />
      <ArrowButton linkTo={`/${userId}/nutrition`} />
    </div>
  );
};

export default Nutrition;
