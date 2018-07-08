import SearchWindow from "./SearchWindow.js"
import PanelContainer from './PanelContainer.js'

export default class Menu extends React.Component {
  render(){
    return (
      <div id="menu">
        <div id="menuSearchWindow">
          <PanelContainer>
  		      <SearchWindow/>
          </PanelContainer>
        </div>
      </div>
    )
  }
}
