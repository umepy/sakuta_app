export default class Menu extends React.Component {
  render(){
      return (
        React.createElement("div", {class: "col-sm-8", style: {backgroundColor: '#67F', height: '100px'}}, 
          React.createElement("p", null, "メニュー")
        )
      )
  }
}
