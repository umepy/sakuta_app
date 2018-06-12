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
    this.state={
      sees:[]
    }
  }

  componentWillMount() {
      get_seelater().then(data => {
          this.setState({sees: data});
      });
  }


  async getseeLaterFromDB()
  {
    let sees;
    sees = await get_seelater();
    console.log(JSON.stringify(sees));
    return sees;
  }

  getMemoFromDB()
  {
    var memos = memoList
    return memos
  }

  render(){
    var list = this.state.sees
    list.push(this.getMemoFromDB())
    
    //TODO: _idの小さい順に並べるとかすれば、ソートできる
    

    return (
      <div  class="col-sm-4" style={{height: '100%',padding: '1%'}}>  {/** こっちはタイムラインの外枠組みのdiv */}
        <p>タイムライン</p>
        <TLList seeList={list} />
      </div>
    )
  }
}
