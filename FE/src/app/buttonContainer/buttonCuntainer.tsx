import React, {useState} from 'react';
import ImageContainer from '../imageViewer/imageContainer'
import ImageUploader from 'react-images-upload';


const Uploader = (props: any) => {

  const [pictures, setPictures] = useState([]);
  const onDrop = (pictureFiles: any,picturesDataURL:string[]) => {
    setPictures(pictureFiles);
    console.log(pictureFiles)
  };

  return <ImageUploader 
            withIcon = {false}
            buttonText = {props.imageType}
            onChange = {onDrop}
            imgExtension = {['.jpg','.jpeg', '.gif', '.png']}
            maxFileSize = {5242880}
            withLabel={false}
            singleImage = {true}
        /> 
  
}

 const uploadToBackend = (image: object, config: object) => {
  // send to bucket
  console.log(image);
  // axios.post('/uploadImage', image, config)
  //   .then(() => {
  //     console.log('uploaded')
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   });

 };
export default Uploader;