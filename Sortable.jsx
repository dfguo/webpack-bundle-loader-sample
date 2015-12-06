import React from 'react'
import $ from 'jquery'

class Sortable extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    // load in jquery ui sortable library
    require('jquery-ui/sortable')
    var childrenDOM = React.findDOMNode(this.refs.children)
    $(childrenDOM).sortable()
  }
  componentWillUnmount() {
    $(React.findDOMNode(this.refs.children)).sortable('destroy')
  }
  render() {
    return (
      // WHAT IS THIS?!
      <div ref="children">
        {this.props.children} 
      </div>      
    )  
  } 
}

export default Sortable