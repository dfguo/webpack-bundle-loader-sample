import React from 'react'
import LazyLoader from './LazyLoaderSplit'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      componentName: null
    }
  }

	render() {
    return (      
      <div>
        <ul>
          <li onClick={ () => { this.setState({componentName: 'Hello'}) }}>Hello</li>
          <li onClick={ () => { this.setState({componentName: 'World'}) }}>World</li>
        </ul>
        <LazyLoader componentName={this.state.componentName} name="波波" />
      </div>
    )
  }
}

React.render(<App />, document.getElementById('container'))