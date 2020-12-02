import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

interface IProps {
  imageType: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    input: {
      display: 'none',
    },
  }),
);

const Uploader = (props: IProps) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple = {false}
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button 
          variant="contained" 
          color="primary" 
          component="span" 
          startIcon={<CloudUploadIcon />}>
          {props.imageType}
        </Button>
      </label>
      
    </div>
  );
}

export default Uploader;