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
import { Link, Router } from "react-router-dom";

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

export default function RecipeReviewCard2() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      
      <Link to={process.env.PUBLIC_URL + '/restaurantmain'}>
      <CardMedia
        className={classes.media}
        image="https://images.cnbctv18.com/wp-content/uploads/2020/07/jason-leung-poI7DelFiVA-unsplash-1-768x432.jpg"
      />
      </Link>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         Hurrycane
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Button variant="contained" color="primary">
OPEN
</Button>
        </IconButton>
        <IconButton aria-label="share">
        <Button variant="contained" color="primary">
<StarOutlineIcon/>
3
</Button>
        </IconButton>
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
        <CardContent>
         
          <Typography paragraph>
         505, shanti niketan complex, Juhu west
         Indian and Continental
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

  );



  
}
