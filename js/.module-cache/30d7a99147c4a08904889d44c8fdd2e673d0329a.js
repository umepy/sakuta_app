import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    const { seeList } = this.props;
    return (
      React.createElement("div", {id: "tlList", style: {height: '100%'}}, 
         seeList.map(see => (
          React.createElement(TLItem, {key: see._id, see: see})
        ))
      )
    );
  }
}
