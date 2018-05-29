import Timeline from './component/timeline.js'
import Menu from './component/menu.js'

class Main extends React.Component {
  render(){
    return (
      <div class="container-fluid" style={{height: '100%'}}>
        <div class="row" style={{height: '100%'}}>
          <Menu/>
          <Timeline/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
