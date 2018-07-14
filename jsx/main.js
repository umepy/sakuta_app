import Timeline from './component/timeline.js'
import Menu from './component/menu.js'
import SearchWindow from "./component/SearchWindow.js"

class Main extends React.Component {
  render(){
    return (
      <div class="container-fluid">
        <SearchWindow/>
        <Menu/>
        <Timeline/>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
