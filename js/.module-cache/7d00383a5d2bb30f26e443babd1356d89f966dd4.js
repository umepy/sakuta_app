import TLList from './TLList.js'

const seeList =[
  {_id: '201801010011', url: 'http://www.masayoung.net/archives/693', type: "web"},
  {_id: '201801020011', url: 'https://bagelee.com/programming/react-native/api-react-native/',type:"web"},
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693',type: "web" }
]

const memoList=
[
  {_id: '201801010013', url:"メモの保存先?", type:"memo"}
]

export default class Timeline extends React.Component {
  constructor(){
    super();
  }


  //render前に呼ばれる
  componentWillMount()
  {

  }

  getseeLaterFromDB()
  {
    var sees = seeList
    return sees
  }

  getMemoFromDB()
  {
    var memos = memoList
    return memos
  }

  render(){
    console.log(new Date())
    var list = this.getseeLaterFromDB()
    list.push(this.getMemoFromDB())
    console.log(list)
    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100%',padding: '1%'}}, "  ", /** こっちはタイムラインの外枠組みのdiv */
        React.createElement("p", null, "タイムライン"), 
        React.createElement(TLList, {seeList: list})
      )
    )
  }
}
