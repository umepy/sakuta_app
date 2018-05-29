import TimeLine from './component/timeline'

class Main extends React.Component {
    render(){
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello World!"), 
                React.createElement("p", null, "このページはテストページだよ！"), 
                React.createElement(TimeLine, null)
            )
        )
    }
}

ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app') /* Reactが生成したコードを#mainに書き出す */
);
