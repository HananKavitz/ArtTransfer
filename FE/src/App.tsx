import React from 'react';
import styles from './App.module.css';
import ImageContainer from './app/imageViewer/imageContainer'
import ImageUploadWrapper from './app/uploadableImage/imageUploadWrapper'

function App() {
  return (
    <div className = {styles.Row}>
      <h1 className={styles.h1}>Style transfer</h1>
      <ImageContainer />
      <ImageUploadWrapper />
    </div>
   
  );
}

export default App;
