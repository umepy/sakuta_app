import Timeline from './component/Timeline.js'
import Menu from './component/Menu.js'



class Main extends React.Component {
  render(){
    /* 背景の設定 */
    var bgImgPath = '../img/star.png'
    let wrapperStyle = ({bgImgPath}) => ({
      backgroundImage: 'url('+ {bgImgPath} + ')',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      height: '100%',
    })
    return (
      <div class="container-fluid" style={wrapperStyle(bgImgPath)}>
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
