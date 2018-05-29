// import TimeLine from './component/timeline'

var ____Class5=React.Component;for(var ____Class5____Key in ____Class5){if(____Class5.hasOwnProperty(____Class5____Key)){Main[____Class5____Key]=____Class5[____Class5____Key];}}var ____SuperProtoOf____Class5=____Class5===null?null:____Class5.prototype;Main.prototype=Object.create(____SuperProtoOf____Class5);Main.prototype.constructor=Main;Main.__superConstructor__=____Class5;function Main(){"use strict";if(____Class5!==null){____Class5.apply(this,arguments);}}
    Object.defineProperty(Main.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello World!"), 
                React.createElement("p", null, "このページはテストページだよ！")
                /* <TimeLine /> */
            )
        )
    }});


ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app') /* Reactが生成したコードを#mainに書き出す */
);
