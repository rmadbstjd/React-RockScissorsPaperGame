import React from 'react';
import styles from "./Box.module.css";
function Box({player}) {
    return (
        <div className={styles.box}>
            {player}
        </div>
    );
};

export default Box;