import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
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
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));


 
  const itemData = [
    {
      img: image1,
      
    },

    {
      img: image2,
      
    },

    {
      img: image3,
      
    },

    {
      img: image4,
      
    },

    {
      img: image5,
      
    },

    {
      img: image6,
      
    },

    {
      img: image7,
      
    },

    {
      img: image8,
      
    },

    {
      img: image9,
      
    },
    
  ];


export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${item.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

