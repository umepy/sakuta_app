import GetURLInfo from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100px'}}, 
        React.createElement("p", null, "タイムライン")
        /* <GetURLInfo  url="http://www.masayoung.net/archives/693"/>
        <GetURLInfo url="http://rittor-music.jp/guitar/column/guitarchord/467"/> */
      )
    )
  }
}
