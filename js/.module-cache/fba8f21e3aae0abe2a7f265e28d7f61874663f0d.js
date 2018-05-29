import Timeline from './component/timeline.js'
import Menu from './component/menu.js'

class Main extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "container-fluid"}, 
        React.createElement("div", {class: "container-fluid"}, 
          React.createElement("div", {class: "row"}, 
            React.createElement(Menu, {class: "col-sm-8"}), 
            React.createElement(Timeline, {class: "col-sm-4"})
            /* <div class="col-sm-2" style={{backgroundColor: 'red'}}>Red</div>
          <div class="col-sm-8" style={{backgroundColor: 'blue'}}>Blue</div>
        <div class="col-sm-2" style={{backgroundColor: 'yellow'}}>Yellow</div> */
          )
        )

      )
    )
  }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app')
);
