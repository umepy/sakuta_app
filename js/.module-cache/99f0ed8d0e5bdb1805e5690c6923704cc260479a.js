import TLItem from './TLItem.js';

const seeList =[
  {_id: '201801010011', url: 'http://www.masayoung.net/archives/693', type: "web"},
  {_id: '201801020011', url: 'https://bagelee.com/programming/react-native/api-react-native/',type:"web"},
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" },
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" },
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" }
]

export default class FavItem extends React.Component {
  render() {
    return (
      React.createElement("div", {class: "favItem"}, 
         seeList.map(see => (
          React.createElement(TLItem, {key: see._id, see: see})
        ))
      )
    );
  }
}
