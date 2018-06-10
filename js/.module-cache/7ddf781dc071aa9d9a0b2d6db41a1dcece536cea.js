import CreateWebForm from './CreateTLWebForm.js'
import CreateMemoForm from './CreateTLMemoForm.js'

export default class Timeline extends React.Component {

  getSeeLaterFromDB()
  {
    return new Promise(
      function(resolve, reject) {
      var resp = {1:"http://www.masayoung.net/archives/693",2:"https://bagelee.com/programming/react-native/api-react-native/",3:"http://www.masayoung.net/archives/693"}
      resolve(resp)
      })

  }

  
  render(){
    var list=[]
    list.push(React.createElement(CreateWebForm, {url: "http://www.masayoung.net/archives/693"}))
    this.getSeeLaterFromDB()
    .then((response)=>{
      console.log(response.list[0])
      for(var i=0;i<Object.keys(response).length;i++){
        list.push(React.createElement(CreateWebForm, {url: response[i]}))
      }
    })

    return (
      React.createElement("div", {class: "col-sm-4", style: {height: '100%',padding: '1%'}}, "  ", /** こっちはタイムラインの枠組みのdiv */
        React.createElement("p", null, "タイムライン"), 
        React.createElement("div", {class: "timeline", style: {height: '100%', overflow: 'scroll',padding: '2%'}}, "  ", /*タイムラインの中身のdiv*/
          list
          /* <CreateWebForm  url="http://www.masayoung.net/archives/693"/>
          <CreateWebForm  url="http://www.masayoung.net/archives/693"/>
          <CreateMemoForm />
          {/* <CreateWebForm url="http://rittor-music.jp/guitar/column/guitarchord/467"/>  このページを読み込むと謎のエラーがでる アクセス時に .swfファイルをダウンロードしてる？*/
          /* <CreateWebForm url="https://bagelee.com/programming/react-native/api-react-native/"/>
          <CreateWebForm url="https://bagelee.com/programming/react-native/api-react-native/"/> */
        )
      )
    )
  }
}
