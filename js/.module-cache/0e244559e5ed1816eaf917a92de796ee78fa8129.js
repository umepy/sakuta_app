export default class PanelContainer extends React.Component {
  render(){
    return React.createElement("div", {class: "panel-container"}, 
      this.props.children
    )
  }
}
