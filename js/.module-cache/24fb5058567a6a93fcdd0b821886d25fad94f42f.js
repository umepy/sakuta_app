export default class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      word: '',
    };

    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
  }

  handleInput({target:{value}}){
    this.setState({
      value
    });
  }

  send() {
    const {value} = this.state;
    this.setState({
      value: '',
      word: value
    });
  }

  onBulr({target:{value}}){
    console.log("これはログだよ");
  }

  render() {
    return (
      React.createElement("div", {id: "searchWindow", align: "center"}, 
    		React.createElement("input", {type: "search", placeholder: "Search", onKeyDown: e=>{if(e.key=='Enter') window.location.href = 'https://www.google.co.jp/search?q='+this.state.value}, value: this.state.value, onChange: this.handleInput, onBlur: this.onBlur, size: "50"})
      )
    );
  }
}
