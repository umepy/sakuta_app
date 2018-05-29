var ____Class2=React.Component;for(var ____Class2____Key in ____Class2){if(____Class2.hasOwnProperty(____Class2____Key)){Main[____Class2____Key]=____Class2[____Class2____Key];}}var ____SuperProtoOf____Class2=____Class2===null?null:____Class2.prototype;Main.prototype=Object.create(____SuperProtoOf____Class2);Main.prototype.constructor=Main;Main.__superConstructor__=____Class2;function Main(){"use strict";if(____Class2!==null){____Class2.apply(this,arguments);}}
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
