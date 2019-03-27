import React from 'react';
import Room from '../Room';
import Item from './Item';

class RoomLister extends React.Component {

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
                
                {
                    this.state.items.map((item, i) => {
                        return <Item
                            key={i}
                            name={item.name}
                            price={item.price}
                            serviceName={item.service}
                        />
                    })
                }
            </div>
        );
    }
}



export default RoomLister;