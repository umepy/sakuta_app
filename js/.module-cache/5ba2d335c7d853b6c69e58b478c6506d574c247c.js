// import React from 'react'
// import ReactDOM from 'react-dom'
import Timeline from './component/timeline';

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", null, 
        React.createElement("h1", null, "Hello World!"), 
        React.createElement("p", null, "このページはテストページだよ！")
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null, 
    React.createElement(Timeline, null)
),
  document.getElementById('app')
);
