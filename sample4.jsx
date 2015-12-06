import React from 'react'
import $ from 'jquery'
import SplitPane from 'react-split-pane'

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    console.log(SplitPane)
    return (
      <SplitPane>
        <div></div>
        <div></div>
      </SplitPane>
    )
  }
}

React.render(<App />, document.getElementById('container'))