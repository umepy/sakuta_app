export default class PPane extends React.Component {

  render() {
    return (
      React.createElement("div", null, 
        this.props.children
      )
    );
  }
}
