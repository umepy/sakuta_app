
function geturlinfoAsync(url) {


  return new Promise()
  {
    (resolve, reject) => {
      fetch(url)
     .then((response)=>response.text())
     .end((err, res) => { 
      if (err) {
        reject(err);
      } else {
        console.log(res);
      }

     })
    };
  }
    // fetch(url)
    // .then((response)=>response.text())
    // .then((responseText) => {

    //   var atitle=$(responseText).filter("meta[property='og:title']").attr('content')
    //   var adescription=$(responseText).filter("meta[property='og:description']").attr('content')
    //   var aimage =$(responseText).filter("meta[property='og:image']").attr('content')
    //   if(atitle=="") atitle="No title"
    //   if(adescription=="") adescription="Sorry, we could't load."
    //   if(aimage=="") aimage="http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png" //TODO: 山崎のファンクションcall

    //   var resp
    //   resp.title=atitle
    //   resp.description=adescription
    //   resp.image=aimage

    // })
  //}
}

export default geturlinfoAsync