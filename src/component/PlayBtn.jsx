import React from 'react';
import styles from './PlayBtn.module.css'
import {FaHandRock, FaHandScissors, FaRegHandPaper} from "react-icons/fa";


function PlayBtn({userEl,setUserEl,cpEl,setCpEl,result,setResult})  {
    
    const handleRock = () => {
        
        play('rock',userEl,setUserEl,cpEl,setCpEl,result,setResult);
    }
    const handleScissors = () => {
        
        play('scissors',userEl,setUserEl,cpEl,setCpEl,result,setResult);
    }
    const handlePaper = () => {
        
        play('paper',userEl,setUserEl,cpEl,setCpEl,result,setResult);
    }
    return (
        <div className={styles.btn}>
            <FaHandRock size="27" onClick={handleRock}></FaHandRock>
            <FaHandScissors size="27" onClick={handleScissors}/>
            <FaRegHandPaper size="27" onClick={handlePaper}/>
            
        </div>
    );
};
function play(element,userEl,setUserEl,cpEl,setCpEl,result,setResult) {
    
    let rand = Math.random();
    let cpElement = Math.floor(rand*3);
    let result1 ='';
    //setComputerEl(() => re);
    if(cpElement === 0) {
        cpElement = 'rock';
        //setResult(() =>'rock');
        
    }
    else if(cpElement === 1) {
        cpElement = 'scissors';
        //setResult(() =>'scissors');
        
    }
    else {
        cpElement = 'paper';
        //setResult(() =>'paper');
       
    }

    if(element === 'rock') {
       
        switch(cpElement) {
            case 'rock':
               result1='draw';
                //setTest(() => 'draw')
                break;
            case 'scissors':
                result1='win';
                //setTest(() => 'win')
                break;
            case 'paper':
                result1='lose';
                //setTest(() => 'lose')
                break;
            default:
                console.log("에러 발생");
                break;
        }
    }
    else if(element === 'scissors') {
        switch(cpElement) {
            case 'rock':
                result1='lose';
                //setTest(() => 'lose')
                break;
            case 'scissors':
                result1='draw';
                //setTest(() => 'draw')
                break;
            case 'paper':
                result1='win';
                //setTest(() => 'win')
                break;
            default:
                console.log("에러 발생");
                break;
        }
    }
    else {
        switch(cpElement) {
            case 'rock':
                result1='win';
                //setTest(() => 'win')
                break;
            case 'scissors':
                result1='lose';
                //setTest(() => 'lose')
                break;
            case 'paper':
                result1='draw';
                //setTest(() => 'draw')
                break;
            default:
                console.log("에러 발생");
                break;
        }
    }
    console.log(`유저 : ${element} 컴퓨터 : ${cpElement} 결과 :${result1}`)
    setUserEl(element);
    setCpEl(cpElement);
    setResult(result1);
    
 
}
export default PlayBtn;