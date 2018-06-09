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
    }

    render(){
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
}
