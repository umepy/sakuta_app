
const geturlinfoAsync =(url)=> {
  return new Promise(
    function(resolve, reject) {
      fetch(url)
      .then((response)=>response.text())
      .then((responseText) => {
        var atitle=$(responseText).filter("meta[property='og:title']").attr('content')
        var adescription=$(responseText).filter("meta[property='og:description']").attr('content')
        var aimage =$(responseText).filter("meta[property='og:image']").attr('content')
        console.log(url)
        console.log(atitle)
        if(atitle=="undefined") atitle="No title"
        if(adescription=="undefined") adescription="Sorry, we could't load."
        if(aimage=="undefined") aimage="http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png" //TODO: 山崎のファンクションcall

        var resp =new Object()
        resp.title=atitle
        resp.description=adescription
        resp.image=aimage
        resolve(resp)
      })
    })
}

export default geturlinfoAsync
