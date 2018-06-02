export default class CreateTLMemoForm extends React.Component {
  constructor(){
    super();
    this.state = {
        title: "",
        description: "",
        datetime: "",
        alert: ""
    };
  }

  componentWillMount(){ {/*dbから呼び出して来るので Promiseがいい*/}
      this.setState({
        title: "メモだお",
        description:  "来週のサザエさんきになる",
        datetime: "2018-01-01"
      })
  }

  render(){
    return (
      React.createElement("div", {id: "memo", class: "memo-component", style: {width: '100%'}}, 
      /* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */
      	React.createElement("span", {class: "brand"}), 
        React.createElement("span", {class: "titel"}, this.state.title), 
        React.createElement("span", {class: "description"}, this.state.description), 
        React.createElement("span", {class: "url"}, React.createElement("a", null, this.state.datetime))
      )
    )
  }
}
