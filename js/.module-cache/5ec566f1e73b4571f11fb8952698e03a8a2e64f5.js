/* コンポーネント */
var ____Class1=React.Component;for(var ____Class1____Key in ____Class1){if(____Class1.hasOwnProperty(____Class1____Key)){Main[____Class1____Key]=____Class1[____Class1____Key];}}var ____SuperProtoOf____Class1=____Class1===null?null:____Class1.prototype;Main.prototype=Object.create(____SuperProtoOf____Class1);Main.prototype.constructor=Main;Main.__superConstructor__=____Class1;function Main(){"use strict";if(____Class1!==null){____Class1.apply(this,arguments);}}
    Object.defineProperty(Main.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello World!"), 
              React.createElement("p", null, "このページはテストページだよ！")
            )
        )
    }});


ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app') /* Reactが生成したコードを#mainに書き出す */
);
