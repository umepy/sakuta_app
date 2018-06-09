import TLItem from './TLItem.js';

export default class TLList extends React.Component {
  render() {
    const { seeList } = this.props;
    return (
      <div class="timeline" style={{height: '100%', overflow: 'scroll',padding: '2%'}}>
        { seeList.map(see => (
          <TLItem key={see._id} see={see} />
        ))} 
      </div>
    );
  }
}
