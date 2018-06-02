import CreateWebForm from './CreateTLWebForm.js'
import CreateMemoForm from './CreateTLMemoForm.js'

export default class Timeline extends React.Component {
  render(){
    return (
      <div  class="col-sm-4" style={{height: '100%',padding: '1%'}}>  {/** こっちはタイムラインの枠組みのdiv */}
        <p>タイムライン</p>
        <div class="timeline" style={{height: '100%', overflow: 'scroll',padding: '2%'}} >  {/*タイムラインの中身のdiv*/}
          <CreateWebForm  url="http://www.masayoung.net/archives/693"/>
          <CreateWebForm  url="http://www.masayoung.net/archives/693"/>
          <CreateMemoForm />
          {/* <CreateWebForm url="http://rittor-music.jp/guitar/column/guitarchord/467"/>  このページを読み込むと謎のエラーがでる アクセス時に .swfファイルをダウンロードしてる？*/} 
          <CreateWebForm url="https://bagelee.com/programming/react-native/api-react-native/"/>
          <CreateWebForm url="https://bagelee.com/programming/react-native/api-react-native/"/>
        </div>
      </div>
    )
  }
}
