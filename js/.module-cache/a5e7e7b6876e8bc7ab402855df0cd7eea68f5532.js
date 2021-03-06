import SearchWindow from "./SearchWindow.js"
import FavList from "./FavList.js"
import PanelContainer from './PanelContainer.js'

export default class Menu extends React.Component {
  render(){
    return (
      React.createElement("div", {id: "menu"}, 
        React.createElement("div", {id: "menuSearchWindow"}, 
          React.createElement(PanelContainer, null, 
  		      React.createElement(SearchWindow, null)
          )
        ), 
        React.createElement("div", {id: "menuFavList"}, 
          React.createElement(PanelContainer, null, 
  		      React.createElement(FavList, null)
          )
        )
      )
    )
  }
}
