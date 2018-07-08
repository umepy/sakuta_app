import TLList from './TLList.js'
import PanelContainer from './PanelContainer.js'
//import Tabs from './functions/Tabs.js'
//import Pane from './functions/Pane.js'

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
      React.createElement("div", {id: "timeLine"}, "  ", /** こっちはタイムラインの外枠組みのdiv */
      React.createElement(Tabs, {selected: 0}, 
  React.createElement(Pane, {label: "Tab 1"}, 
    React.createElement("div", null, "This is my tab 1 contents!")
  ), 
  React.createElement(Pane, {label: "Tab 2"}, 
    React.createElement("div", null, "This is my tab 2 contents!")
  ), 
  React.createElement(Pane, {label: "Tab 3"}, 
    React.createElement("div", null, "This is my tab 3 contents!")
  )
)
        /*<PanelContainer>
          {/* ここにコメントを入れるためのフォーム */
          /*<TLList seeList={list} />
        </PanelContainer>*/
      )
    )
  }
}


const Tabs = React.createClass({
  displayName: 'Tabs',
  propTypes: {
    selected: React.PropTypes.number,
    children: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.element
    ]).isRequired
  },
  getDefaultProps() {
    return {
      selected: 0
    };
  },
  getInitialState() {
    return {
      selected: this.props.selected
    };
  },
  handleClick(index, event) {
    event.preventDefault();
    this.setState({
      selected: index
    });
  },
  _renderTitles() {
    function labels(child, index) {
      let activeClass = (this.state.selected === index ? 'active' : '');
      return (
        React.createElement("li", {key: index}, 
          React.createElement("a", {href: "#", 
            className: activeClass, 
            onClick: this.handleClick.bind(this, index)}, 
            child.props.label
          )
        )
      );
    }
    return (
      React.createElement("ul", {className: "tabs__labels"}, 
        this.props.children.map(labels.bind(this))
      )
    );
  },
  _renderContent() {
    return (
      React.createElement("div", {className: "tabs__content"}, 
        this.props.children[this.state.selected]
      )
    );
  },
  render() {
    return (
      React.createElement("div", {className: "tabs"}, 
        this._renderTitles(), 
        this._renderContent()
      )
    );
  }
});

const Pane = React.createClass({
  displayName: 'Pane',
  propTypes: {
    label: React.PropTypes.string.isRequired,
    children: React.PropTypes.element.isRequired
  },
  render() {
    return (
      React.createElement("div", null, 
        this.props.children
      )
    );
  }
});