// Lazy component loader that loads files that matched wildcard in one request
import React from 'react'

class LazyLoader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      InnerComponent: null,
      loadedComponentName: null
    }
  }
  
  componentDidUpdate() {
    if (this.props.componentName && this.props.componentName !== this.state.loadedComponentName) {
      // Webpack code splitting 
      require([], () => {
        // Webpack dynamic require
        var Component = require('./lazy/' + this.props.componentName + '.jsx')
        this.setState({
          InnerComponent: Component,
          loadedComponentName: this.props.componentName
        })        
      })
    }
  }
  
  render() {
    if (!this.props.componentName) {
      return (<div>No component loaded</div>)
    }
    if (this.state.InnerComponent) {
      return (<this.state.InnerComponent {...this.props} />)
    } else {
      return (<div>Loading...</div>)
    }    
  }
}

LazyLoader.propTypes = {
  componentName: React.PropTypes.string
}
export default LazyLoader