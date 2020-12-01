import React from 'react';
import styles from './App.module.css';
import ImageContainer from './app/imageViewer/imageContainer'
import ImageUploadWrapper from './app/uploadableImage/imageUploadWrapper'
import cat from './images/cat2.jpg'; 
import kandinsky from './images/kandinsky.jpeg'; 
import styled_cat from './images/kandinsky_style2.jpeg'
function App() {
  return (
    <div>
      <h1 className={styles.h1}>Style transfer</h1>
      <div className = {styles.Row}>
        
        <ImageContainer content = {cat} style = {kandinsky} styled_image = {styled_cat} isImageUploader = {false}/>
      </div>
      <div className = {styles.Row}>
        <ImageUploadWrapper />
        
      </div>
    </div>
    
   
  );
}

export default App;
