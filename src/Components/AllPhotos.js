import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import image1 from '../Assets/AllPhotos1.jpg';
import image2 from '../Assets/AllPhotos2.jfif';
import image3 from '../Assets/AllPhotos3.jfif';
import image4 from '../Assets/AllPhotos4.jfif';
import image5 from '../Assets/AllPhotos5.jpg';
import image6 from '../Assets/AllPhotos6.jpg';
import image7 from '../Assets/AllPhotos7.jfif';
import image8 from '../Assets/AllPhotos8.jpg';
import image9 from '../Assets/AllPhotos9.jpg';
import image10 from '../Assets/AllPhotos10.jpg';

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


  const itemData1 = [
   {
     img1: image1,
      title: 'Garam Samosas!!!',
      author: 'Sheetal Chopra',
    },
    
  ];

  const itemData2 = [
    {
      img2: image2,
       title: 'Bread kinda day',
       author: 'Avi Singh',
     },
     
   ];

   const itemData3 = [
    {
      img3: image3,
       title: 'Each bite good..',
       author: 'Riya Ahuja',
     },
     
   ];

   const itemData4 = [
    {
      img4: image4,
       title: 'China Town',
       author: 'Anisha Parmar',
     },
     
   ];

   const itemData5 = [
    {
      img5: image5,
       title: 'Brunch',
       author: 'Ariya Shah',
     },
     
   ];

   const itemData6 = [
    {
      img6: image6,
       title: 'So.... Good',
       author: 'Aakash Jain',
     },
     
   ];

   const itemData7 = [
    {
      img7: image7,
       title: 'Sandwizza',
       author: 'Rasika Shetty',
     },
     
   ];

   const itemData8 = [
    {
      img8: image8,
       title: 'Street Food',
       author: 'Hrithik Pawar',
     },
     
   ];

   const itemData9 = [
    {
      img9: image9,
       title: 'Chicken love',
       author: 'Harsh Goel',
     },
     
   ];

   const itemData10 = [
    {
      img10: image10,
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
        {itemData1.map((item) => (
          <ImageListItem key={item.img1}>
            <img src={item.img1} alt={item.title} />
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

{itemData2.map((item) => (
          <ImageListItem key={item.img2}>
            <img src={item.img2} alt={item.title} />
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

{itemData3.map((item) => (
          <ImageListItem key={item.img3}>
            <img src={item.img3} alt={item.title} />
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

{itemData4.map((item) => (
          <ImageListItem key={item.img4}>
            <img src={item.img4} alt={item.title} />
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

{itemData5.map((item) => (
          <ImageListItem key={item.img5}>
            <img src={item.img5} alt={item.title} />
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

{itemData6.map((item) => (
          <ImageListItem key={item.img6}>
            <img src={item.img6} alt={item.title} />
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

{itemData7.map((item) => (
          <ImageListItem key={item.img7}>
            <img src={item.img7} alt={item.title} />
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

{itemData8.map((item) => (
          <ImageListItem key={item.img8}>
            <img src={item.img8} alt={item.title} />
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

{itemData9.map((item) => (
          <ImageListItem key={item.img9}>
            <img src={item.img9} alt={item.title} />
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

{itemData10.map((item) => (
          <ImageListItem key={item.img10}>
            <img src={item.img10} alt={item.title} />
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
