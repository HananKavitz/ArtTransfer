import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';


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

export default function Exporter(props:any) {
  const classes = useStyles();
  
  const downloadStyledImage = () => {
    window.open('/downloadStyledImage')

  };
  
  return (
    <div className={classes.root}>
      <label>
        <Button 
          variant="contained" 
          color="primary" 
          component="span" 
          startIcon={<CloudDownloadIcon />} 
          onClick = {downloadStyledImage}>
            {props.imageType}
        </Button>
      </label>
      
    </div>
  );
}