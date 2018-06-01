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
      React.createElement("div", {class: "skype-rich", style: "width: 500px;"}, 
      /* <span class="brand" style="background-image:url('{this.state.url}')"></span> */
      React.createElement("div", {class: "frontground"}, 
        React.createElement("span", {class: "titel"}, this.state.title), 
        React.createElement("span", {class: "description"}, this.state.description)
      )
    )
    )
  }
}
