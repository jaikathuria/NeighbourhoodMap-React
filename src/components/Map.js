import React, { Component } from 'react'
import ReactDOM from 'react-dom'


export default class Map extends Component {


    componentDidUpdate(prevProps) {
        if (prevProps.google !== this.props.google) {
            this.loadMap()
        }
    }

    componentDidMount() {
        this.loadMap()
    }

    loadMap(){
        if (this.props && this.props.google) {
            // google is available
            const {google} = this.props
            const maps = google.maps
            const mapRef = this.refs.map
            const center = new maps.LatLng(30.337663, 76.394095)
            const zoom = 15
            const mapConfig = Object.assign({}, {
                center,
                zoom,
            })
            const node = ReactDOM.findDOMNode(mapRef)
            this.map = new maps.Map(node, mapConfig)
            this.props.isLoaded(this.map)
        }
    }



    render() {
        return (
            <div ref='map' className={'map'}>
                { this.props.error ? (<p className={"map-message"}>Failed to Load Google Maps</p>) : (<p className={"map-message"}>Loading Google Maps . . .</p>) }
            </div>
        )
    }
}

