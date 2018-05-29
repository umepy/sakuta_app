import Timeline from './component/timeline.js'
import Menu from './component/menu.js'

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", null, 
        React.createElement("div", {class: "container-fluid"}, 
          React.createElement("div", {class: "row"}, 
            React.createElement("div", {class: "col-sm-2", style: "background-color:red;"}, "Red"), 
            React.createElement("div", {class: "col-sm-8", style: "background-color:blue;"}, "Blue"), 
            React.createElement("div", {class: "col-sm-2", style: "background-color:yellow;"}, "Yellow")
          )
        )

        /* <Menu />
        <Timeline /> */
      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app')
);
