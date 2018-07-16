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
                React.createElement("div", {class: "TL-item webinfo-component"}, 
                    React.createElement("a", {href: "", onClick: e => openNewTab(e,this.props.see.url)}, 
                        React.createElement("span", {class: "brand", style: {backgroundImage: "url(" + this.state.image + ")"}}), 
                        React.createElement("div", {class: "frontground"}, 
                            React.createElement("div", {class: "title"}, this.state.title)
                        )
                    ), 
                    React.createElement("div", {class: "X-button"}
                      /* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512">
                      <style type="text/css">
                      	.st0{fill:#4B4B4B;}
                      </style>
                      <g>
                      	<circle cx="256" cy="256" r="200" style="fill: rgb(255, 46, 46);"></circle>
                      	<polygon class="polygon-x" points="339.566,150.861 256,234.436 172.444,150.861 150.87,172.444 234.426,256 150.87,339.556
                      		172.444,361.139 256,277.574 339.566,361.139 361.139,339.566 277.574,256 361.139,172.444 	" style="fill: rgb(255, 255, 255);"></polygon>
                      </g>
                      </svg> */
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
