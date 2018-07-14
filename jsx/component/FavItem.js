import geturlinfoAsync from './functions/geturlinfo.js'
import openNewTab from './functions/openNewTab.js'

export default class FavItem extends React.Component {
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
            geturlinfoAsync(this.props.see.url)
            .then((resp)=>{
                this.setState({
                title: resp.title,
                description:  resp.description,
                image: resp.image ,
                url: this.props.see.url
                });
            })

    }


    render(){
        if(this.props.see.type=="web"){
            return (
                <div class="webinfo-component">
                <a href="" onClick={e => openNewTab(e,this.props.see.url)} >
                    <span class="brand" style={{backgroundImage: "url(" + this.state.image + ")"}}></span>
                        <div class="frontground">
                            <span class="title">{this.state.title}</span>
                        </div>
                    </a>
                </div>
            )
        }
        else //何かが必ずreturnする形にしなければエラーになる
        {
            return(
                <div> </div>
            )
            console.log("error: type is nothing"+ this.props.see.type)
        }
    }
}
