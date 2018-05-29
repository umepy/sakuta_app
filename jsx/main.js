import Timeline from './component/timeline.js'
import Menu from './component/menu.js'

class Main extends React.Component {
  render(){
    return (
      <div>
        <Menu />
        <Timeline />
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
