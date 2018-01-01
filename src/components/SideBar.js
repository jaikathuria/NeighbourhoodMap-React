import React, { Component } from 'react'
import { bubble as Menu } from 'react-burger-menu'
import Marker from './Marker'

export default class SideBar extends Component {
    showSettings (event) {
        event.preventDefault();
        console.log(event)
    }

    render () {
        return (
            <Menu>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
                <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
                {
                    this.props.map && this.props.locations.map(loc => <Marker position={loc} map={this.props.map} google={this.props.google} key={loc.fsid}/> )
                }
            </Menu>
        );
    }
}