import React from "react";
import StepsIcon from '../assets/vectors/steps.svg'
import NutritionIcon from '../assets/vectors/nutrition.svg'
import DumbbellIcon from '../assets/vectors/dumbbell.png'

import styles from './Header.module.css'
const Header = () =>{
    return <div className={styles.header}>
        <div className={styles.heading}>
            <img src={StepsIcon} alt="icon"/>
            <p>Steps</p>
        </div>
        <div className={styles.heading}>
            <img src={DumbbellIcon} className="dumbbell" alt="icon"/>
            <p>Workout</p>
        </div>
        <div className={styles.heading}>
            <img src={NutritionIcon} alt="icon"/>
            <p>Nutrition</p>
        </div>
    </div>
}

export default Header;