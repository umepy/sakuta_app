import FavItem from './FavItem.js'
import PanelContainer from './PanelContainer.js'

const seeList =[
  {_id: '201801010011', url: 'http://www.masayoung.net/archives/693', type: "web"},
  {_id: '201801020011', url: 'https://bagelee.com/programming/react-native/api-react-native/',type:"web"},
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" },
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" },
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" }
]

export default class FavList extends React.Component {
  render() {
    return (
      <div id="favList">
        { seeList.map(see => (
          <FavItem key={see._id} see={see} />
        ))}
      </div>
    );
  }
}
