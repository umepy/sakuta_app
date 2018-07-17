export default class PanelContainer extends React.Component {
  render(){
    return React.createElement("div", {id: "panel-container", class: "panel-container"}, 
      this.props.children
    )
  }
}
