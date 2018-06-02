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
      <div class="webinfo-component" style={{width: '100%'}}>
      {/* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */}
      	<span class="brand" ></span>
        <div class="frontground">
					<span class="titel">{this.state.title}</span>
          <span class="description">{this.state.description}</span>
          <span class="url"><a>{this.state.datetime}</a></span> 
        </div>
      </div>
    )
  }
}
