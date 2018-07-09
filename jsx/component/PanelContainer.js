export default class PanelContainer extends React.Component {
  render(){
    return <div id="panel-container" class="panel-container">
      {this.props.children}
    </div>
  }
}
