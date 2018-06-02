import GetURLInfo from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      <div  class="col-sm-4" style={{height: '100%',padding: '1%'}}>  {/** こっちはタイムラインの枠組みのdiv */}
        <p>タイムライン</p>
        <div class="timeline" style={{height: '100%', overflow: 'scroll',padding: '2%'}} >  {/*タイムラインの中身のdiv*/}
          <GetURLInfo  url="http://www.masayoung.net/archives/693"/>
          <GetURLInfo  url="http://www.masayoung.net/archives/693"/>
          {/* <GetURLInfo url="http://rittor-music.jp/guitar/column/guitarchord/467"/>  このページを読み込むと謎のエラーがでる アクセス時に .swfファイルをダウンロードしてる？*/} 
          <GetURLInfo url="https://bagelee.com/programming/react-native/api-react-native/"/>
          <GetURLInfo url="https://bagelee.com/programming/react-native/api-react-native/"/>
        </div>
      </div>
    )
  }
}
