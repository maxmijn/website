(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,t,n){e.exports=n(51)},36:function(e,t,n){},37:function(e,t,n){},47:function(e,t,n){e.exports=n.p+"static/media/vmc_white.269f57b0.png"},51:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),o=n.n(l),r=(n(36),n(37),n(7)),c=n(8),s=n(12),m=n(9),d=n(5),u=n(11),h=["#305f72","#f1d1b5","#f18c8e"],f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={color:"white"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.changeColor(),this.intervalId=setInterval(this.changeColor.bind(this),1e4)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"changeColor",value:function(){var e;do{e=h[Math.floor(Math.random()*h.length)]}while(this.state.color===e);this.setState({color:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("polygon",{className:"polygon",onClick:function(){return e.changeColor()},points:this.props.points,fill:this.state.color})}}]),t}(i.a.Component),w=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={widthSVG:0,widht:0,height:0},n.updateWindowDimensions=n.updateWindowDimensions.bind(Object(d.a)(n)),n.handleScroll=n.handleScroll.bind(Object(d.a)(n)),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.updateWindowDimensions(),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.updateWindowDimensions)}},{key:"handleScroll",value:function(e){var t=1-e.pageY/this.state.height,n=.5*this.state.width*t+.15*this.state.width;n>this.state.width/6&&this.setState({widthSVG:n})}},{key:"updateWindowDimensions",value:function(){var e=window.innerWidth,t=window.innerHeight,n=.5*e*(1-document.documentElement.scrollTop/t)+.15*e;n<e/6&&(n=e/6),this.setState({widthSVG:n,width:e,height:t})}},{key:"render",value:function(){return i.a.createElement("svg",{viewBox:"0 0 535 461",version:"1.1",xmlns:"http://www.w3.org/2000/svg",transform:"scale(0.5) scale(-1,1)",className:"Bird",style:{width:this.state.widthSVG}},i.a.createElement("title",null,"Group 2"),i.a.createElement("desc",null,"Created with Sketch."),i.a.createElement("g",{id:"aa",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},i.a.createElement("g",{id:"Artboard",transform:"translate(-208.000000, -158.000000)",fill:"#EFDBDB"},i.a.createElement("g",{id:"Group-2",transform:"translate(208.000000, 158.000000)"},i.a.createElement(f,{id:"Triangle-1",points:"175.952772 220.464415 391.932036 221.620081 236.237525 322.138315"}),i.a.createElement(f,{id:"Triangle-1",points:"283.46439 65.1214057 391.965441 221.612493 176.005427 220.464897"}),i.a.createElement(f,{id:"Triangle-1",points:"484.319244 75.4203767 534.201969 130.228604 449.688232 130.228604"}),i.a.createElement(f,{id:"Triangle-1",points:"81.0889439 65.4591757 176.060594 220.484209 0.541034879 66.2636372"}),i.a.createElement(f,{id:"Triangle-1",points:"333.819556 138.224225 484.365928 75.4014897 391.961603 221.607129"}),i.a.createElement(f,{id:"Triangle-1",points:"176.005427 220.464897 236.223976 322.123506 126.169387 460.333524"}),i.a.createElement(f,{id:"Triangle-1",points:"41.0328178 0.0142070083 283.470703 65.114563 176.020747 220.452305"})))))}}]),t}(i.a.Component),E=n(10),v=n(1);var p=function(){return i.a.createElement("div",{className:"App row"},i.a.createElement("div",{className:"Left col-sm-6"},i.a.createElement("h1",null,"Hi, my name is Max Mijnheer. "),i.a.createElement("h1",null,"I am a full-stack developer."),i.a.createElement(E.Link,{to:"firstCase",smooth:!0,className:"ArrowDownClick"},i.a.createElement(v.a,{class:"ArrowDown"}))),i.a.createElement("div",{className:"Right col-sm-6"},i.a.createElement(w,null)))},g=(n(47),n(17)),b=n(26),k=n.n(b),y=[{id:"1",options:[{value:2,label:"Start",trigger:"2"}]},{id:"2",message:"OMG ERIK",trigger:"3"},{id:"3",user:!0,trigger:"4"},{id:"4",message:"Hi {previousValue}, nice to meet you!",end:!0}],C={background:"#f5f8fb",fontFamily:"Helvetica Neue",headerBgColor:"#f18c8e",headerFontColor:"#fff",headerFontSize:"15px",botBubbleColor:"#f18c8e",botFontColor:"#fff",userBubbleColor:"#fff",userFontColor:"#4a4a4a"};var S=function(){return i.a.createElement(E.Element,{name:"firstCase"},i.a.createElement("div",{className:"SecondPage row"},i.a.createElement("div",{className:"Left col-sm-6"},i.a.createElement("h1",null,"Me, Myself and I"),i.a.createElement("p",null," Would you like to know more about me? Feel free to chat with my bot!")),i.a.createElement("div",{className:"Chatbot col-sm-6 grid-container"},i.a.createElement("div",{className:"ChatbotBackground"}),i.a.createElement(g.ThemeProvider,{theme:C},i.a.createElement(k.a,{style:{borderRadius:0},steps:y})))))};var j=function(){return i.a.createElement("div",null,i.a.createElement("a",{href:"//https://www.linkedin.com/in/max-mijnheer-5612ab114/"},i.a.createElement(v.e,null)),i.a.createElement("a",{href:"//https://github.com/maxmijn"},i.a.createElement(v.c,{className:"Social"})),i.a.createElement("a",{href:"//https://www.instagram.com/maxmijn/"},i.a.createElement(v.d,{className:"Social"})),i.a.createElement("a",{href:"mailto:max.mijnheer@gmail.com"},i.a.createElement(v.b,{className:"Social"})))};var N=function(){return i.a.createElement("div",{className:"Footer"},i.a.createElement("p",null,"\xa9 2019 Max Mijnheer"),i.a.createElement(j,null))};var O=function(){return i.a.createElement("div",null,i.a.createElement(p,null),i.a.createElement(S,null),i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(50);o.a.render(i.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.d41e487b.chunk.js.map