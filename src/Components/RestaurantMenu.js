import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
// images added to assets folder, were imported and named for adding in the component
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

// all images added that were added were defined and naming was done accordingly.

//Menu1
const itemData1 = [
  {
    img1: image1,

    author: 'author',
    cols: 2,
  },

];

//Menu2
const itemData2 = [
  {
    img2: image2,

    author: 'author',
    cols: 2,
  },

];
//Menu3
const itemData3 = [
  {
    img3: image3,

    author: 'author',
    cols: 2,
  },

];

//Menu4
const itemData4 = [
  {
    img4: image4,

    author: 'author',
    cols: 2,
  },

];

//Menu5
const itemData5 = [
  {
    img5: image5,

    author: 'author',
    cols: 2,
  },

];

//Menu6
const itemData6 = [
  {
    img6: image6,

    author: 'author',
    cols: 2,
  },

];

//Menu7
const itemData7 = [
  {
    img7: image7,

    author: 'author',
    cols: 2,
  },

];

//Menu8
const itemData8 = [
  {
    img8: image8,

    author: 'author',
    cols: 2,
  },

];

//Menu9
const itemData9 = [
  {
    img9: image9,

    author: 'author',
    cols: 2,
  },

];

export default function BasicImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={3}>

        {/* all the images that were defined were called here. The image numbers were changed wherever required*/}

        {/* Menu1 */}
        {itemData1.map((item) => (
          <ImageListItem key={item.img1} cols={item.cols || 1}>
            <img src={item.img1} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu2 */}
        {itemData2.map((item) => (
          <ImageListItem key={item.img2} cols={item.cols || 1}>
            <img src={item.img2} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu3 */}
        {itemData3.map((item) => (
          <ImageListItem key={item.img3} cols={item.cols || 1}>
            <img src={item.img3} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu4 */}
        {itemData4.map((item) => (
          <ImageListItem key={item.img4} cols={item.cols || 1}>
            <img src={item.img4} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu5 */}
        {itemData5.map((item) => (
          <ImageListItem key={item.img5} cols={item.cols || 1}>
            <img src={item.img5} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu6 */}
        {itemData6.map((item) => (
          <ImageListItem key={item.img6} cols={item.cols || 1}>
            <img src={item.img6} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu7 */}
        {itemData7.map((item) => (
          <ImageListItem key={item.img7} cols={item.cols || 1}>
            <img src={item.img7} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu8 */}
        {itemData8.map((item) => (
          <ImageListItem key={item.img8} cols={item.cols || 1}>
            <img src={item.img8} alt={item.title} />
          </ImageListItem>
        ))}

        {/* Menu9 */}
        {itemData9.map((item) => (
          <ImageListItem key={item.img9} cols={item.cols || 1}>
            <img src={item.img9} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
