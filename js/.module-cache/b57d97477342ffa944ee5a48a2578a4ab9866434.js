import GetURLInfo from './GetURLInfo.js'

export default class Timeline extends React.Component {
  render(){
    return (
      React.createElement("div", {class: "timeline", style: {height: '100px'}}, 
        React.createElement("p", null, "タイムライン"), 
        React.createElement(GetURLInfo, {url: "http://www.masayoung.net/archives/693"}), 
        React.createElement(GetURLInfo, {url: "http://www.masayoung.net/archives/693"}), 
        /* <GetURLInfo url="http://rittor-music.jp/guitar/column/guitarchord/467"/>  このページを読み込むと謎のエラーがでる アクセス時に .swfファイルをダウンロードしてる？*/
         React.createElement(GetURLInfo, {url: "https://bagelee.com/programming/react-native/api-react-native/"})
      )
    )
  }
}
