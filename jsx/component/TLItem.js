import geturlinfoAsync from './functions/geturlinfo.js'
import openNewTab from './functions/openNewTab.js'

export default class TLItem extends React.Component {
    constructor(){
        super();
        this.state = {
            title: "",
            url: "",
            description: "",
            image:""
        };
    }

    componentWillMount(){

    }

    render(){
        if(this.props.see.type=="web"){
            geturlinfoAsync(this.props.see.url)
            .then((resp)=>{
                console.log(resp);
                this.setState({
                title: resp.title,
                description:  resp.description,
                image: resp.image ,
                url: this.props.see.url
                });
            })
            return (
                <div id="TL-item" class="webinfo-component" style={{width: '100%'}}>
                <a href="" onClick={e => openNewTab(e,this.props.see.url)} >
                    <span class="brand" style={{backgroundImage: "url(" + this.state.image + ")"}}></span>
                <div class="frontground">
                            <span class="titel">{this.state.title}</span>
                    <span class="description">{this.state.description}</span>
                    <span class="url"><a>{this.state.url}</a></span> {/* a hrefはエクステンションからは移動できない. tabを開いて上げる必要がある*/}
                </div>
                </a>
                </div>
            )
        }
        else
        {
            var memo= new Object()
            memo.title= "メモだお"
            memo.description= "来週のサザエさんきになる"
            memo.datetime="2018-01-01"
            return (
                <div class="memo-component" style={{width: '100%'}}>
                {/* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */}
                    <span class="brand" ></span>
                    <span class="titel">{memo.title}</span>
                    <span class="description">{memo.description}</span>
                    <span class="url"><a>{memo.datetime}</a></span>
                </div>
            )
        }
    }
}
