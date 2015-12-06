import React from 'react'
import $ from 'jquery'
import AppActions from './actions/AppActions'
import AppStore from './stores/AppStore'

class LayoutButton extends React.Component {
  constructor(props) {
    super(props)
  }
  
  _onLayoutChange() {
    AppActions.updateSelection(this.props.selection + 1)
    // this.props.onLayoutChange()
  }
  
  render() {
    return (
      <button onClick={this._onLayoutChange.bind(this)}>{this.props.selection}</button>
    )
  }
}

class Text extends React.Component {
  constructor(props) {
    super(props)
  }
  _onDuplicate() {
    AppActions.updateText(`${this.props.text} ${this.props.text}`)
    // this.props.onDuplicate()
  }
  render() {
    return (
      <div>
        <p>
          {this.props.text}
        </p>
        <div>
          <button onClick={this._onDuplicate.bind(this)}>Duplicate</button>
        </div>
      </div>
    )
  }
}

class Section extends React.Component {
  constructor(props) {
    super(props)
    this.state = AppStore.getData()
  }
  componentDidMount() {
    AppStore.addListener(this._onStoreChange.bind(this))
  }
  componentWillUnmount() {
    AppStore.removeListener(this._onStoreChange.bind(this))
  }  
  
  componentDidUpdate(prevProps, prevState) {
    $(React.findDOMNode(this.refs.resize))
      .text(`Resize function ran at ${Date()}`)
  }
  
  _onStoreChange(data) {
    this.setState(data)
  }
  
	render() {
    return (      
      <div>      
        <p ref='resize'></p>
        <LayoutButton selection={this.state.selection}                   />
        <Text text={this.state.text} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return <Section />
  }
}

React.render(<App />, document.getElementById('container'))


// componentDidUpdate(prevProps, prevState) {
//   $(React.findDOMNode(this.refs.resize))
//     .text(`Resize function ran at ${Date()}`)
// }