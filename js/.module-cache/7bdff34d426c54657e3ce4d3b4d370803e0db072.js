import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    const { seeList } = this.props.seeList;
    return (
      React.createElement("div", {id: "tlList"}, 
         seeList.map(see => (
          React.createElement(TLItem, {key: see._id, see: see, flag: this.props.flag})
        ))
      )
    );
  }
}
