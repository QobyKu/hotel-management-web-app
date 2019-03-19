import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

function Room(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            <i>${props.price} per night</i>
          </Typography>
          <Typography component="p">
            Number of guests: {props.numPeople}
          </Typography>
          <Typography component="p">
            Number of beds: {props.numBeds}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/orderSummary">
        <Button size="small" color="primary">
          Book
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(Room);
