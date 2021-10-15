(this["webpackJsonpepics-react-toolkit"]=this["webpackJsonpepics-react-toolkit"]||[]).push([[0],{119:function(e,t,n){},148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(40),i=n.n(c),s=(n(83),n(33)),o=n(61),u=n(13),j=(n(119),n(21)),l=n.n(j),d=n(31),b=n(200),p=n(209),h=n(210),x=n(211),O=n(207),f=n(16),m=n(96),v=n(97),g=n.n(v),y=n(98),k=n.n(y)()(g.a.create(),{maxRequests:130,perMilliseconds:6e4});function w(e){return C.apply(this,arguments)}function C(){return(C=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://api.epics.gg/api/v1/auth/login",{method:"POST",data:t});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data.data);case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e,t){return E.apply(this,arguments)}function E(){return(E=Object(d.a)(l.a.mark((function e(t,n){var a,r,c,i,s,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=1;case 2:return e.next=5,k("https://api.epics.gg/api/v1/packs",{method:"GET",headers:{"x-user-jwt":t},params:{categoryId:n,page:r}});case 5:if(c=e.sent,r+=1,200===c.status){e.next=9;break}return e.abrupt("break",15);case 9:if(0!==c.data.data.length){e.next=11;break}return e.abrupt("break",15);case 11:i=Object(m.a)(c.data.data);try{for(i.s();!(s=i.n()).done;)o=s.value,u=o,a.push(u)}catch(j){i.e(j)}finally{i.f()}e.next=2;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k("https://api.epics.gg/api/v1/spinner",{method:"GET",headers:{"x-user-jwt":t},params:{categoryId:n}});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.data.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var I=n(1);function P(){var e=Object(a.useState)({email:"",password:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),i=Object(u.a)(c,2),o=i[0],j=i[1],m=Object(a.useState)(!1),v=Object(u.a)(m,2),g=v[0],y=v[1],k=Object(f.g)(),C=Object(f.h)(),S=Me();function E(){return(E=Object(d.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),y(!0),e.next=4,w(n);case 4:(a=e.sent).jwt&&(r=C.state||{from:{pathname:"/"}},S.signin(a),k.replace(r),k.push("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(I.jsxs)("div",{className:"flex flex-col items-center justify-center py-12 px-12 max-w-xl m-auto",children:[Object(I.jsx)("h1",{className:"mb-2 text-xl text-center",children:"Welcome to Epics Toolkit v2"}),Object(I.jsxs)(O.a,{sx:{border:2,borderRadius:2,borderColor:"primary.main",p:4,width:"100%"},children:[Object(I.jsxs)("form",{className:"space-y-4 mb-4",onSubmit:function(e){return E.apply(this,arguments)},children:[Object(I.jsx)("div",{children:Object(I.jsx)(b.a,{id:"email",label:"E-Mail",type:"email",autoComplete:"email",fullWidth:!0,onChange:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{email:e.target.value}))},value:n.email,required:!0})}),Object(I.jsx)("div",{children:Object(I.jsx)(b.a,{id:"password",label:"Password",type:"password",autoComplete:"current-password",fullWidth:!0,onChange:function(e){return r(Object(s.a)(Object(s.a)({},n),{},{password:e.target.value}))},value:n.password,required:!0})}),Object(I.jsx)("div",{className:"mt-6",children:Object(I.jsxs)(p.a,{type:"submit",variant:"contained",size:"small",disabled:g,children:["Log In",g&&Object(I.jsx)(h.a,{color:"primary",size:12,sx:{ml:2}})]})})]}),Object(I.jsxs)("div",{className:"text-center",children:[Object(I.jsx)(x.a,{onClick:function(){return j(!o)},children:"Why is this needed?"}),Object(I.jsxs)("p",{hidden:o,children:["Your login is needed to send requests to the Epics API. Your login credentials will never be saved! All my code can be found on my\xa0",Object(I.jsx)(x.a,{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Fynngin/Epics-React-Toolkit",children:"GitHub"}),", if you want to verify yourself."]})]})]})]})}var M=n(213),N=n(214),q=n(215),z=n(216),D=n(217),F=n(218);function L(e){var t=e.spinner;return Object(I.jsx)(M.a,{children:Object(I.jsxs)(N.a,{children:[Object(I.jsx)(q.a,{children:Object(I.jsxs)(z.a,{children:[Object(I.jsx)(D.a,{children:"Item"}),Object(I.jsx)(D.a,{children:"Chance"})]})}),Object(I.jsx)(F.a,{children:t.items.map((function(e){return Object(I.jsxs)(z.a,{children:[Object(I.jsx)(D.a,{children:e.name}),Object(I.jsx)(D.a,{children:e.chance})]},e.id)}))})]})})}var B=n(101),G=n.n(B);function R(e){var t=e.spinner,n=Object(a.useState)([]),r=Object(u.a)(n,2),c=r[0],i=r[1];Object(a.useEffect)((function(){if(t.items){var e=t.items.map((function(e){return{name:e.name,data:[e.chance]}}));i(e)}}),[t]);var s={chart:{type:"bar",stacked:!0,foreColor:"#fff",background:"transparent"},theme:{mode:"dark"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:[""],labels:{formatter:function(e){return e+"%"}},max:100},yaxis:{title:{text:void 0}},tooltip:{theme:"dark",y:{formatter:function(e){return e+"%"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left"},noData:{text:"Spinner unavailable."},grid:{show:!1}};return Object(I.jsx)(G.a,{height:"100%",options:s,type:"bar",series:c})}var W=n(219),H=n(220),J=n(221),V=n(222),Y=n(223),_=n(224),K=n(189),Q=n(190),U=n(4),X=["expand"],Z=Object(U.a)((function(e){e.expand;var t=Object(o.a)(e,X);return Object(I.jsx)(W.a,Object(s.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function $(e){return e.items.sort((function(e,t){return t.chance-e.chance}))}function ee(){var e=Me(),t=Object(a.useState)({}),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),s=Object(u.a)(i,2),o=s[0],j=s[1];return Object(a.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A(e.user.jwt,1);case 2:(n=t.sent).items=$(n),c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(I.jsxs)(H.a,{children:[Object(I.jsx)(J.a,{title:"Spinner Odds",avatar:Object(I.jsx)(K.a,{})}),Object(I.jsx)(V.a,{children:Object(I.jsx)("div",{className:"h-60",children:Object(I.jsx)(R,{spinner:r})})}),Object(I.jsxs)(Y.a,{disableSpacing:!0,onClick:function(){return j(!o)},sx:{cursor:"pointer"},children:[Object(I.jsxs)("p",{style:{fontSize:"14px",marginLeft:"auto"},children:[o?"Hide":"Show"," Details"]}),Object(I.jsx)(Z,{expand:o,"aria-expanded":o,"aria-label":"show more",children:Object(I.jsx)(Q.a,{})})]}),Object(I.jsx)(_.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(I.jsx)(V.a,{children:Object(I.jsx)(L,{spinner:r})})})]})}var te=n(191),ne=n(206),ae=n(205),re=n(212),ce=n(225);function ie(e){var t=e.images.find((function(e){return"image"===e.name}));return t?t.url:e.images[0].url}function se(e){var t=e.pack;return Object(I.jsxs)(H.a,{variant:"outlined",sx:{width:"10em",height:"100%"},children:[Object(I.jsx)(J.a,{sx:{height:"4em"},avatar:Object(I.jsx)(ae.a,{variant:"square",src:"packTypeIcons/".concat(t.acquireType[0],".svg")}),title:Object(I.jsx)(re.a,{variant:"body1",sx:{opacity:1,fontSize:12},children:t.name})}),Object(I.jsx)(ce.a,{sx:{p:2},component:"img",height:"140",image:"https://cdn.epics.gg".concat(ie(t)),alt:"No pack preview found"}),Object(I.jsxs)(re.a,{variant:"body2",sx:{p:2,textAlign:"center"},children:["Stock: ",t.inventoryCount]})]})}function oe(e){var t=e.packs;return Object(I.jsx)(ne.a,{container:!0,spacing:1,justifyContent:"center",padding:2,children:t.map((function(e){return Object(I.jsx)(ne.a,{item:!0,children:Object(I.jsx)(se,{pack:e})},e.id)}))})}function ue(e){var t=new Date;return e.filter((function(e){return void 0!==e.purchaseEnd&&new Date(e.purchaseEnd)>t&&e.inventoryCount>0}))}function je(e){return e.sort((function(e,t){return t.inventoryCount-e.inventoryCount}))}function le(){var e=Me(),t=Object(a.useState)([]),n=Object(u.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=!0;return function(){var n=Object(d.a)(l.a.mark((function n(){var a,r,i;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,S(e.user.jwt,1);case 2:a=n.sent,r=ue(a),i=je(r),t&&c(i);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){t=!1}}),[e]),Object(I.jsxs)(H.a,{children:[Object(I.jsx)(J.a,{title:"Store Packs",avatar:Object(I.jsx)(te.a,{})}),Object(I.jsx)(V.a,{children:Object(I.jsx)(oe,{packs:r})})]})}var de=n(192),be=n(193),pe=n(194),he=n(195),xe=n(196),Oe=n(197),fe=n(198),me=n(199),ve=n(226),ge=n(227),ye=n(102),ke=n(202),we=n(78);function Ce(){var e=Object(f.g)(),t=function(t){return t===e.location.pathname},n=[{name:"Home",icon:Object(I.jsx)(de.a,{}),isActive:t("/"),path:"/",disabled:!1},{name:"Mint Search",icon:Object(I.jsx)(be.a,{}),isActive:t("/mintsearch"),path:"/mintsearch",disabled:!0},{name:"Mass List",icon:Object(I.jsx)(pe.a,{}),isActive:t("/masslist"),path:"/masslist",disabled:!0},{name:"Rush Games",icon:Object(I.jsx)(he.a,{}),isActive:t("/rushgames"),path:"/rushgames",disabled:!0},{name:"Rush Team Builder",icon:Object(I.jsx)(xe.a,{}),isActive:t("/rushteam"),path:"/rushteam",disabled:!0},{name:"Account Transfer",icon:Object(I.jsx)(Oe.a,{}),isActive:t("/accounttransfer"),path:"/accounttransfer",disabled:!1},{name:"Pack Opener",icon:Object(I.jsx)(fe.a,{}),isActive:t("/packopener"),path:"/packopener",disabled:!0}],r=function(t){var n=e.location.state||{from:{pathname:"/"}};e.replace(n),e.push(t.path)},c=Object(a.useState)(null),i=Object(u.a)(c,2),s=i[0],o=i[1],j=Boolean(s);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(we.BrowserView,{children:Object(I.jsx)(ne.a,{container:!0,spacing:1,children:n.map((function(e){return Object(I.jsx)(ne.a,{item:!0,children:Object(I.jsxs)(p.a,{variant:e.isActive?"contained":"outlined",disabled:e.disabled,onClick:function(){return r(e)},children:[e.icon,"\xa0",e.name]})},e.path)}))})}),Object(I.jsx)(we.MobileView,{children:Object(I.jsx)(ve.a,{position:"static",children:Object(I.jsxs)(ge.a,{children:[Object(I.jsx)(re.a,{variant:"body1",component:"div",sx:{flexGrow:1},children:"Menu"}),Object(I.jsx)(W.a,{color:"primary","aria-controls":"basic-menu","aria-haspopup":"true","aria-expanded":j?"true":void 0,onClick:function(e){o(e.currentTarget)},children:Object(I.jsx)(me.a,{})}),Object(I.jsx)(ye.a,{id:"nav-menu",anchorEl:s,open:j,onClose:function(){o(null)},children:n.map((function(e){return Object(I.jsxs)(ke.a,{disabled:e.disabled,onClick:function(){return r(e)},children:[e.icon,"\xa0",e.name]},e.path)}))})]})})})]})}function Se(){return Object(I.jsxs)(ne.a,{container:!0,spacing:2,p:2,children:[Object(I.jsx)(ne.a,{item:!0,xs:12,children:Object(I.jsx)(Ce,{})}),Object(I.jsx)(ne.a,{item:!0,lg:6,sm:12,children:Object(I.jsx)(le,{})}),Object(I.jsx)(ne.a,{item:!0,lg:6,sm:12,children:Object(I.jsx)(ee,{})})]})}var Ee=n(72);function Ae(){return Object(I.jsx)(ne.a,{container:!0,spacing:2,p:2,children:Object(I.jsx)(ne.a,{item:!0,xs:12,children:Object(I.jsx)(Ce,{})})})}var Te=["children"],Ie=Object(a.createContext)({user:{},signin:function(e){},signout:function(){}});function Pe(e){var t=e.children,n=function(){var e=Object(a.useState)({}),t=Object(u.a)(e,2),n=t[0],r=t[1];return{user:n,signin:function(e){r(e)},signout:function(){r({})}}}();return Object(I.jsx)(Ie.Provider,{value:n,children:t})}function Me(){return Object(a.useContext)(Ie)}function Ne(e){var t=e.children,n=Object(o.a)(e,Te),a=Me();return Object(I.jsx)(f.b,Object(s.a)(Object(s.a)({},n),{},{render:function(e){var n=e.location;return a.user.jwt?t:Object(I.jsx)(f.a,{to:{pathname:"/login",state:{from:n}}})}}))}var qe=function(){return Object(I.jsx)(Pe,{children:Object(I.jsx)(Ee.a,{children:Object(I.jsxs)(f.d,{children:[Object(I.jsx)(f.b,{path:"/login",exact:!0,render:function(){return Object(I.jsx)(P,{})}}),Object(I.jsx)(Ne,{path:"/accounttransfer",children:Object(I.jsx)(Ae,{})}),Object(I.jsx)(Ne,{path:"/",children:Object(I.jsx)(Se,{})})]})})})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,229)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))},De=n(204),Fe=n(103),Le=Object(Fe.a)({palette:{mode:"dark",primary:{main:"#2bc7c4"},secondary:{main:"#f50057"}}});i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(De.a,{theme:Le,children:Object(I.jsx)(qe,{})})}),document.getElementById("root")),ze()},83:function(e,t,n){}},[[148,1,2]]]);
//# sourceMappingURL=main.f5daa3d3.chunk.js.map