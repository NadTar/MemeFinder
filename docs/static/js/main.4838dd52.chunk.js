(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{146:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(26),o=n.n(i),c=(n(58),n(27)),s=n.n(c),l=n(39),m=n(40),u=n(41),h=n(45),p=n(42),f=n(23),d=n(44),g=(n(60),n(155)),v=n(156),E=n(154),y=n(148),w=n(43),b=n.n(w),k=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={memes:[],loading:!1,text:""},n.getMemes=function(){var e=Object(l.a)(s.a.mark(function e(t){var a,r,i,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t.preventDefault(),n.setState({loading:!0}),a=document.querySelector("main");a.firstChild;)a.removeChild(a.firstChild);return"khF3tS3mArkkgXfLFPgI4YIKIEatC5Ta",r="http://api.giphy.com/v1/gifs/search?q=".concat(n.state.text,"&api_key=").concat("khF3tS3mArkkgXfLFPgI4YIKIEatC5Ta"),e.next=8,fetch(r);case 8:return i=e.sent,e.next=11,i.json();case 11:o=e.sent,setTimeout(function(){this.setState({memes:o.data,loading:!1,text:""})}.bind(Object(f.a)(n)),600);case 13:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.memes,a=t.loading,i=t.text;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"MemeFinder"),r.a.createElement("form",{className:"App-header",onSubmit:this.getMemes},r.a.createElement(g.a,{display:"flex",justifyContent:"center",alignItems:"center",height:60,width:700,background:"overlay",hoverElevation:4,className:"container"},r.a.createElement(v.a,{value:i,width:"90%",height:40,placeholder:"Search for Memes here...",onChange:function(t){return e.setState({text:t.target.value})}}),r.a.createElement(E.a,{appearance:"primary",iconAfter:"arrow-right",disabled:a||!i,type:"submit",intent:"none",isLoading:a,style:{position:"absolute",top:"14px",left:"calc(100% - 77px)",background:"aliceblue",display:"flex",justifyContent:"center",alignItems:"center",color:"black"}},function(e){if(!e)return r.a.createElement("p",{style:{display:"flex",justifyContent:"center",alignItems:"center",margin:"0px"}},"Go")}(a)))),r.a.createElement("main",null,a&&r.a.createElement(y.a,{size:64}),n.map(function(e){return function(e){return r.a.createElement(b.a,{transitionName:"fade",transitionAppear:!0,transitionAppearTimeout:500,transitionEnterTimeout:300,transitionEnter:!0,transitionLeave:!1,key:e.id},r.a.createElement(g.a,{hoverElevation:3},r.a.createElement(x,{src:e.images.fixed_height.url})))}(e)})))}}]),t}(r.a.Component);function x(e){var t=e.src;return r.a.createElement("div",{className:"meme",onClick:function(){return window.open(t,"_blank")}},r.a.createElement("img",{alt:"meme",src:t}))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},52:function(e,t,n){e.exports=n(146)},58:function(e,t,n){},60:function(e,t,n){}},[[52,1,2]]]);
//# sourceMappingURL=main.4838dd52.chunk.js.map