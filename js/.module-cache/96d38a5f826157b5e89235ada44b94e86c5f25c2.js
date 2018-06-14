import SearchWindow from "./SearchWindow.js"

export default class Menu extends React.Component {
  render(){
      return (
        React.createElement("div", {class: "col-sm-8", style: {backgroundColor: '#57b8ff', height: '100%'}}, 
          React.createElement("p", null, "メニュー"), 
		  React.createElement(SearchWindow, null)
        )
      )
  }
}
