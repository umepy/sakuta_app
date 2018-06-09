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
        const {see} = this.props.see
        console.log(see)
        geturlinfoAsync(see.url)
        .then((resp)=>{
            console.log(resp);
            this.setState({
            title: resp.title,
            description:  resp.description,
            image: resp.image ,
            url: see.url
            });
        })
    }

    render(){
        
        return (
            
            React.createElement("div", {id: "TL-item", class: "webinfo-component", style: {width: '100%'}}, 
            React.createElement("a", {href: "", onClick: e => openNewTab(e,see.url)}, 
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
