export default class TLContainer extends React.Component {
  render(){
    return React.createElement("div", {id: "tl-container", class: "tl-container"}, 
      this.props.children
    )
  }
}
