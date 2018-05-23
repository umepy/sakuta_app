# sakuta_app
sakuta lesson's App

# TEST
initial_commit

# React
CDNは規約上使用ができないので、buildフォルダ内に保存してあります。


本家:https://reactjs.org/docs/cdn-links.html
5/23時点での最新(developではない方)
react.js react-dom.js どちらもv16.3.2



babel https://cdnjs.com/libraries/babel-standalone
これがないと正常にreactの書いてあるファイルを読めない
dom.min.js v6.26.0


使い方ー以下をbody等に挿入
        <script src="build/react.js"></script>
        <script src="build/react-dom.js"></script>
        <script src=" build/babel.min.js"></script>


# React - 注意点
・あらかじめコンパイルしないと、Reactのjsファイルは動きません。そのためReactが実装されたjsファイルが更新するたびに、コンパイルする必要があります。
1.npmコマンドよりreact-toolsを入れる (まずNode.jsをインストールする必要あり)
2.srcフォルダには、生のjsファイルを入れておき、compilejsファイルにはコンパイル後のファイルが入るように設定
詳しくは-> https://qiita.com/futoase/items/d536527e0bfe83aea0c5


・Content-Security-Policyにより外部ファイルからの動作に制限があり、上で作ったjsファイルはすべてブロックされます。
現状の解決策としては、manifest.jsonにファイルごとに対応したハッシュ値をあらかじめホワイトリストとして登録しておけば、参照が可能になりますが、ファイルが書き変わるとハッシュ値も変わるので、変更ごとに値を書き換える必要があります。また、ファイル数分の書き込みが必要であること、manifestはコメントが挿入不可なためファイルとの対応の把握が難しいことなどから、あまり好ましい手段ではないです。（現段階でこれで実装＆動作確認済み）


新たな手法としてnonce属性<script>に割り振ることで、読み込みが許可されるらしいです。また今度調べます。
