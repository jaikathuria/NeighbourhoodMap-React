import { Component } from 'react'

export default class InfoWindow extends Component {

    componentDidMount() {
        this.infoWindow = new this.props.google.maps.InfoWindow()
        this.openWindow()
    }

    componentDidUpdate(prevProps){
        if (prevProps.marker !== this.props.marker) {
            this.closeWindow()
            this.openWindow()
        }
    }



    openWindow() {
        if (this.props.marker) {
            this.infoWindow.setContent(`
                <div>
                    <h3> ${this.props.marker.name} </h3>
                    <p> Rating: ${this.props.marker.rating}/10 </p>
                </div>
            `)
            this.infoWindow.open(this.props.map, this.props.marker)
        }
    }

    closeWindow() {
        this.infoWindow.close()
    }

    render(){
        return null
    }
}