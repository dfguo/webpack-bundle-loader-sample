// Lazy component loader that loads files in separate requests
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
    if (this.props.componentName && this.state.loadedComponentName !== this.props.componentName) {
      // use bundle-loader lazy option
      var loader = require('bundle?lazy!./lazy/' + this.props.componentName + '.jsx')
      loader((Component) => {
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
  componentName: React.PropTypes.string.isRequired
}
export default LazyLoader