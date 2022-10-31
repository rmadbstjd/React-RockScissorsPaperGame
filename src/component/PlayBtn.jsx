import React from 'react';
import styles from './PlayBtn.module.css'
import {FaHandRock, FaHandScissors, FaRegHandPaper} from "react-icons/fa";

function play(element) {

    let rand = Math.random();
    let result = Math.floor(rand*3);
    if(result === 0) {
        result = 'rock';
    }
    else if(result === 1) {
        result = 'scissors';
    }
    else {
        result ='paper';
    }

   
}

function PlayBtn()  {
    const handleRock = () => {
        
        play('rock');
    }
    const handleScissors = () => {
        
        play('scissors');
    }
    const handlePaper = () => {
        
        play('paper');
    }
    return (
        <div className={styles.btn}>
            <FaHandRock size="27" onClick={handleRock}></FaHandRock>
            <FaHandScissors size="27" onClick={handleScissors}/>
            <FaRegHandPaper size="27" onClick={handlePaper}/>
            
        </div>
    );
};

export default PlayBtn;