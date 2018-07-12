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

  render() {
    return (
      <div id="searchWindow" align="center">
    		<input type="search" placeholder="検索" onKeyDown={e=>{if(e.key=='Enter') window.location.href = 'https://www.google.co.jp/search?q='+this.state.value}} value={this.state.value} onChange={this.handleInput} size="50" />
      </div>
    );
  }
}
