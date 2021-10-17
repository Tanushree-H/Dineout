import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
// images added to assets folder, were imported and named for adding in the component
import image from '../../Assets/Youmayalsolike1.jpg'
import image2 from '../../Assets/Youmayalsolike2.jpg'
import image3 from '../../Assets/Youmayalsolike3.jpg'

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
    color: '#FFFFFF',
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

// all images added that were added were defined and naming was done accordingly. the images were also given appropriate titles

//Youmayalsolike1
const itemData = [
  {
    img: image,
    title: 'Avakay',
    author: 'author',
  },


//Youmayalsolike2

  {
    img: image2,
    title: 'Fisco',
    author: 'author',
  },


//Youmayalsolike3

  {
    img: image3,
    title: 'Chilly',
    author: 'author',
  },
];



export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.0}>

        {/* all the images that were defined were called here. The image numbers were changed wherever required*/}

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
