import React,{ComponentProps} from 'react';

import styles from './imageViewer.module.css';

interface IProps {
    content: string;
    style: string;
    styled_image: string;
}

const ImageContainer = (props: IProps) => {
  return (
      <div>
        <div className={styles.Column}> 
            <img src={props.content} 
                alt={"content"} 
                className={styles.imageViewer}/>
                
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>+</h1>
        </div>
        
        <div className={styles.Column}> 
            <img src={props.style} 
                alt={"style"} 
                className={styles.imageViewer}/>
                
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>=</h1>
        </div>

        <div className={styles.Column}> 
            <img src={props.styled_image} 
                alt={"styled images"} 
                className={styles.imageViewer}/>
                
        </div>
      </div>
    
   
  );
}

export default ImageContainer;