import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import Marker from './Marker'
import InfoWindow from './InfoWindow'

export default class SideBar extends Component {

    state = {
        selectedMarker: null,
        menuOpen: false,
        query: ""
    }

    changeMarker =  (marker) => {
        this.setState({
            selectedMarker: null
        })
        this.setState({
            selectedMarker: marker
        })


    }

    handleStateChange = (state) => {
        this.setState({menuOpen: state.isOpen})
    }

    closeMenu = () => {
        this.setState({menuOpen: false})
    }

    toggleMenu = () => {
        this.setState({menuOpen: !this.state.menuOpen})
    }

    handleQueryChange = (event) => {
        const query= event.target.value
        this.setState({ query, selectedMarker: null })
    }

    render () {
        let { locations } = this.props
        const { query } = this.state
        locations = query.trim() === "" ?
            locations :
            locations.filter(loc => loc.name.toLowerCase().indexOf(query.toLowerCase()) >= 0)
        return (
            <Menu
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
            >
                <div className="form-group">
                    <input type="text" value={this.state.query} onChange={this.handleQueryChange}/>
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Search</label>
                </div>

                {
                    this.props.map && locations.map(loc => <Marker loc={loc} map={this.props.map} google={this.props.google} key={loc.fsid} changeSelected={this.changeMarker} onClk={() => this.closeMenu()}/> )
                }

                { this.props.map && <InfoWindow marker={this.state.selectedMarker} map={this.props.map} google={this.props.google} /> }
            </Menu>
        );
    }
}