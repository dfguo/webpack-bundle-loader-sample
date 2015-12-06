import React from 'react'
import $ from 'jquery'

class Sortable extends React.Component {
  constructor(props) {
    super(props)
  }
  
  componentDidMount() {
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
    // i.e. [1,2,3] => [2,1,3] when 1 and 2 switches position
    var reordering = $dom.sortable('toArray', { attribute: 'data-sorting-index' })
                          .map((item) => { return parseInt(item, 10) })
    this.props.onReorder(reordering)
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