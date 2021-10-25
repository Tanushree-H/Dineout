import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
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

export default function RecipeReviewCard3() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.media}
        image="https://static.toiimg.com/thumb/msid-77277092,imgsize-584120,width-400,resizemode-4/77277092.jpg"

      />
      <Grid container spacing={1}
        direction="row"
        alignContent="center"
        alignItems="center">
        <Grid item md={4}>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Chillies
            </Typography>
          </CardContent>
        </Grid>


        <CardActions disableSpacing>
          <Grid item md={4}>
            <IconButton aria-label="add to favorites">
              <Button variant="outlined" style={{ borderColor: '#5D1241', color: '#5D1241', }}>
                OPEN
              </Button>
            </IconButton>
          </Grid>



          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>



          <Grid item md={12}>


            <CardContent>o

              <Typography paragraph>
                Sadashiv Road, opp Mahim church.
                Mexican and Chinese
              </Typography>

            </CardContent>
          </Grid>

          <Grid item md={12}>


            <IconButton aria-label="share">
              <Button variant="contained" style={{ backgroundColor: '#5D1241', color: '#FFFFFF', }}>
                <StarOutlineIcon />
                4.5
              </Button>


            </IconButton>
          </Grid>
        </Collapse>
      </Grid>
    </Card>

  );




}

