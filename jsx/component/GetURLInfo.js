

const  openNewTab =(e,url)=> {
    e.preventDefault();
    chrome.tabs.create({url:url})
}

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
    .then((responseText) => {
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
      <div class="webinfo-component" style={{width: '500px'}}>
      <a href="" onClick={e => openNewTab(e,this.props.url)} >
      	<span class="brand" style={{backgroundImage: "url(" + this.state.image + ")"}}></span>
        <div class="frontground">
					<span class="titel">{this.state.title}</span>
          <span class="description">{this.state.description}</span>
          <span class="url"><a href={this.state.url}>{this.state.url}</a></span> {/* a hrefはエクステンションからは移動できない. tabを開いて上げる必要がある*/}
          </div>
          </a>
        </div>
    )
  }
}
