//後で見る用のデータの作成
//取得できなかった場合は取得できなかったときようのデータを付与
//atitle:タイトル
//adescription: 表示する文章(og:description)
//aimage: og:image もしくはスクショ
const geturlinfoAsync =(url)=> {
  return new Promise(
    function(resolve, reject) {
      fetch(url)
      .then((response)=>response.text())
      .then((responseText) => {

        console.log(responseText.match(/<title>([^<]*)<\/title>/i).keys[1])
        var atitle=$(responseText).filter("meta[property='og:title']").attr('content')
          || $(responseText).filter("meta[property='title']").attr('content')
          || $(responseText).match(/<title>([^<]*)<\/title>/i)
          || "No title"
          //|| $(responseText).filter('title').text() || "No title"
        var adescription=$(responseText).filter("meta[property='og:description']").attr('content')
        || $(responseText).filter("meta[property='description']").attr('content')
        || $(responseText).filter("meta[name=description]").attr('content')
          || "\n\n"
        var aimage =$(responseText).filter("meta[property='og:image']").attr('content')

        if(typeof aimage === 'undefined'){
          chrome.storage.local.get(url, function(stream){
            aimage=stream[url] || "http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png"
            resolve(make_resp(atitle, adescription, aimage))
          })
        }
        else{
            resolve(make_resp(atitle, adescription, aimage))
        }
      })
    })
}

//返すresponseの作成
function make_resp(atitle, adescription, aimage){
    var resp =new Object()
    resp.title=atitle
    resp.description=adescription
    resp.image=aimage
    return resp
}

export default geturlinfoAsync
