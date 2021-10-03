import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// component added for adding grids
import Grid from '@material-ui/core/Grid';
import { red } from '@material-ui/core/colors';
// icoon imported for location
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
// icoon imported for number
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
// icoon imported for timing
import QueryBuilderOutlinedIcon from '@material-ui/icons/QueryBuilderOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    flexGrow: 1,
    textAlign: 'centre',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard1() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        // map image added
        // image path changed to link of required image
        image="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/w_1280,c_limit/GoogleMapTA.jpg"
        // image was titled as map
        title="map"
      />

      {/* grid added to components */}
      <Grid container spacing={2} direction= "row">
        
      

      <Grid item xs={3} md={3}>
           {/* location icon added */}
        <LocationOnOutlinedIcon />
        </Grid>

        <Grid item xs={9} md={9}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
          {/* Text updated as required */}
          Society Stores, Lokhandwala Complex,
          Near Sanghavi Hospital, Andheri West,
          Mumbai - 400053.
        </Typography>
        </Grid>
        
        
        <Grid item xs={3} md={3}>
          {/* phone icon added */}
          <PhoneOutlinedIcon />
          </Grid>

          <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p"className={classes.root}>
          {/* Text updated as required */}
          +91 90040 81700
        </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          {/* clock icon added */}
        <QueryBuilderOutlinedIcon />
        </Grid>

        <Grid item xs={9} md={9}>
        <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
        {/* Text updated as required */}
          11am - 11pm
        </Typography>
        </Grid>

       
       </Grid>

    </Card>
  );
}
