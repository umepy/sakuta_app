import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    return (
      React.createElement("div", {id: "tlList"}, 
         this.props.seeList.map(see => (
          React.createElement(TLItem, {key: see._id, see: see, flag: this.props.flag})
        ))
      )
    );
  }
}
