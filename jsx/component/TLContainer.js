export default class TLContainer extends React.Component {
  render(){
    return <div id="tl-container" class="tl-container">
      {this.props.children}
    </div>
  }
}
