import GetURLInfo from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100px'}}, 
        React.createElement("p", null, "タイムライン"), 
        React.createElement(GetURLInfo, {url: "https://qiita.com/koba04/items/4f874e0da8ebd7329701"})
      )
    )
  }
}
