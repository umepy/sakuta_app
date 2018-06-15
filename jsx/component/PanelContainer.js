export default class PanelContainer extends React.Component {
  render(){
    return <div class="panel-container">
      {this.props.children}
    </div>
  }
}
