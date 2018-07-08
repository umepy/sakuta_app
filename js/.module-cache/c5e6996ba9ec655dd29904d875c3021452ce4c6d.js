const Pane = React.createClass({
  displayName: "Pane",
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      React.createElement("div", null, 
        this.props.children
      )
    );
  }
})

export default Pane