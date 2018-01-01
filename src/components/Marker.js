import { Component } from 'react'

export default class Marker extends Component {

    componentDidMount(){
        this.renderMarker()
    }

    renderMarker() {
        if (this.props && this.props.google) {

            let {
                map, google, position, mapCenter
            } = this.props;

            let pos = position || mapCenter;
            position = new google.maps.LatLng(pos.lat, pos.lng);
            const pref = {
                map: map,
                position: position
            };

            this.marker = new google.maps.Marker(pref);
        }


    }

    render() {
        return null
    }
}

