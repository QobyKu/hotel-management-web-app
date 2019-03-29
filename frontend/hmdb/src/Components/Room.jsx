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


//TODO: add images
class Room extends React.Component {

  state = {
    startDate: this.props.parentData.startDate,
    endDate: this.props.parentData.endDate,
    numPeople: this.props.parentData.numPeople,
    roomType: this.props.name
  }
  

  render(){
    const { classes } = this.props;
  return (
    <Card className={classes.card}
    style={{
      float: "left",
      width: "300px",
      margin: "5px 10px"
    }}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://www.thegwenchicago.com/wp-content/uploads/2017/07/Guest-Rooms.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {this.props.name}
          </Typography>
          <Typography variant="h6" component="h2">
            <i>${this.props.price} per night</i>
          </Typography>
          <Typography component="p">
            Number of guests: {this.props.numPeople}
          </Typography>
          <Typography component="p">
            Number of beds: {this.props.numBeds}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={{ pathname: '/orderSummary', state: this.state }}>
        <Button size="small" color="primary">
          Book
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
}


export default withStyles(styles)(Room);
