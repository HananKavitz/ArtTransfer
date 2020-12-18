import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import axios from 'axios';
import DropZone, { FileRejection } from 'react-dropzone';

interface IProps {
  imageType: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    }
  }),
);

const sendToServer = (acceptedFiles: File[], rejectedFiles: FileRejection[]) =>{
  console.log(acceptedFiles);
  const file = acceptedFiles[0];
  let fd = new FormData();
  fd.append(file.type,file,file.name)
  axios.post('/myServer',fd)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.error(err);
    })
};

const Uploader = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
        <DropZone 
                  onDrop = { (acceptedFiles: File[], rejectedFiles: FileRejection[]) => sendToServer(acceptedFiles, rejectedFiles)} 
                  accept = {['.jpg','.jpeg']}
                  multiple = {false}
                  noDrag = {true}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <Button 
                variant="contained" 
                color="primary" 
                component="span" 
                startIcon={<CloudUploadIcon />}
                >
                  {props.imageType}
              </Button>
              
            </div>

          )}
        </DropZone>
  
    </div>
  );
}

export default Uploader;