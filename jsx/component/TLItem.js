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
            datetime:"",
            displayX: "none",
        };
        this.onMouseOver = this.onMouseOver.bind(this)
        this.onMouseOut = this.onMouseOut.bind(this)
    }

    componentWillMount(){
        //console.log(this.props.see.type)

        if(this.props.see.type=="web"){
            geturlinfoAsync(this.props.see.url)
            .then((resp)=>{
                this.setState({
                title: resp.title,
                description:  resp.description,
                image: resp.image,
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
      del_seelater(url)
      let elem = this.element
      elem.parentNode.removeChild(elem);
    }

    render(){
        if(this.props.see.type=="web"){
            return (
                <div class="TL-item" ref={ div => { this.element = div }}>
                  <div class="webinfo-component"
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}>
                    <a href="" onClick={e => openNewTab(e,this.props.see.url)} >
                        <span class="brand" style={{backgroundImage: "url(" + this.state.image + ")"}}></span>
                        <div class="frontground">
                            <div class="title">{this.state.title}</div>
                        </div>
                    </a>
                  </div>
                  <div class="X-button"
                    style={{display: this.state.displayX}}
                    onMouseOver={this.onMouseOver}
                    onMouseOut={this.onMouseOut}
                    onClick={this.onDelete.bind(this, this.props.see.url)}>
                    <img src="../../img/x.svg"/>
                  </div>
                </div>
            )
        }
       else if (this.props.see.type=="memo"){
            return (
                <div class="memo-component" style={{width: '100%'}}>
                {/* <a href="" onClick={e => openNewTab(e,this.props.url)} > クリックしたら編集したり窓空いたりする仕掛け欲しいTODO */}
                    <span class="brand" ></span>
                    <span class="title">{this.state.title}</span>
                    <span class="description">{this.state.description}</span>
                    <span class="url"><a>{this.state.datetime}</a></span>
                </div>
            )
        }
        else //何かが必ずreturnする形にしなければエラーになる
        {
            return(
                <div> </div>
            )
            console.log("error: undefined type:"+ this.props.see.type)
        }
    }
}
