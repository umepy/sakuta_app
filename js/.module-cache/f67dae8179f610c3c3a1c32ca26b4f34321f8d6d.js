import SearchWindow from "./SearchWindow.js"
import PanelContainer from './PanelContainer.js'

export default class Menu extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "col-sm-8", style: {height: '100%'}}, 
        /* <PanelContainer> */
		      React.createElement(SearchWindow, null)
        /* </PanelContainer> */
      )
    )
  }
}