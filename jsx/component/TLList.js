import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    const seeList = this.props.seeList;
    const flag = this.props.flag
    return (
      <div id="tlList">
        { seeList.map(see => (
          <TLItem key={see._id} see={see} flag={flag}/>
        ))}
      </div>
    );
  }
}
