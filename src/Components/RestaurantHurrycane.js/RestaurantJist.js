import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// component added for adding a jist of the restaurant


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    alignContent: 'center',
    // color modified 
    background: '#F6F2EB'
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
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* Text updated to the required information */}
          Andheri Lokhandwala, Mumbai - 400053


        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* Text updated to the required information */}

          Rs. 300 for 2, Value for money


        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* Text updated to the required information */}

          Juices, Fast Food


        </Typography>

        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {/* Text updated to the required information */}

          Opens at 11.00 AM

        </Typography>
      </CardContent>

    </Card>


  );
}

