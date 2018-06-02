export default class GetURLInfo extends React.Component {
  constructor(){
    super();
    this.state = {
        title: "",
        url: "",
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
        image: $(responseText).filter("meta[property='og:image']").attr('content') ,
        url: this.props.url
      });
    });
  }

  render(){
    return (
      React.createElement("div", {class: "webinfo-component", style: {width: '500px'}}, 
      	React.createElement("span", {class: "brand", style: {backgroundImage: "url(" + this.state.image + ")"}}), 
        React.createElement("div", {class: "frontground"}, 
					React.createElement("span", {class: "titel"}, this.state.title)
          )
        )
    )
  }
}
