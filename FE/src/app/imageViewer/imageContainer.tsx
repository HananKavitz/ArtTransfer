import React from 'react';

import styles from './imageViewer.module.css';
import love from '../../love.jpg'; // with import

function ImageContainer() {
  return (
      <div>
        <div className={styles.Column}> 
            <img src={love} 
                alt={"content"} 
                className={styles.imageViewer}/>
                
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>+</h1>
        </div>
        
        <div className={styles.Column}> 
            <img src={love} 
                alt={"style"} 
                className={styles.imageViewer}/>
                
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>=</h1>
        </div>

        <div className={styles.Column}> 
            <img src={love} 
                alt={"styled images"} 
                className={styles.imageViewer}/>
                
        </div>
      </div>
    
   
  );
}

export default ImageContainer;