import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    const { seeList } = this.props;
    return (
      <div id="tlList">
        { seeList.map(see => (
          <TLItem key={see._id} see={see} />
        ))}
      </div>
    );
  }
}
