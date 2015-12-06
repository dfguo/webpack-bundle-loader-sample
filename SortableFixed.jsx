import React from 'react'
import $ from 'jquery'

class Sortable extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
    // code splitting from webpack
    require([], () => {
      // load in jquery ui sortable library
      require('jquery-ui/sortable')
      var $childrenDOM = $(React.findDOMNode(this.refs.children))
      $childrenDOM.sortable({
        stop: this._handleDrop.bind(this, $childrenDOM)
      })  
    })    
  }

  componentWillUnmount() {
    $(React.findDOMNode(this.refs.children)).sortable('destroy')
  }
  
  _handleDrop($dom, event, ui) {
    // 'toArray' returns an array of element ids in the new sequence:
    // i.e. [0,1,2] => [1,0,2] when 0 and 1 switches position    
    var reordering = 
      $dom.sortable('toArray', { attribute: 'data-sorting-index' })
            .map((item) => { return parseInt(item, 10) })
    $dom.sortable('cancel') // cancel sortable DOM manip
    this.props.onReorder(reordering)
    return true
  }
  
  render() {
    return (
      <div ref="children">
        {this.props.children}
      </div>      
    )  
  } 
}

Sortable.propTypes = {
  onReorder: React.PropTypes.func.isRequired,
}

export default Sortable