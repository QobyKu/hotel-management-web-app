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
import './item.css';

const styles = {
  card: {
    width: '250px',
    float: 'left',
    margin: '15px',
  },
  media: {
    height: 140,
  },
};

function Item(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://assets3.thrillist.com/v1/image/1202445/size/tmg-article_default_mobile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            <i>${props.price}</i>
          </Typography>
          <Typography component="p">
            Service Name: {props.service}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Order
        </Button>
      </CardActions>
    </Card>
  );
}


export default withStyles(styles)(Item);
