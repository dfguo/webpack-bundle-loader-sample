import Morearty from 'morearty'
import React from 'react'
import $ from 'jquery'

var Ctx = Morearty.createContext({
  initialState: {
    value: 'hello world'
  }
});



var Child = React.createClass({
  displayName: 'Child',
  mixins: [Morearty.Mixin],
  render: function() {
    var binding = this.getDefaultBinding()
    return (
      <div>
        <div>Child with binding value: {binding.get('value')}</div>
        <Grandchild binding={binding} />
      </div>
    )
  }
})

var Grandchild = React.createClass({
  displayName: 'Grandchild',
  mixins: [Morearty.Mixin],
  render: function() {
    var binding = this.getDefaultBinding()
    return (
      <div>Grandchild with binding value: {binding.get('value')}</div>
    )
  }
})

var App = React.createClass({
  displayName: 'App',

  mixins: [Morearty.Mixin],

  componentDidMount: function () {
  	// load in iframe
    window.vent = {
      $: $,
      React: React,
      Morearty: Morearty,
      Child: Child,
      Ctx: Ctx
    }

    const editorPreview = React.findDOMNode(this.refs.iframe);
    const iframe = $('<iframe />').attr({
      'src': "/iframe.html",
      'width': '100%',
      'height': '200',
    });
    iframe.appendTo(editorPreview);
  },

  render: function () {
    var binding = this.getDefaultBinding();
    return (
      <section>
     	  <div ref="iframe" />
     	  Parent with binding value { binding.get('value') }
      </section>
    );
  }
});

const Bootstrap = Ctx.bootstrap(App)
React.render(<Bootstrap />, document.getElementById('container'))