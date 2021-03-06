export default class GetURLInfo extends React.Component {
  constructor(){
    super();
    this.state = {
        title: "",
        url: this.prps.url,
        description: "",
        image:  ""
    };
  }

  //マウント前に呼ばれるらしい
  componentWillMount(){
    console.log("call before")
    fetch(this.props.url)
    .then((response)=>response.text())
    .then(responseText => {
      this.setState({ 
        title: $(responseText).filter("meta[property='og:title']").attr('content') ,
        description:  $(responseText).filter("meta[property='og:description']").attr('content') ,
        image: $(responseText).filter("meta[property='og:image']").attr('content') 
      });
    });
  }

  render(){
    return (
        React.createElement("p", null, this.state.data)
    )
  }
}
