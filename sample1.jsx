import React from 'react'
import { pretty } from 'js-object-pretty-print'
import Sortable from './SortableFixed'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { id: 1, value: "item 1", selected: false },
        { id: 2, value: "item 2", selected: false },
        { id: 3, value: "item 3", selected: false }
      ]
    }
  }

  _onValueChange(index, event) {
    var newState = Object.assign({}, this.state)
    newState.data[index].selected = !newState.data[index].selected
    this.setState(newState)
  }

  _onReorder(reordering) {
    var newData = []

    reordering.forEach((item, index) => {
      newData[index] = Object.assign({}, this.state.data[item])
    })
    
    this.setState({data: newData})
  }
  
	render() {
    return (      
      <div>
        { 
          this.state.data.map( (item, index) => 
            <div key={item.id} data-sorting-index={index}>
              <input type="checkbox" defaultValue={item.selected} onChange={ this._onValueChange.bind(this, index) } /> {item.value}
            </div>
          )
        }
        <p dangerouslySetInnerHTML={{ __html: pretty(this.state.data, 4, 'HTML')}}></p>
      </div>
    )
  }
}

React.render(<App />, document.getElementById('container'))




// <Sortable onReorder={this._onReorder.bind(this)}>
// _onReorder(reordering) {
//   var newData = []
//   reordering.forEach((item, index) => {
//     newData[index] = this.state.data[item - 1]
//   })
//   
//   this.setState({data: newData})
// }