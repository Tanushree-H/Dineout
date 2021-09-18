import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import image1 from '../Assets/Menu1.jpg';
import image2 from '../Assets/Menu2.jpg';
import image3 from '../Assets/Menu3.jpg';
import image4 from '../Assets/Menu4.jpg';
import image5 from '../Assets/Menu5.jpg';
import image6 from '../Assets/Menu6.jpg';
import image7 from '../Assets/Menu7.jpg';
import image8 from '../Assets/Menu8.jpg';
import image9 from '../Assets/Menu9.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    width: 500,
    height: 450,
  },
}));


 
 
  const itemData1 = [
    {
      img1: image1,
      
      author: 'author',
      cols: 2,
    },
    
  ];
 
export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>
        {itemData1.map((item) => (
          <ImageListItem key={item.img1} cols={item.cols || 1}>
            <img src={item.img1} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
