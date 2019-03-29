import React from 'react';
import Room from './Room';
import { API_CALL }  from '../api_call';
import ButtonAppBar from './ButtonAppBar';

class RoomLister extends React.Component {

    state = {
        roomTypes: [],
        mockData: false
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
            this.getRoomsAPI(x);
        }
    }

    getRoomsAPI = async (x) => {
        let apiCall = API_CALL + 'findRooms/numPeople/' + x.numPeople + '/startDate/' + x.startDate + '/endDate/' + x.endDate;

        let response = await fetch(apiCall);

        let data = await response.json();

        console.log(data);
        
        this.setState({
            roomTypes: data
        });

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
                <div className="imgContainer">
                    {/* nice image goes here */}
                    <img alt="Vancouver" src="https://stmed.net/sites/default/files/vancouver-wallpapers-28962-2594432.jpg" />
                </div>
                {
                    this.state.roomTypes.map((room, i) => {
                        return <Room
                            key={i}
                            name={room.Name}
                            price={room.Price}
                            numPeople={room.NumberOfPeople}
                            numBeds={room.NumberOfBeds}
                            parentData={this.props.location.state}
                        />
                    })
                }
            </div>
        );
    }
}



export default RoomLister;