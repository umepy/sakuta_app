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
      this.setState({ data: $(responseText).filter("meta[property='og:title']").attr('content') });
    });
  }

  render(){
    return (
        React.createElement("p", null, this.state.data)
    )
  }
}
