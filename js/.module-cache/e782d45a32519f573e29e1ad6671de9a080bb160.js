import geturlinfoAsync from './functions/geturlinfo.js'

const   openNewTab =(e,url)=> {
  e.preventDefault();
  chrome.tabs.create({url:url})
}

export default class createTLwebform extends React.Component {
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
    geturlinfoAsync(this.props.url)
    .then((resp)=>{
      console.log(resp);
      this.setState({
        title: resp.title,
        description:  resp.description,
        image: resp.image ,
        url: this.props.url
      });
    })
  }

  render(){
    return (
      React.createElement("div", {class: "webinfo-component", style: {width: '100%'}}, 
      React.createElement("a", {href: "", onClick: e => openNewTab(e,this.props.url)}, 
      	React.createElement("span", {class: "brand", style: {backgroundImage: "url(" + this.state.image + ")"}}), 
        React.createElement("div", {class: "frontground"}, 
					React.createElement("span", {class: "titel"}, this.state.title), 
          React.createElement("span", {class: "description"}, this.state.description), 
          React.createElement("span", {class: "url"}, React.createElement("a", null, this.state.url)), " "/* a hrefはエクステンションからは移動できない. tabを開いて上げる必要がある*/
        )
      )
      )
    )
  }
}
