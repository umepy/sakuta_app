import geturlinfoAsync from './functions/geturlinfo.js'
import openNewTab from './functions/openNewTab.js'

export default class TLItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            url: "",
            description: "",
            image:"",
            datetime:""
        };
    }

    componentWillMount(){
        console.log(this.props.see.type)
        if(this.props.see.type=="web"){
            geturlinfoAsync(this.props.see.url)
            .then((resp)=>{
                this.setState({
                title: resp.title,
                description:  resp.description,
                image: resp.image ,
                url: this.props.see.url
                });
            })
         } else if(this.props.see.type=="memo")
            {
                
                this.setState({
                    title:"メモだお",
                    description: "来週のサザエさんきになる",
                    datetime:"2018-01-01"
                    });
            }
    }


    render(){
        if(this.props.see.type=="web"){
            return (
                React.createElement("div", {id: "TL-item", class: "webinfo-component", style: {width: '100%'}}, 
                React.createElement("a", {href: "", onClick: e => openNewTab(e,this.props.see.url)}, 
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
       else if (this.props.see.type=="memo"){
            return (
                React.createElement("div", {class: "memo-component", style: {width: '100%'}}, 
                /* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */
                    React.createElement("span", {class: "brand"}), 
                    React.createElement("span", {class: "titel"}, this.state.title), 
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
            console.log("error: type is nothing"+ this.props.see.type)
        }
    }
}
