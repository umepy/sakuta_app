const   openNewTab =(e,url)=> {
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
    // fetch(this.props.url)
    // .then((response)=>response.text())
    // .then((responseText) => {

    //   var atitle=$(responseText).filter("meta[property='og:title']").attr('content')
    //   var adescription=$(responseText).filter("meta[property='og:description']").attr('content')
    //   var aimage =$(responseText).filter("meta[property='og:image']").attr('content')
    //   if(atitle=="") atitle="No title"
    //   if(adescription=="") adescription="Sorry, we could't load."
    //   if(aimage=="") aimage="http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png" //TODO: 山崎のファンクションcall
      
    //   this.setState({
    //     title: atitle ,
    //     description:  adescription,
    //     image: aimage ,
    //     url: this.props.url
    //   });
    // });


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
