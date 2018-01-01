import React, { Component } from 'react'
import Nav from './components/Nav'
import SideBar from './components/SideBar'
import Map from './components/Map'
import GoogleApiComponent from './utils/GoogleApiComponent'
import locations from './utils/locations'
import './App.css'

class App extends Component {

  state = {
      locations,
      google: this.props.google,
      loaded: false,
      map: null,
  }

  load = (map) =>{
    this.setState({
        loaded: true,
        map
    })
  }

  render() {
    const style = {
      width: '100vw',
      height: '100vh'
    }


    return (
      <div className="App">
        <Nav/>
        <SideBar map={this.state.map} locations={locations} google={this.props.google}/>
        <div style={style}>
          <Map google={this.props.google} isLoaded={this.load}/>
        </div>
      </div>
    )
  }
}

export default GoogleApiComponent({
    apiKey: 'AIzaSyCTPANDaNQMRYRGR8z9UPy8SQdokC30rbk'
})(App)