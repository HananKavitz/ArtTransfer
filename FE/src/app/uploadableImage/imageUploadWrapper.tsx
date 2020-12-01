import React,{PropsWithChildren} from 'react';
import ImageContainer from '../imageViewer/imageContainer'
import Uploader from '../buttonContainer/buttonCuntainer'
import cat from '../../images/cat2.jpg'; 
import kandinsky from '../../images/kandinsky.jpeg'; 
import styled_cat from '../../images/kandinsky_style2.jpeg'

const ImageUploadWrapper = (props: any)  => {
  return (
      <div>
        <Uploader imageType = {'Content Image'}/>
        <ImageContainer content = {cat} style = {kandinsky} styled_image = {styled_cat}/>
      </div>
    
   
  );
}

export default ImageUploadWrapper;