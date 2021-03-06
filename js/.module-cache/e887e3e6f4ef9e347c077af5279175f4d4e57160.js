import Timeline from './component/Timeline.js'
import Menu from './component/Menu.js'

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "container-fluid"}, 
        React.createElement(Menu, null), 
        React.createElement(Timeline, null)
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app')
);
