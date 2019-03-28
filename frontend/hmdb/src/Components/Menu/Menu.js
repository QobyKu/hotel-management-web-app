import React from 'react';
import Item from './Item';
import ButtonAppBar from '../ButtonAppBar';
import './menu.css';
import Button from '@material-ui/core/Button';
import API_CALL from '../../api_call';

class Menu extends React.Component {

    state = {
        roomTypes: [],
        mockData: true
    }

    selectData = () => {
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
            // do nothing actually
        }
    }

    componentWillMount() {
        this.selectData();
    }

    handleClick = (event) => {
        let type = event.target.id;
        this.getItemsByService(type);
    }

    getItemsByService = async (type) => {
        let apiCall = API_CALL + 'listItemsByService/type/' + type;

        let response = await fetch(apiCall);
        let data = response.json();
        console.log(data);
        //TODO:
        // set state based on data
        this.render();
    }

    render() {
        return (
            <div>
                <ButtonAppBar />

            <div className= "buttoncontainer">
            <Button
              halfWidth
              id="restaurant"
              variant="outlined"
              color="primary"
              onClick = {this.handleClick}
              className = "menubutton">
              Restaurant
            </Button><Button
              halfWidth
              id="roomService"
              variant="outlined"
              color="primary"
              onClick = {this.handleClick}
              className = "menubutton">
              Room Service
            </Button><Button
              halfWidth
              id="spa"
              variant="outlined"
              color="primary"
              onClick = {this.handleClick}
              className = "menubutton">
              Spa
            </Button>
            <Button
              halfWidth
              id="bar"
              variant="outlined"
              color="primary"
              onClick = {this.handleClick}
              className = "menubutton">
              Bar
            </Button>
            <Button
              halfWidth
              id="casino"
              variant="outlined"
              color="primary"
              onClick = {this.handleClick}
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