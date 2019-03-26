import React from 'react';
import Room from './Room';

class RoomLister extends React.Component {

    state = {
        roomTypes: [],
        mockData: true
    }

    selectData = (x) => {
        if (this.state.mockData) {
            this.setState({
                roomTypes: [
                    {
                        name: 'Suite',
                        price: 100,
                        numPeople: '1',
                        numBeds: '1'
                    },
                    {
                        name: 'Deluxe',
                        price: 200,
                        numPeople: '2',
                        numBeds: '2'
                    },
                    {
                        name: 'Penthouse',
                        price: 500,
                        numPeople: '10',
                        numBeds: '8'
                    },
                ]
            });
        } else {
            // TODO:
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
                <div className="imgContainer">
                    {/* nice image goes here */}
                    <img alt="Vancouver" src="https://stmed.net/sites/default/files/vancouver-wallpapers-28962-2594432.jpg" />
                </div>
                {
                    this.state.roomTypes.map((room, i) => {
                        return <Room
                            key={i}
                            name={room.name}
                            price={room.price}
                            numPeople={room.numPeople}
                            numBeds={room.numBeds}
                        />
                    })
                }
            </div>
        );
    }
}



export default RoomLister;