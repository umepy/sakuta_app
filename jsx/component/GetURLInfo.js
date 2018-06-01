export default class GetURLInfo extends React.Component {
  constructor(){
    super();
    this.state = {
        data: ""
    };
  }

  //マウント前に呼ばれるらしい
  componentWillMount(){
    console.log("call before")
    fetch(this.props.url)
    .then((response)=>response.text())
    .then(responseText => {
      this.setState({ data:responseText });
    });
  }

  render(){
    return (
        <p>{this.state.data}</p>
    )
  }
}
