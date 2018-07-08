import TLList from './TLList.js'
import PanelContainer from './PanelContainer.js'
const { Tabs, TabList, Tab, TabPanel } = ReactTabs;

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
      sees:[],
      memos:[]
    }
  }

  componentWillMount() {
      get_seelater().then(data => {
          this.setState({sees: data});
      });
      this.getMemoFromDB().then(data=>{
        this.setState({memos:data})
      }

      )
  }


  async getseeLaterFromDB()
  {
    let sees;
    sees = await get_seelater();
    console.log(JSON.stringify(sees));
    return sees;
  }

  async getMemoFromDB()
  {
    var memos = memoList
    console.log(memos)
    return memos
  }

  render(){
    var list = this.state.sees
    //list.push(this.state.memos)

    //TODO: _idの小さい順に並べるとかすれば、ソートできる


    return (
      <div id="timeLine">  {/** こっちはタイムラインの外枠組みのdiv */}

      <Tabs>
            <TabList>
              <Tab>A</Tab>
              <Tab>B</Tab>
            </TabList>
            <TabPanel>
              
              <PanelContainer>
                <TLList seeList={list} />
              </PanelContainer>
            </TabPanel>
            <TabPanel>This is the content for tab B</TabPanel>
          </Tabs>
        { /*<PanelContainer>
          {/* ここにコメントを入れるためのフォーム */}
          {/*<TLList seeList={list} />
        </PanelContainer>*/}
      </div>
    )
  }
}

