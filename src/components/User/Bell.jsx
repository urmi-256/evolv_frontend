import React from "react";
import bell from '../../assets/vectors/bell.svg'

import styles from './Bell.module.css'

const Bell = () =>{
    return (
    <button className={styles.button}>
        <img src={bell} alt="bell"/>
    </button>)
}

export default Bell;