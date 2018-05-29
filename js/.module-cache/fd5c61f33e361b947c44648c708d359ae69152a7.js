/* コンポーネント */
var ____Class0=React.Component;for(var ____Class0____Key in ____Class0){if(____Class0.hasOwnProperty(____Class0____Key)){Main[____Class0____Key]=____Class0[____Class0____Key];}}var ____SuperProtoOf____Class0=____Class0===null?null:____Class0.prototype;Main.prototype=Object.create(____SuperProtoOf____Class0);Main.prototype.constructor=Main;Main.__superConstructor__=____Class0;function Main(){"use strict";if(____Class0!==null){____Class0.apply(this,arguments);}}
    Object.defineProperty(Main.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello World!"), 
                React.createElement("p", null, "このページはテストページです。")
            )
        )
    }});


ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app') /* Reactが生成したコードを#mainに書き出す */
);
