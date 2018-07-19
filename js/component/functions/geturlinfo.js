//後で見る用のデータの作成
//取得できなかった場合は取得できなかったときようのデータを付与
//atitle:タイトル
//adescription: 表示する文章(og:description)
//aimage: og:image もしくはスクショ

var cat_url = ['https://img.app.dcm-gate.com/wp-content/uploads/2020/02/20180215_nekostamp_R.jpg',
 'https://cdn.wanchan.jp/c/nekochan.jp/pro/resize/700x500/100/6/a644e10e608007319f427b1aac713400.jpg',
 'https://i1.wp.com/ailovei.com/wp-content/uploads/2015/09/%E3%81%8A%E3%82%82%E3%81%97%E3%82%8D%E7%8C%AB-48.jpg?fit=630%2C792&ssl=1',
 'https://i1.wp.com/ailovei.com/wp-content/uploads/2015/01/%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E7%8C%AB0.jpg?resize=700%2C525&ssl=1',
 'http://funnycatjp.com/upload/1677167255657543.jpg',
 'https://11cats.com/wp-content/uploads/2015/11/lovec00.jpg',
 'https://pbs.twimg.com/media/C5KVDBDVUAIWI5d.jpg',
 'https://pbs.twimg.com/media/C5KVHY5UYAAanFI.jpg',
 'http://pet-seikatsu.jp/images/2015/12/b1b7f90d912801f70d9ea05811ff61b9-large.jpg',
 'http://ailovei.com/wp-content/uploads/2014/12/%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E7%8C%AB12.jpg',
 'http://fanblogs.jp/togezotv/file/undefined/E58FAFE6849BE38184E78CAB211.jpg',
 'http://animan7.fun/wp-content/uploads/2018/04/14bf8a4b3ebc5600055613c4b5a380d6.jpg',
 'https://i.ytimg.com/vi/QFcHl11dX0M/maxresdefault.jpg',
 'http://cats-diary.up.seesaa.net/BW_Upload/tm_IMG_2427.jpg',
 'https://nekogazou.com/wp-content/uploads/2013/03/588f5dc5c85286438783f2302a488dbe2.jpg',
 'http://i.ytimg.com/vi/El5l50bVam0/mqdefault.jpg',
 'https://i.ytimg.com/vi/yHLCQzRSUjc/maxresdefault.jpg',
 'http://cats-diary.up.seesaa.net/BW_Upload/tm_IMG_9721.jpg',
 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20140720%2F51%2F5551361%2F369%2F480x602x1d1de1ec8302cf010c9ebf3c.jpg%2F300%2F600&twidth=300&theight=600&qlt=80&res_format=jpg&op=r',
 'https://pbs.twimg.com/profile_images/378800000743014378/5f9f23464c568dd9e3b1f60156669802_400x400.jpeg',
 'http://cat.dougabu.com/wp-content/uploads/2017/10/f43f060f0b3682cb44875c5304a384d9.jpg',
 'https://pbs.twimg.com/profile_images/756665833586298880/OXXvr2Rw_400x400.jpg',
 'http://stat.ameba.jp/user_images/20120612/19/dotdotiiyo/54/21/j/o0403040312024408817.jpg',
 'http://userdisk.webry.biglobe.ne.jp/002/169/36/1/P1000267.jpg',
 'https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20131029%2F37%2F3017027%2F13%2F396x576x2695ea84f6202e739a93f519.jpg%2F300%2F600&twidth=300&theight=0&qlt=80&res_format=jpg&op=r',
 'http://pds.exblog.jp/pds/1/200711/21/16/c0145016_21225869.jpg',
 'https://nekogazou.com/wp-content/uploads/2013/03/49ef72b19c9b2addea8db508ca9b00b73.jpg',
 'https://petomorrow.jp/wordpress/wp-content/uploads/2015/11/neko_magnet.jpg',
 'https://cdn.wanchan.jp/c/nekochan.jp/pro/resize/700x500/100/1/9dd4f00d9fccd98c8718998de091072b.jpg',
 'http://inunekomonogatari.up.seesaa.net/image/kawai.jpg',
 'https://cdn.wanchan.jp/c/nekochan.jp/pro/crop/670x340/center/4/6c981251e4af6a0dabbb430dcfccb460.jpg',
 'https://i.ytimg.com/vi/1k3ldOe2Urc/maxresdefault.jpg',
 'https://pbs.twimg.com/profile_images/667206675816820736/6SLlz1pQ.jpg',
 'https://cdn.clipkit.co/tenants/30/item_instagram_directs/images/000/025/516/medium/ba649409-9910-4ab0-a1cc-55967d66f2c4.jpg?1496797235',
 'https://petomorrow.jp/wordpress/wp-content/uploads/2017/04/1f3ef1d619c0894739cc99ac98266b71-480x480.jpg',
 'http://psnews.jp/cat/uploads/2017/11/PC20171027neko_TP_V4.jpg',
 'http://eventsnews.info/wp-content/uploads/2016/08/cat132.jpg',
 'http://livedoor.blogimg.jp/karapaia_zaeega/imgs/0/6/066cf8fc.jpg',
 'https://iwiz-chie.c.yimg.jp/im_siggLFd8DfzV9daW6q7io.iulQ---x320-y320-exp5m-n1/d/iwiz-chie/que-11147999161',
 'http://ailovei.com/wp-content/uploads/2014/12/%E3%81%8B%E3%82%8F%E3%81%84%E3%81%84%E7%8C%AB13.jpg',
 'https://i.ytimg.com/vi/Wmm34g4pxkg/maxresdefault.jpg',
 'https://i1.wp.com/ailovei.com/wp-content/uploads/2015/02/%E5%8F%AF%E6%84%9B%E3%81%84%E7%8C%AB27.jpg?resize=650%2C439&ssl=1',
 'http://image.itmedia.co.jp/nl/articles/1702/22/miya_170222nekotissuehansei01.jpg',
 'http://stat001.ameba.jp/user_images/20090430/11/taruken/f7/f4/j/o0380028410173302228.jpg',
 'http://gif89a.net/wp-content/uploads/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88-2014-07-27-14.31.45.png',
 'https://i.ytimg.com/vi/_oR87B_8LJs/hqdefault.jpg',
 'https://pbs.twimg.com/profile_images/437087111296995328/HtpA3pzP_400x400.jpeg',
 'https://nekogazou.com/wp-content/uploads/2013/03/3ed863717eb290d3df169ebdb70df75e1.jpg',
 'https://grapee.jp/wp-content/uploads/29663_main.jpg',
 'https://sekach.com/wp-content/uploads/2017/11/mean_cat_5.jpg',
 'https://i.pinimg.com/originals/02/d9/dd/02d9dd2cc48d3e11f160b9ee8b88f0a2.jpg',
 'http://funnycatjp.com/upload/290319848062934.jpg',
 'http://sharetube.jp/assets/img/article/2017/facebook_ogp_half/4781.jpg',
 'http://1styoutubeblackcat.up.seesaa.net/image/pc15.jpg',
 'https://i.ytimg.com/vi/xVUUsXFN7ow/hqdefault.jpg',
 'https://nekogazou.com/wp-content/uploads/2013/07/0142.jpg',
 'http://stat001.ameba.jp/user_images/20090829/19/taruken/79/7c/j/o0540036010243001027.jpg',
 'http://blogimg.goo.ne.jp/user_image/5d/90/36d14e28d1dc716c9b3301a917d503e9.jpg',
 'http://wanko-douga.com/wp-content/uploads/2018/06/13661479e2792cf291d8ef0680283d0d.jpeg',
 'https://nekogohan-web.jp/wp/wp-content/uploads/2018/01/neko-kawaii236.jpg']


