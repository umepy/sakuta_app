export default class Tabs extends React.Component {
    constructor(){
        super();
        this.state={
          selected:this.props.selected,
          children
        }
      }
  getDefaultProps() {
    return {
      selected: 0
    };
  }
  getInitialState() {
    return {
      selected: this.props.selected
    };
  }
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  }
  _renderContent() {
    return (
      React.createElement("div", {className: "tabs__content"}, 
        this.props.children[this.state.selected]
      )
    );
  }
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected == index ? 'active' : '');
      return (
        React.createElement("li", {key: index}, 
          React.createElement("a", {href: "#", 
            onClick: this.handleClick.bind(this, index), 
            className: activeClass, 
            onClick: this.handleClick.bind(this, index)}, 
            child.props.label
          )
        )
      );
    }
    return (
      React.createElement("ul", {className: "tabs__labels"}, 
        this.props.children.map(labels.bind(this))
      )
    );
  }
  render() {
    return (
      React.createElement("div", {className: "tabs"}, 
        this._renderTitles(), 
        this._renderContent()
      )
    );
  }
};
