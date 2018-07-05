import TLItem from './TLItem.js';
import FavItem from './FavItem.js'
import PanelContainer from './PanelContainer.js'

export default class FavList extends React.Component {
  render() {
    return (
      React.createElement("div", {id: "favList"}, 
          React.createElement(FavItem, null)
      )
    );
  }
}
