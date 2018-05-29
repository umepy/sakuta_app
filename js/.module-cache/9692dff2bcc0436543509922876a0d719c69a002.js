// import TimeLine from './component/timeline'

var ____Class4=React.Component;for(var ____Class4____Key in ____Class4){if(____Class4.hasOwnProperty(____Class4____Key)){Main[____Class4____Key]=____Class4[____Class4____Key];}}var ____SuperProtoOf____Class4=____Class4===null?null:____Class4.prototype;Main.prototype=Object.create(____SuperProtoOf____Class4);Main.prototype.constructor=Main;Main.__superConstructor__=____Class4;function Main(){"use strict";if(____Class4!==null){____Class4.apply(this,arguments);}}
    Object.defineProperty(Main.prototype,"render",{writable:true,configurable:true,value:function(){"use strict";
        return (
            React.createElement("div", null, 
                React.createElement("h1", null, "Hello World!"), 
                React.createElement("p", null, "このページはテストページだよ！"), 
                React.createElement(TimeLine, null)
            )
        )
    }});


ReactDOM.render(
  React.createElement(Main, null),
  document.getElementById('app') /* Reactが生成したコードを#mainに書き出す */
);
