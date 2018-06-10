

export default class TLItem extends React.Component {
    render() {
        const { see } = this.props;
        return (
          React.createElement("div", {className: "tl-item"}, 
            React.createElement("textarea", {className: "textarea", defaultValue: see.url})
          )
        );
      }
    
}
