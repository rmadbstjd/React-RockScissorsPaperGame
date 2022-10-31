import React from 'react';
import styles from "./Box.module.css";
import {FaRegHandRock, FaHandScissors, FaRegHandPaper} from "react-icons/fa";
function Box({player,userEl,cpEl,result}) {
        
    
        if(player ==='user')
        return (
            <div className={result==='win'?styles.box1:result==='lose'?styles.box2:styles.box}>
                    {player}
                    <div>{result}</div>
                    <div>{userEl==='rock'?<FaRegHandRock size="100"></FaRegHandRock>:userEl==='scissors'?<FaHandScissors size="100"></FaHandScissors>:userEl==='paper'?<FaRegHandPaper size="100"></FaRegHandPaper>:null}
                    </div>
            </div>
        );
        else if(player ==='computer') {
            if(result === 'win') {
                result = 'lose';
            }
            else if(result ==='lose') {
                result = 'win';
            }
            return (
                <div className={result==='win'?styles.box1:result==='lose'?styles.box2:styles.box}>
                        {player}
                        <div>{result}</div>
                        <div>{cpEl==='rock'?<FaRegHandRock size="100"></FaRegHandRock>:cpEl==='scissors'?<FaHandScissors size="100"></FaHandScissors>:cpEl==='paper'?<FaRegHandPaper size="100"></FaRegHandPaper>:null}
                        </div>
                       
                </div>
            );  
        }
    
};

export default Box;