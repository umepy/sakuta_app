export default class PPane extends React.Component {
    constructor(){
        super();
        this.state={
          label,
          children
        }
      }
  render() {
    return (
      React.createElement("div", null, 
        this.props.children
      )
    );
  }
}
