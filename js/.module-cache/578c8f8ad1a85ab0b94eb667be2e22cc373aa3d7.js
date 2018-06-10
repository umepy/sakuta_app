import CreateWebForm from './CreateTLWebForm.js'
import CreateMemoForm from './CreateTLMemoForm.js'
import TLList from './TLList.js'

const seeList =[
  {_id: '201801010011', url: 'http://www.masayoung.net/archives/693'},
  {_id: '201801020011', url: 'https://bagelee.com/programming/react-native/api-react-native/'},
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693' }
]

export default class Timeline extends React.Component {

   getSeeLaterFromDB()
  {
    return new Promise(
      function(resolve, reject) {
      var resp={"1":"http://www.masayoung.net/archives/693","2":"https://bagelee.com/programming/react-native/api-react-native/","3":"http://www.masayoung.net/archives/693"}
      console.log(resp)
      resolve(resp)
      })

  }

  render(){
    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100%',padding: '1%'}}, "  ", /** こっちはタイムラインの外枠組みのdiv */
        React.createElement("p", null, "タイムライン"), 
        React.createElement(TLList, {seeList: seeList})
      )
    )
  }
}
