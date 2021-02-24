// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {
 
    
    coordinates = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return(
            <button onClick={this.coordinates}>button</button>
        )
    }
}

export default CoordinatesButton