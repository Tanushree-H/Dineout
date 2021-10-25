import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { Collapse } from '@material-ui/core';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1205,
    backgroundColor: '#F7F3ED'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  media: {
    height: 260,
    width: 1190,
    alignItems: 'center'
    // paddingTop: '56.25%', // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
}));

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>


      <CardActions>
        <Grid container spacing={3}
          direction="row"
        >


          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">Available in</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography> Delhi</Typography>
                <Typography>Mumbai</Typography>
                <Typography>Agra</Typography>
                <Typography>Jaipur</Typography>
              </CardContent>
            </Collapse>
          </Grid>

          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">Discover</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography> Trending</Typography>
                <Typography>Dineout Pay</Typography>
                <Typography>Great Deals</Typography>
                <Typography>Super Savers</Typography>
              </CardContent>
            </Collapse>
          </Grid>


          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">About</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>About us</Typography>
                <Typography>Blog</Typography>
                <Typography>Discover</Typography>
                <Typography>Privacy Policy</Typography>
              </CardContent>
            </Collapse>
          </Grid>


          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">Top Cuisines</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography> Chinese</Typography>
                <Typography>Italian</Typography>
                <Typography>Continental</Typography>
                <Typography>Indian</Typography>
              </CardContent>
            </Collapse>
          </Grid>

          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">Top Facilities</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>Romantic</Typography>
                <Typography>Fine Dining</Typography>
                <Typography>5 star</Typography>
                <Typography>Buffet</Typography>
              </CardContent>
            </Collapse>
          </Grid>

          <Grid item md={2}>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <Button size="small">Top Locations</Button>
            </IconButton>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography>Madhpur</Typography>
                <Typography>Banjara Hills</Typography>
                <Typography>Secunderabad</Typography>
                <Typography>MG road</Typography>
              </CardContent>
            </Collapse>
          </Grid>



          <Grid item md={12}>
            <CardMedia
              className={classes.media}
              image="https://www.itvoice.in/wp-content/uploads/2018/11/Dineout-Logo-02-1.png"

            />
          </Grid>

          <Grid item md={12}>
            <CardContent>
              <Typography>Find the best Restaurants, Deals, Discounts and Offers</Typography>
              <Typography>© 2017, dineout.co.in. All Rights Reserved.</Typography>

            </CardContent>
          </Grid>

        </Grid>
      </CardActions>
    </Card>
  );
}
