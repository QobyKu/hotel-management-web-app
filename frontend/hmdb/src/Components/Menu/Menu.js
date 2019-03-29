import React from 'react';
import Item from './Item';
import ButtonAppBar from '../ButtonAppBar';
import './menu.css';
import Button from '@material-ui/core/Button';
import { API_CALL }  from '../../api_call';

class Menu extends React.Component {

    state = {
        items: [],
        services: [],
        mockData: false
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

    handleClick = (event) => {
        let type = event.currentTarget.id;
        this.getItemsByService(type);
    }


    componentWillMount(){
        this.getAllServices();
    }

    getItemsByService = async (type) => {
        console.log(type);
        let apiCall = API_CALL + 'listItemsByService/serviceName/' + type;

        let response = await fetch(apiCall);
        let data = await response.json();
        console.log(data);
        this.setState({
            items: data
        })
        this.render();
    }

    getAllServices = async () => {
        let apiCall = API_CALL + 'getAllServices';
    
        let response = await fetch(apiCall);
        let data = await response.json();
        console.log(data);
        
        this.setState({
            services: data
        });

        console.log(this.state.services);
    }


    render() {
        return (
            <div>
                <ButtonAppBar />

            <div className= "buttoncontainer">
            {this.state.services.map((button, i) => {
                return <Button
                key={i}
                id={button.ServiceName}
                variant="outlined"
                color="primary"
                onClick = {this.handleClick}
                className = "menubutton"
                >{button.ServiceName}</Button>
            })}
            </div>
            <div className="itemcontainer">
                {
                    this.state.items.map((item, i) => {
                        return <Item
                            key={i}
                            name={item.Name}
                            price={item.Price}
                            service={item.ServiceName}
                        />
                    })
                }
            </div>
            </div>
        );
    }
}



export default Menu;