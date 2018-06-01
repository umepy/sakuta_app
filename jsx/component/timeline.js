import GetURLInfo from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      <div  class="col-sm-4" style={{height: '100px'}}>
        <p>タイムライン</p>
        <GetURLInfo  url="http://www.masayoung.net/archives/693"/>
        <GetURLInfo url="http://rittor-music.jp/guitar/column/guitarchord/467"/>
      </div>
    )
  }
}
