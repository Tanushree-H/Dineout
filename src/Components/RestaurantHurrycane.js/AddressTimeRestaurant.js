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
    flexGrow: 1,
    textAlign: 'left',
    // color modified as required 
    background: '#F6F2EB',
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

      {/* map added */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.699471597021!2d72.8460586507575!3d19.120835655466305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9cbc9db060f%3A0x94ef01ff54b72a2f!2sAndheri%20Metro%20Station!5e0!3m2!1sen!2sin!4v1634479329151!5m2!1sen!2sin"
        width="350" height="200" allowfullscreen="" loading="lazy">
      </iframe>

      {/* grid added to components */}
      <Grid container spacing={2} direction="row">



        <Grid item xs={3} md={3}>
          {/* location icon added and styled */}
          <LocationOnOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF' }}>
          </LocationOnOutlinedIcon>
        </Grid>

        <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            Society Stores, Lokhandwala,
            Near Sanghavi Hospital Complex,
            Andheri west, Mumbai
          </Typography>
        </Grid>


        <Grid item xs={3} md={3}>
          {/* phone icon added and styled*/}
          <PhoneOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF', }}>
          </PhoneOutlinedIcon>
        </Grid>

        <Grid item xs={9} md={9}>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.root}>
            {/* Text updated as required */}
            +91 90040 81700
          </Typography>
        </Grid>

        <Grid item xs={3} md={3}>
          {/* clock icon added and styled */}
          <QueryBuilderOutlinedIcon style={{ backgroundColor: '#F2635C', color: '#FFFFFF', }}>
          </QueryBuilderOutlinedIcon>

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
