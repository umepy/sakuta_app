import Timeline from './component/timeline.js'
import Menu from './component/menu.js'

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "container-fluid"}, 
          React.createElement("div", {class: "row"}, 
            React.createElement(Menu, null), 
            React.createElement(Timeline, null)
          )

      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app')
);
