import TLList from './TLList.js'
import TLContainer from './TLContainer.js'
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
      memos:[],
      removeTabs:[]
    }
  }

  componentWillMount() {
      get_seelater().then(data => {
          this.setState({sees: data});
      });
      //TODO:ここをタブのやつに変更する
      get_seelater().then(data =>{
          this.setState({removeTabs: data});
      });
  }

  render(){
    // var list = this.state.sees
    var list = seeList//// DEBUG: 消す!!!!!
    var rmlist=this.state.sees


    return (
      <div id="timeLine">  {/** こっちはタイムラインの外枠組みのdiv */}

      <Tabs>
            <TabList>
              <Tab>後で見る</Tab>
              <Tab>削除タブ</Tab>
              <Tab>メモ</Tab>
            </TabList>
            <TabPanel>
              <TLContainer>
                <TLList seeList={list} />
              </TLContainer>
            </TabPanel>
            <TabPanel>
              <TLContainer>
                <TLList seeList={rmlist} />
              </TLContainer>
            </TabPanel>
            <TabPanel>
            <TLContainer>
            </TLContainer>
            </TabPanel>

      </Tabs>
        { /*<PanelContainer>
          {/* ここにコメントを入れるためのフォーム */}
          {/*<TLList seeList={list} />
        </PanelContainer>*/}
      </div>
    )
  }
}
