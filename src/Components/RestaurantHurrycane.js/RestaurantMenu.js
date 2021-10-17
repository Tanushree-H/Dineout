import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// images added to assets folder, were imported and named for adding in the component
import image1 from '../../Assets/Menu1.jpg';
import image2 from '../../Assets/Menu2.jpg';
import image3 from '../../Assets/Menu3.jpg';
import image4 from '../../Assets/Menu4.jpg';
import image5 from '../../Assets/Menu5.jpg';
import image6 from '../../Assets/Menu6.jpg';
import image7 from '../../Assets/Menu7.jpg';
import image8 from '../../Assets/Menu8.jpg';
import image9 from '../../Assets/Menu9.jpg';

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
    alignItems: 'center',
    alignContent: 'center',
    justify: 'center'

  },
}));

// all images added that were added were defined and naming was done accordingly.

//Menu1
const itemData = [
  {
    img: image1,

    author: 'author',
    cols: 2,
  },

  //Menu2
  {
    img: image2,

    author: 'author',
    cols: 2,
  },


  //Menu3

  {
    img: image3,

    author: 'author',
    cols: 2,
  },


  //Menu4

  {
    img: image4,

    author: 'author',
    cols: 2,
  },



  //Menu5

  {
    img: image5,

    author: 'author',
    cols: 2,
  },



  //Menu6

  {
    img: image6,

    author: 'author',
    cols: 2,
  },



  //Menu7
  {
    img: image7,

    author: 'author',
    cols: 2,
  },



  //Menu8

  {
    img: image8,

    author: 'author',
    cols: 2,
  },



  //Menu9

  {
    img: image9,

    author: 'author',
    cols: 2,
  },

];

export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={4} alignContent='center' alignItems='center'>

        {/* all the images that were defined were called here. The image numbers were changed wherever required*/}


        {itemData.map((item) => (
          <ImageListItem key={item.img} cols={item.cols || 1}>
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}


      </ImageList>
    </div>
  );
}
