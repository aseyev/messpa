(this.webpackJsonpmesspa=this.webpackJsonpmesspa||[]).push([[0],{38:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(17),r=a.n(s),o=(a(43),a(11)),l=a(12),m=a(14),i=a(13),p=a(15),u=a(9),d=function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper indigo darken-4"},c.a.createElement("div",{className:"container"},c.a.createElement("a",{href:"/messpa/",className:"brand-logo left"},"MesSPA"),c.a.createElement("ul",{className:"right hide-on-med-and-down"},c.a.createElement("li",null,c.a.createElement(u.c,{to:"/messpa/"},"Home")),c.a.createElement("li",null,c.a.createElement(u.c,{to:"/messpa/contact"},"Contact")),c.a.createElement("li",null,c.a.createElement(u.c,{to:"/messpa/about"},"About"))))))},h=a(10),E=a(19),v=a.n(E),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={posts:[]},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){console.log(t),e.setState({posts:t.data.slice(0,10)})}))}},{key:"render",value:function(){var e=this.state.posts,t=e.length?e.map((function(e){return c.a.createElement("div",{className:"post card",key:e.id},c.a.createElement("div",{className:"card-content"},c.a.createElement(u.b,{to:"/messpa/"+e.id},c.a.createElement("span",{className:"card-title"},e.title)),c.a.createElement("p",null,e.body)))})):c.a.createElement("div",{className:"center"},"No posts yet");return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"Home"),t)}}]),t}(n.Component),f=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"Contact"),c.a.createElement("p",null,"lorem ipsum"))},N=function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"center"},"About"),c.a.createElement("p",null,"lorem ipsum"))},j=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={post:null},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.post_id;v.a.get("https://jsonplaceholder.typicode.com/posts/"+t).then((function(t){e.setState({post:t.data})}))}},{key:"render",value:function(){var e=this.state.post?c.a.createElement("div",{className:"post"},c.a.createElement("h4",{className:"center"},this.state.post.title),c.a.createElement("p",null,this.state.post.body)):c.a.createElement("div",{className:"center"},"Loading post...");return c.a.createElement("div",{className:"container"},e)}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(d,null),c.a.createElement(h.c,null,c.a.createElement(h.a,{exact:!0,path:"/messpa/",component:b}),c.a.createElement(h.a,{path:"/messpa/contact",component:f}),c.a.createElement(h.a,{path:"/messpa/about",component:N}),c.a.createElement(h.a,{path:"/messpa/:post_id",component:j}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var g=a(20),O=a(37),w={posts:[]},k=Object(g.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w;arguments.length>1&&arguments[1];return e}));r.a.render(c.a.createElement(O.a,{store:k},c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.bdb44554.chunk.js.map