export default class PanelContainer extends React.Component {
  render(){
    return React.createElement("div", {id: "panel-contaoner", class: "panel-container"}, 
      this.props.children
    )
  }
}
