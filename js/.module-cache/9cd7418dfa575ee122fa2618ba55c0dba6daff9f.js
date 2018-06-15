import SearchWindow from "./SearchWindow.js"
import PanelContainer from './PanelContainer.js'

export default class Menu extends React.Component {
  render(){
    return (
      React.createElement("div", {id: "menu", class: "col-sm-8", style: {height: '100%'}}, 
        React.createElement(PanelContainer, null, 
		      React.createElement(SearchWindow, null)
        )
      )
    )
  }
}
