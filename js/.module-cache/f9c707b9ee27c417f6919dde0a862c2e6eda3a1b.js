import React from '../../lib/react.js';
//import TLItem from './TLItem';

export default class TLList extends React.Component {
  render() {
    const { seeList } = this.props;
    return (
      React.createElement("div", {class: "timeline", style: {height: '100%', overflow: 'scroll',padding: '2%'}}
        /* {seeLists.map(see => (
          <TLItem key={see._id} see={see} />
        ))} */
      )
    );
  }
}

TLList.propTypes = {
  seeLists: React.PropTypes.array.isRequired,
};