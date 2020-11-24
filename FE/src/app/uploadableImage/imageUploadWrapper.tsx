import React,{PropsWithChildren} from 'react';
import ImageContainer from '../imageViewer/imageContainer'
import Uploader from '../buttonContainer/buttonCuntainer'

const ImageUploadWrapper = (props: any)  => {
  return (
      <div>
        <Uploader imageType = {'Content Image'}/>
        <ImageContainer/>
      </div>
    
   
  );
}

export default ImageUploadWrapper;