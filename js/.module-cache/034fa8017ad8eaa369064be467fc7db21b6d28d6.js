import generatewebform from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100%',padding: '1%'}}, "  ", /** こっちはタイムラインの枠組みのdiv */
        React.createElement("p", null, "タイムライン"), 
        React.createElement("div", {class: "timeline", style: {height: '100%', overflow: 'scroll',padding: '2%'}}, "  ", /*タイムラインの中身のdiv*/
          React.createElement("generatewebform", {url: "http://www.masayoung.net/archives/693"}), 
          React.createElement("generatewebform", {url: "http://www.masayoung.net/archives/693"}), 
          /* <generatewebform url="http://rittor-music.jp/guitar/column/guitarchord/467"/>  このページを読み込むと謎のエラーがでる アクセス時に .swfファイルをダウンロードしてる？*/
          React.createElement("generatewebform", {url: "https://bagelee.com/programming/react-native/api-react-native/"}), 
          React.createElement("generatewebform", {url: "https://bagelee.com/programming/react-native/api-react-native/"})
        )
      )
    )
  }
}
