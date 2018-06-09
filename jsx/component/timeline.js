import TLList from './TLList.js'

const seeList =[
  {_id: '201801010011', url: 'http://www.masayoung.net/archives/693'},
  {_id: '201801020011', url: 'https://bagelee.com/programming/react-native/api-react-native/'},
  {_id: '201802030022', url: 'http://www.masayoung.net/archives/693' }
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
    var list = seeList
    return list
  }

  render(){

    var list = this.getseeLaterFromDB()
    return (
      <div  class="col-sm-4" style={{height: '100%',padding: '1%'}}>  {/** こっちはタイムラインの外枠組みのdiv */}
        <p>タイムライン</p>
        <TLList seeList={list} />
      </div>
    )
  }
}
