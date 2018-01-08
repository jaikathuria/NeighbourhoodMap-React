import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import FocusLock from "react-focus-lock"
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
            <FocusLock disabled={!this.state.menuOpen} allowTextSelection={true}>
            <Menu
                customBurgerIcon={ <img tabIndex={0} role={'button'} src="/utils/images/hamburger.svg" alt={'menu-button'} onKeyPress={(e)=> { if (e.keyCode === 0 || e.keyCode === 32) { this.toggleMenu() }}}/> }
                customCrossIcon={ <img tabIndex={0} role={'button'} src="/utils/images/error.svg" alt={'menu-button'} onKeyPress={(e)=> { if (e.keyCode === 0 || e.keyCode === 32) { this.toggleMenu() }}}/>}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                role={'menu'}
            >
                        <div className="form-group">
                            <input id="search" type="text" value={this.state.query} onChange={this.handleQueryChange}/>
                                <span className="highlight"></span>
                                <span className="bar"></span>
                                <label htmlFor="search" >Search</label>
                        </div>


                    {
                        this.props.map && locations.map(loc => <Marker loc={loc} map={this.props.map} google={this.props.google} key={loc.fsid} changeSelected={this.changeMarker} onClk={() => this.closeMenu()}/> )
                    }

                { this.props.map && <InfoWindow marker={this.state.selectedMarker} map={this.props.map} google={this.props.google} /> }
            </Menu>
            </FocusLock>
        );
    }
}