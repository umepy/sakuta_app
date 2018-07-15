export default class SearchWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      word: '',
      class: '',
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

  onBlur(e){
    if(this.state.value) this.setState({ class: 'entered' })
    else this.setState({ class: '' })
  }

  render() {
    return (
      React.createElement("div", {id: "searchWindow", align: "center"}, 
    		React.createElement("input", {type: "search", placeholder: "Search", size: "50", 
          value: this.state.value, 
          class: this.state.class, 
          onKeyDown: e=>{if(e.key=='Enter') window.location.href = 'https://www.google.co.jp/search?q='+this.state.value}, 
          onChange: this.handleInput, 
          onBlur: this.onBlur})
      )
    );
  }
}
