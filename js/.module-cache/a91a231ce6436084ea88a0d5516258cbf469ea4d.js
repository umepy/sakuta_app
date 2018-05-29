// import React from 'react'
// import ReactDOM from 'react-dom'
import Timeline from './component/timeline.js'

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello World!"), 
        React.createElement("p", null, "このページはテストページだよ！"), 
        React.createElement(Timeline, null)
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app')
);
