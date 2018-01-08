import React, { Component } from 'react'

export default class Marker extends Component {


    componentDidMount(){
        this.renderMarker()

        fetch(`https://api.foursquare.com/v2/venues/${ this.props.loc.fsid }?client_id=0ZLAAGGJ3SUXHBBPQ0XHDUE0AI5DAUHYHZPFAOQFEKE3WSSL&client_secret=DTANRQV2YY4KAM0UPZ50VILWPBVTXJZLMJNJYCOKWNECMB14&v=20161016`,{
            'Accept': 'application/json',
        })
            .then(res => res.json())
            .then(res => res.response.venue)
            .then(res => {
                if(res.hasOwnProperty('rating')){
                    this.marker.rating =  res.rating

                }
                else{
                    this.marker.rating = "Rating Not Available "
                }
                if(res.hasOwnProperty('shortUrl')){
                    this.marker.url = res.shortUrl
                }else{
                    this.marker.url= "URL not Available"
                }
            }).catch(()=>{
                this.marker.rating = "Error in fetching rating!"
            })
    }

    componentWillUnmount(){
        this.marker.setMap(null)
    }

    renderMarker = () => {
        if (this.props && this.props.google) {

            let {
                map, google, loc
            } = this.props;

            const position = new google.maps.LatLng(loc.lat, loc.lng);
            const pref = {
                map: map,
                position: position,
                name: loc.name,
                animation: google.maps.Animation.DROP
            };

            this.marker = new google.maps.Marker(pref)
            this.marker.addListener('click',this.handleClick);
        }

    }


    handleClick = () => {
        this.marker.setAnimation( this.props.google.maps.Animation.BOUNCE)
        setTimeout(() => { this.marker.setAnimation(null) }, 900)
        this.props.changeSelected(this.marker)
        this.props.onClk()
    }

    render() {
        return (
            <a tabIndex="0" onClick={this.handleClick} className="menu-item"> { this.props.loc.name }</a>
        )
    }
}

