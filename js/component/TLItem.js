import geturlinfoAsync from './functions/geturlinfo.js'
import openNewTab from './functions/openNewTab.js'

var url_data = {};
var delete_data = {"see_later": [], "auto_remove": []}

export default class TLItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            url: "",
            description: "",
            image:"",
            datetime:"",
            displayX: "none",
        };
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    componentWillMount(){
        //console.log(this.props.see.type)
        //console.log(delete_data)
        if(this.props.see.type=="web"){
            if(typeof(url_data[this.props.see.url]) == 'object'){
                var resp = url_data[this.props.see.url];
                this.setState({
                    title: resp.title,
                    description:  resp.description,
                    image: resp.image,
                    url: this.props.see.url
                });
            }
            else{
                geturlinfoAsync(this.props.see.url)
                .then((resp)=>{
                    url_data[this.props.see.url] = resp;
                    this.setState({
                    title: resp.title,
                    description:  resp.description,
                    image: resp.image,
                    url: this.props.see.url
                    });
                })
            }
         } else if(this.props.see.type=="memo")
            {
                this.setState({
                    title:"メモだお",
                    description: "来週のサザエさんきになる",
                    datetime:"2018-01-01"
                    });
            }
    }

    onMouseOver(){
      this.setState({
        displayX: "inline-block",
      })
    }

    onMouseOut(){
      this.setState({
        displayX: "none",
      })
    }

    onDelete(url){
      if(this.props.flag == "see_later"){del_seelater(url)}
      if(this.props.flag == "auto_remove"){del_auto_remove(url)}
      delete_data[this.props.flag].push(url)
      let elem = this.element
      elem.parentNode.removeChild(elem);
    }

    render(){
        //console.log(delete_data)
        if(this.props.see.type=="web"
            && delete_data[this.props.flag].indexOf(this.props.see.url) == -1
            && this.state.title != null && typeof this.state.title !== 'undefined'){
            return (
                React.createElement("div", {class: "TL-item", ref:  div => { this.element = div }}, 
                  React.createElement("div", {class: "webinfo-component", 
                    onMouseOver: this.onMouseOver, 
                    onMouseOut: this.onMouseOut}, 
                    React.createElement("a", {href: "", onClick: e => openNewTab(e,this.props.see.url)}, 
                        React.createElement("span", {class: "brand", style: {backgroundImage: "url(" + this.state.image + ")"}}), 
                        React.createElement("div", {class: "frontground"}, 
                            React.createElement("div", {class: "title"}, this.state.title)
                        )
                    )
                  ), 
                  React.createElement("div", {class: "X-button", 
                    style: {display: this.state.displayX}, 
                    onMouseOver: this.onMouseOver, 
                    onMouseOut: this.onMouseOut, 
                    onClick: this.onDelete.bind(this, this.props.see.url)}, 
                    React.createElement("img", {src: "../../img/x.svg"})
                  )
                )
            )
        }
       else if (this.props.see.type=="memo"){
            return (
                React.createElement("div", {class: "memo-component", style: {width: '100%'}}, 
                /* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */
                    React.createElement("span", {class: "brand"}), 
                    React.createElement("span", {class: "title"}, this.state.title), 
                    React.createElement("span", {class: "description"}, this.state.description), 
                    React.createElement("span", {class: "url"}, React.createElement("a", null, this.state.datetime))
                )
            )
        }
        else //何かが必ずreturnする形にしなければエラーになる
        {
            return(
                React.createElement("div", null, " ")
            )
            console.log("error: undefined type:"+ this.props.see.type)
        }
    }
}
