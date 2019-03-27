import React from 'react';
import Room from '../Room';
import Item from './Item';
import ButtonAppBar from '../ButtonAppBar';
import './menu.css';
import Button from '@material-ui/core/Button';
class Menu extends React.Component {

    state = {
        roomTypes: [],
        mockData: true
    }

    selectData = (x) => {
        if (this.state.mockData) {
            this.setState({
                items: [
                    {
                        name: 'Beer',
                        price: 7,
                        service: 'Bar',
                    },
                    {
                        name: 'Wine',
                        price: 5,
                        service: 'Bar',
                    },{
                        name: 'Pizza',
                        price: 10,
                        service: 'Bar',
                    },
                    {
                        name: 'Manicure',
                        price: 10,
                        service: 'Salon',
                    },
                    {
                        name: 'Towel',
                        price: 0,
                        service: 'Room Service',
                    },
                    {
                        name: 'Burger',
                        price: 10,
                        service: 'Restaurant',
                    },
                    {
                        name: 'Pizza',
                        price: 10,
                        service: 'Restaurant',
                    },
                    {
                        name: 'Manicure',
                        price: 10,
                        service: 'Spa',
                    },
                ]
            });
        } else {
            // API call goes here + use x
            // set state 
        }
    }

    componentWillMount() {
        let x = this.props.location.state;
        console.log(x);
        this.selectData(x);
    }



    render() {
        return (
            <div>
                <ButtonAppBar />

            <div className= "buttoncontainer">
            <Button
              halfWidth
              variant="outlined"
              color="primary"
              onClick = {this.handleRegister}
              className = "menubutton">
              Restaurant
            </Button><Button
              halfWidth
              variant="outlined"
              color="primary"
              onClick = {this.handleRegister}
              className = "menubutton">
              Room Service
            </Button><Button
              halfWidth
              variant="outlined"
              color="primary"
              onClick = {this.handleRegister}
              className = "menubutton">
              Spa
            </Button>
            <Button
              halfWidth
              variant="outlined"
              color="primary"
              onClick = {this.handleRegister}
              className = "menubutton">
              Bar
            </Button>
            <Button
              halfWidth
              variant="outlined"
              color="primary"
              onClick = {this.handleRegister}
              className = "menubutton">
              Casino
            </Button>
            </div>
            <div className="itemcontainer">
                
                {
                    this.state.items.map((item, i) => {
                        return <Item
                            key={i}
                            name={item.name}
                            price={item.price}
                            service={item.service}
                        />
                    })
                }
            </div>
            </div>
        );
    }
}



export default Menu;