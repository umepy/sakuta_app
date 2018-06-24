
const geturlinfoAsync =(url)=> {
  return new Promise(
    function(resolve, reject) {
      fetch(url)
      .then((response)=>response.text())
      .then((responseText) => {
        var atitle=$(responseText).filter("meta[property='og:title']").attr('content')
        var adescription=$(responseText).filter("meta[property='og:description']").attr('content')
        var aimage =$(responseText).filter("meta[property='og:image']").attr('content')

        //if(typeof (atitle=document.title) === 'undefined') atitle="No title"
        if(typeof adescription === 'undefined') adescription="Sorry, we could't load."
        if(typeof aimage === 'undefined'){
          chrome.storage.local.get(url, function(stream){
            aimage=stream[url]
            if(typeof aimage === 'undefined') aimage="http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png"
          })
          .then(resolve(make_resp(atitle, adescription, aimage)))
        }
        resolve(make_resp(atitle, adescription, aimage))
      })
    })
}

function make_resp(atitle, adescription, aimage){
    var resp =new Object()
    resp.title=atitle
    resp.description=adescription
    resp.image=aimage
    return resp
}

export default geturlinfoAsync
