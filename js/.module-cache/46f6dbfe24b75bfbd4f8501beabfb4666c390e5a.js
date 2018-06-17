import SearchWindow from "./SearchWindow.js"

export default class Menu extends React.Component {
  render(){
      return (
        React.createElement("div", {class: "col-sm-8", style: {height: '100%'}}, 
		      React.createElement(SearchWindow, null)
        )
      )
  }
}
