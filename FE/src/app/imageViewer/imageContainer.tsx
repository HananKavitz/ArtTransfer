import React,{ComponentProps} from 'react';
import Uploader from '../importButton/importButton'
import styles from './imageViewer.module.css';
import Exporter from '../exportButton/exportButton';

interface IProps {
    content: string;
    style: string;
    styled_image: string;
    isImageUploader: boolean;
}

const ImageContainer = (props: IProps) => {
    const contentUploader = props.isImageUploader?<Uploader imageType = {'Content Image'}/>: null;
    const styleUploader = props.isImageUploader?<Uploader imageType = {'Style Image'}/>: null;
    const exproter = props.isImageUploader?<Exporter imageType = {'Save Image'}/>: null;
  return (
      <div>
        <div className={styles.Column}> 
            <img src={props.content} 
                alt={"content"} 
                className={styles.imageViewer}/>
            {contentUploader}
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>+</h1>
        </div>
        
        <div className={styles.Column}> 
            <img src={props.style} 
                alt={"style"} 
                className={styles.imageViewer}/>
            
            {styleUploader}
        </div>
        
        <div className={styles.Column}> 
            <h1 className = {styles.plus}>=</h1>
        </div>

        <div className={styles.Column}> 
            <img src={props.styled_image} 
                alt={"styled images"} 
                className={styles.imageViewer}/>
            {exproter}
        </div>
      </div>
    
   
  );
}

export default ImageContainer;