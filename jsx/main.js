import Timeline from './component/Timeline.js'
import Menu from './component/Menu.js'

class Main extends React.Component {
  render(){
    return (
      <div class="container-fluid">
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
