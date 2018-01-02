import React, { Component } from 'react'
import GoogleApi from './GoogleApi'

window.callback = () => {}

export const wrapper = (options) => (WrappedComponent) => {
  const apiKey = options.apiKey;
  const libraries = options.libraries || ['places'];

  class Wrapper extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        loaded: false,
        google: null
      }
    }

    error = (err) => {
        this.setState({
            loaded: false,
            google: window.google,
            error: err
        })
    }
     componentDidMount(){
      new Promise((resolve,reject) => {
          try {
              let body = document.getElementsByTagName('body')[0]
              let tag = document.createElement('script');
              tag.type = 'text/javascript';
              tag.async = true;
              tag.onload = resolve
              tag.onerror = this.error
              const src = GoogleApi({
                  apiKey: apiKey,
                  libraries: libraries
              })
              tag.src = src
              body.appendChild(tag);
          }
          catch (err) {
              this.setState({
                  loaded: false,
                  google: window.google,
                  error: err
              })
          }

      }).then(() => {
        this.setState({
          loaded: true,
          google: window.google,
          error: null
        })
      })
      .catch(error => {
        console.log("Prmise Rejected")
        this.setState({
            loaded: false,
            google: window.google,
            error: error
        })
      })
    }



    render() {
      const props = Object.assign({}, this.props, {
        loaded: this.state.loaded,
        google: this.state.google,
      })
      return (
        <div>
          <WrappedComponent {...props} />
          <div ref='map' />
        </div>
      )
    }
  }

  return Wrapper
}

export default wrapper