const geturlinfoAsync =(url)=> {
    return new Promise(
        function(resolve, reject) {
            chrome.storage.local.get(url, function(value){
                var title
                var image
                var description
                try{ title = value[url][0]} catch(e){}
                try{ image = value[url][1]} catch(e){}
                try{ description = value[url][2]} catch(e){}
                if(title == null) title = undefined
                if(image == null || image == 400) image = undefined
                resolve(get_data(url, title, image, description))
            })
        }
    )
}

//返すresponseの作成
function get_data(url, atitle, aimage, adescription){
    return new Promise(
        function(resolve, reject) {
            if(!url.indexOf("http") || !url.indexOf("https") ){

                fetch(url)
                .then((response)=> response.text())
                .then((responseText) => {
                    var title = atitle
                        || $(responseText).filter("meta[property='og:title']").attr('content')
                        || $(responseText).filter("meta[property='title']").attr('content')
                    try{title = title || responseText.match(/<title>([^<]*)<\/title>/i).pop()}catch(e){}
                    var description = adescription
                    var image = aimage
                        || $(responseText).filter("meta[property='og:image']").attr('content')

                    if(typeof atitle === 'undefined' || typeof aimage === 'undefined'){
                        store_data(url, title, image, description)
                        resolve(make_resp(url, title, image, description))
                    }
                    else{
                        resolve(make_resp(url, title, image, description))
                    }

                })
                .catch(error => {
                    resolve(make_resp(url, atitle, aimage, adescription))
                })
            }
            else{
                resolve(make_resp(url, atitle, aimage, adescription))
            }
        }
    )
}

//返すresponseの作成
function make_resp(url, title, image, description){
    var resp = new Object()
    resp.title = title
    resp.image = image
        || cat_url[Math.floor((Math.random() * cat_url.length))]
    resp.description = description
    return resp
}

function store_data(url, title, image, description){
    //データの削除がある時，その値(delete_url)を更新
    chrome.storage.local.remove([url],
        function(){chrome.storage.local.set({[url]:[title, image, description]}, function(){})})
}

/*
async function make_image(title, image, description, html){
    var canvas = document.createElement('canvas');
    canvas.width = 1600
    canvas.height = 900

    return rasterizeHTML.drawHTML(
        html,
        canvas
    )
    .then((canvas) => {
        return make_resp(
                title,
                "data:image/svg+xml;base64,"+window.btoa(canvas.svg),
                description
            )
        }
    )
    /*
    html2canvas(doc.body)
    .then(canvas =>
        {
            console.log(canvas)
            image = canvas.toDataURL('image/jpeg', 0.9)
            var resp = new Object()
            resp.title = atitle
            resp.image = image
                || "http://livedoor.blogimg.jp/superbabooooo/imgs/d/f/df70fcd8.png"
            console.log(resp)
            return resp
        }
    )
    */
/*
}
*/
function bestCopyEver(src) {
    return Object.assign({}, src);
}

export default geturlinfoAsync
