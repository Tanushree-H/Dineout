import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
// images added to assets folder, were imported and named for adding in the component
import image1 from '../../Assets/AllPhotos1.jpg';
import image2 from '../../Assets/AllPhotos2.jfif';
import image3 from '../../Assets/AllPhotos3.jfif';
import image4 from '../../Assets/AllPhotos4.jfif';
import image5 from '../../Assets/AllPhotos5.jpg';
import image6 from '../../Assets/AllPhotos6.jpg';
import image7 from '../../Assets/AllPhotos7.jfif';
import image8 from '../../Assets/AllPhotos8.jpg';
import image9 from '../../Assets/AllPhotos9.jpg';
import image10 from '../../Assets/AllPhotos10.jpg';

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
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

// all images added that were added were defined and naming was done accordingly
const itemData = [
  {
    //  AllPhotos1
    img: image1,
    title: 'Garam Samosas!!!',
    author: 'Sheetal Chopra',
  },

  {
    //  AllPhotos2
    img: image2,
    title: 'Bread kinda day',
    author: 'Avi Singh',
  },


  {
    //  AllPhotos3
    img: image3,
    title: 'Each bite good..',
    author: 'Riya Ahuja',
  },

  {
    //  AllPhotos4
    img: image4,
    title: 'China Town',
    author: 'Anisha Parmar',
  },


  {
    //  AllPhotos5
    img: image5,
    title: 'Brunch',
    author: 'Ariya Shah',
  },


  {
    //  AllPhotos6
    img: image6,
    title: 'So.... Good',
    author: 'Aakash Jain',
  },


  {
    //  AllPhotos7
    img: image7,
    title: 'Sandwizza',
    author: 'Rasika Shetty',
  },


  {
    //  AllPhotos8
    img: image8,
    title: 'Street Food',
    author: 'Hrithik Pawar',
  },


  {
    //  AllPhotos9
    img: image9,
    title: 'Chicken love',
    author: 'Harsh Goel',
  },


  {
    //  AllPhotos10
    img: image10,
    title: 'Spice!!!',
    author: 'Asha Patel',
  },

];

export default function TitlebarImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.imageList}>
        <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </ImageListItem>

        {/* all the images that were defined were called here. The image numbers were changed wherever required*/}

        
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              subtitle={<span>by: {item.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${item.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}

       
      </ImageList>
    </div>
  );
}
