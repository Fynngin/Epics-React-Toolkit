(this["webpackJsonpepics-react-toolkit"]=this["webpackJsonpepics-react-toolkit"]||[]).push([[0],{101:function(e,t,n){},120:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},136:function(e,t,n){},137:function(e,t,n){},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},141:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),s=n.n(c),i=(n(71),n(3)),u=n(36),o=n(6),j=(n(101),n(10)),l=n.n(j),d=n(16),b=n(18),p=n(15),f=n(21),h=n(86),O=n.n(h),x=n(87),m=n.n(x)()(O.a.create(),{maxRequests:130,perMilliseconds:6e4});function v(e){return g.apply(this,arguments)}function g(){return(g=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/auth/login",{method:"POST",data:t});case 2:if(200!==(n=e.sent).status){e.next=5;break}return e.abrupt("return",n.data.data);case 5:return e.abrupt("return",{});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,t){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(l.a.mark((function e(t,n){var a,r,c,s,i,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=[],r=1;case 2:return e.next=5,m("https://api.epics.gg/api/v1/packs",{method:"GET",headers:{"x-user-jwt":t},params:{categoryId:n,page:r}});case 5:if(c=e.sent,r+=1,200===c.status){e.next=9;break}return e.abrupt("break",15);case 9:if(0!==c.data.data.length){e.next=11;break}return e.abrupt("break",15);case 11:s=Object(f.a)(c.data.data);try{for(s.s();!(i=s.n()).done;)u=i.value,o=u,a.push(o)}catch(j){s.e(j)}finally{s.f()}e.next=2;break;case 15:return e.abrupt("return",a);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,t){return S.apply(this,arguments)}function S(){return(S=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/spinner",{method:"GET",headers:{"x-user-jwt":t},params:{categoryId:n}});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.data.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,t){return N.apply(this,arguments)}function N(){return(N=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/users/search",{method:"GET",headers:{"x-user-jwt":t},params:{username:n}});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",a.data.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,n){return T.apply(this,arguments)}function T(){return(T=Object(d.a)(l.a.mark((function e(t,n,a){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/collections/users/".concat(n,"/user-summary"),{method:"GET",headers:{"x-user-jwt":t},params:{categoryId:a}});case 2:if(200===(r=e.sent).status){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",r.data.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e,t,n,a,r){return I.apply(this,arguments)}function I(){return(I=Object(d.a)(l.a.mark((function e(t,n,a,r,c){var s,i,u,o,j,d,b,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/collections/users/".concat(n,"/").concat(r,"ids"),{method:"GET",headers:{"x-user-jwt":t},params:{collectionId:a,categoryId:c}});case 2:if(200===(s=e.sent).status){e.next=5;break}return e.abrupt("return",[]);case 5:if(i=[],"card"===r){u=Object(f.a)(s.data.data);try{for(u.s();!(o=u.n()).done;)j=o.value,i=[].concat(Object(p.a)(i),Object(p.a)(j.cardIds))}catch(l){u.e(l)}finally{u.f()}}else{d=Object(f.a)(s.data.data);try{for(d.s();!(b=d.n()).done;)h=b.value,i=[].concat(Object(p.a)(i),Object(p.a)(h.stickerIds))}catch(l){d.e(l)}finally{d.f()}}return e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t,n){return D.apply(this,arguments)}function D(){return(D=Object(d.a)(l.a.mark((function e(t,n,a){var r,c,s,i,u,o,j;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=[],c=1;case 2:return e.next=5,m("https://api.epics.gg/api/v1/trade",{method:"GET",headers:{"x-user-jwt":t},params:{page:c,categoryId:n,status:"open"}});case 5:if(s=e.sent,c+=1,200===s.status){e.next=9;break}return e.abrupt("break",32);case 9:if(0!==s.data.data.count){e.next=11;break}return e.abrupt("break",32);case 11:i=Object(f.a)(s.data.data.trades),e.prev=12,i.s();case 14:if((u=i.n()).done){e.next=22;break}if(o=u.value,(j=o).offeredBy!==a){e.next=19;break}return e.abrupt("continue",20);case 19:r.push(j);case 20:e.next=14;break;case 22:e.next=27;break;case 24:e.prev=24,e.t0=e.catch(12),i.e(e.t0);case 27:return e.prev=27,i.f(),e.finish(27);case 30:e.next=2;break;case 32:return e.abrupt("return",r);case 33:case"end":return e.stop()}}),e,null,[[12,24,27,30]])})))).apply(this,arguments)}function P(e,t){return L.apply(this,arguments)}function L(){return(L=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/showcase/".concat(n,"/shelves"),{method:"GET",headers:{"x-user-jwt":t}});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",a.data.data.showcases);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return G.apply(this,arguments)}function G(){return(G=Object(d.a)(l.a.mark((function e(t,n){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("https://api.epics.gg/api/v1/showcase/shelf/".concat(n.id),{method:"PATCH",headers:{"x-user-jwt":t},data:n});case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.data.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(120);var q=n(1);function B(e){var t=e.text,n=e.children,a=e.type,r=e.className,c=e.onClick;return Object(q.jsxs)("button",{className:"baseBtn ".concat(r),type:a,onClick:function(){c&&c()},children:[Object(q.jsx)("p",{children:t}),n]})}n(122);function z(e){var t=e.title,n=e.description,a=e.className,r=e.children,c=e.loading;return Object(q.jsxs)("div",{className:"baseContainer ".concat(a," ").concat(c?"loading":""),children:[t?Object(q.jsx)("h2",{className:"baseContainerTitle",children:t}):Object(q.jsx)(q.Fragment,{}),n?Object(q.jsx)("p",{className:"baseContainerDescription",children:n}):Object(q.jsx)(q.Fragment,{}),t?Object(q.jsx)("div",{className:"dividerLine"}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)("div",{className:"containerContents",children:r})]})}n(123);function M(){var e=Object(a.useState)({email:"",password:""}),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!0),s=Object(o.a)(c,2),u=s[0],j=s[1],p=Object(a.useState)(!1),f=Object(o.a)(p,2),h=f[0],O=f[1],x=Object(b.g)(),m=Object(b.h)(),g=Je();function y(){return(y=Object(d.a)(l.a.mark((function e(t){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,v(n);case 4:(a=e.sent).jwt&&(r=m.state||{from:{pathname:"/"}},g.signin(a),x.replace(r),x.push("/"));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(q.jsxs)("div",{className:"flex flex-col items-center justify-center py-12 px-12 max-w-xl m-auto",children:[Object(q.jsx)("h1",{className:"mb-2 text-xl text-center",children:"Welcome to Epics Toolkit v2"}),Object(q.jsxs)(z,{className:h?"loading":"",title:"Login",description:"Log in with your Epics Account.",children:[Object(q.jsxs)("form",{className:"space-y-4 mb-4",onSubmit:function(e){return y.apply(this,arguments)},children:[Object(q.jsx)("div",{children:Object(q.jsx)("input",{id:"email",type:"email",autoComplete:"email",placeholder:"E-Mail",className:"loginInput",onChange:function(e){return r(Object(i.a)(Object(i.a)({},n),{},{email:e.target.value}))},value:n.email,required:!0})}),Object(q.jsx)("div",{children:Object(q.jsx)("input",{id:"password",type:"password",autoComplete:"current-password",placeholder:"Password",className:"loginInput",onChange:function(e){return r(Object(i.a)(Object(i.a)({},n),{},{password:e.target.value}))},value:n.password,required:!0})}),Object(q.jsx)("div",{className:"mt-6",children:Object(q.jsx)(B,{type:"submit",children:"Log In"})})]}),Object(q.jsxs)("div",{className:"text-center",children:[Object(q.jsx)("span",{className:"infoTextLink",onClick:function(){return j(!u)},children:"Why is this needed?"}),Object(q.jsxs)("p",{hidden:u,children:["Your login is needed to send requests to the Epics API. Your login credentials will never be saved! All my code can be found on my\xa0",Object(q.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/Fynngin/Epics-React-Toolkit",children:"GitHub"}),", if you want to verify yourself."]})]})]})]})}var H=n(172),U=n(173),Y=n(174),J=n(175),W=n(176),_=n(177);function K(e){var t=e.spinner;return Object(q.jsx)(H.a,{children:Object(q.jsxs)(U.a,{children:[Object(q.jsx)(Y.a,{children:Object(q.jsxs)(J.a,{children:[Object(q.jsx)(W.a,{children:"Item"}),Object(q.jsx)(W.a,{children:"Chance"})]})}),Object(q.jsx)(_.a,{children:t.items.map((function(e){return Object(q.jsxs)(J.a,{children:[Object(q.jsx)(W.a,{children:e.name}),Object(q.jsx)(W.a,{children:e.chance})]},e.id)}))})]})})}var Q=n(89),V=n.n(Q);function X(e){var t=e.spinner,n=Object(a.useState)([]),r=Object(o.a)(n,2),c=r[0],s=r[1];Object(a.useEffect)((function(){if(t.items){var e=t.items.map((function(e){return{name:e.name,data:[e.chance]}}));s(e)}}),[t]);var i={chart:{type:"bar",stacked:!0,foreColor:"#fff",background:"transparent"},theme:{mode:"dark"},plotOptions:{bar:{horizontal:!0}},stroke:{width:1,colors:["#fff"]},xaxis:{categories:[""],labels:{formatter:function(e){return e+"%"}},max:100},yaxis:{title:{text:void 0}},tooltip:{theme:"dark",y:{formatter:function(e){return e+"%"}}},fill:{opacity:1},legend:{position:"top",horizontalAlign:"left"},noData:{text:"Spinner unavailable."},grid:{show:!1}};return Object(q.jsx)(V.a,{height:"100%",options:i,type:"bar",series:c})}var Z=n(165),$=n(168),ee=n(178),te=n(180),ne=n(181),ae=n(166),re=n(162),ce=n(163),se=n(11),ie=["expand"],ue=Object(se.a)((function(e){e.expand;var t=Object(u.a)(e,ie);return Object(q.jsx)(Z.a,Object(i.a)({},t))}))((function(e){var t=e.theme;return{transform:e.expand?"rotate(180deg)":"rotate(0deg)",marginLeft:"auto",transition:t.transitions.create("transform",{duration:t.transitions.duration.shortest})}}));function oe(e){return e.items.sort((function(e,t){return t.chance-e.chance}))}function je(){var e=Je(),t=Object(a.useState)({}),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),i=Object(o.a)(s,2),u=i[0],j=i[1];return Object(a.useEffect)((function(){(function(){var t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e.user.jwt,1);case 2:(n=t.sent).items=oe(n),c(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(q.jsxs)($.a,{children:[Object(q.jsx)(ee.a,{title:"Spinner Odds",avatar:Object(q.jsx)(re.a,{})}),Object(q.jsx)(te.a,{children:Object(q.jsx)("div",{className:"h-60",children:Object(q.jsx)(X,{spinner:r})})}),Object(q.jsxs)(ne.a,{disableSpacing:!0,onClick:function(){return j(!u)},sx:{cursor:"pointer"},children:[Object(q.jsxs)("p",{style:{fontSize:"14px",marginLeft:"auto"},children:[u?"Hide":"Show"," Details"]}),Object(q.jsx)(ue,{expand:u,"aria-expanded":u,"aria-label":"show more",children:Object(q.jsx)(ce.a,{})})]}),Object(q.jsx)(ae.a,{in:u,timeout:"auto",unmountOnExit:!0,children:Object(q.jsx)(te.a,{children:Object(q.jsx)(K,{spinner:r})})})]})}var le=n(164),de=n(171),be=n(170),pe=n(179),fe=n(182);function he(e){var t=e.images.find((function(e){return"image"===e.name}));return t?t.url:e.images[0].url}function Oe(e){var t=e.pack;return Object(q.jsxs)($.a,{variant:"outlined",sx:{width:"10em",height:"100%"},children:[Object(q.jsx)(ee.a,{sx:{height:"4em"},avatar:Object(q.jsx)(be.a,{variant:"square",src:"".concat("/Epics-React-Toolkit","/packTypeIcons/").concat(t.acquireType[0],".svg")}),title:Object(q.jsx)(pe.a,{variant:"body1",sx:{opacity:1,fontSize:12},children:t.name})}),Object(q.jsx)(fe.a,{sx:{p:2},component:"img",height:"140",image:"https://cdn.epics.gg".concat(he(t)),alt:"No pack preview found"}),Object(q.jsxs)(pe.a,{variant:"body2",sx:{p:2,textAlign:"center"},children:["Stock: ",t.inventoryCount]})]})}function xe(e){var t=e.packs;return Object(q.jsx)(de.a,{container:!0,spacing:1,justifyContent:"center",padding:2,children:t.map((function(e){return Object(q.jsx)(de.a,{item:!0,children:Object(q.jsx)(Oe,{pack:e})},e.id)}))})}function me(e){var t=new Date;return e.filter((function(e){return void 0!==e.purchaseEnd&&new Date(e.purchaseEnd)>t&&e.inventoryCount>0}))}function ve(e){return e.sort((function(e,t){return t.inventoryCount-e.inventoryCount}))}function ge(){var e=Je(),t=Object(a.useState)([]),n=Object(o.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=!0;return function(){var n=Object(d.a)(l.a.mark((function n(){var a,r,s;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,y(e.user.jwt,1);case 2:a=n.sent,r=me(a),s=ve(r),t&&c(s);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()(),function(){t=!1}}),[e]),Object(q.jsxs)($.a,{children:[Object(q.jsx)(ee.a,{title:"Store Packs",avatar:Object(q.jsx)(le.a,{})}),Object(q.jsx)(te.a,{children:Object(q.jsx)(xe,{packs:r})})]})}function ye(){return Object(q.jsxs)(de.a,{container:!0,spacing:2,p:2,children:[Object(q.jsx)(de.a,{item:!0,lg:6,sm:12,children:Object(q.jsx)(ge,{})}),Object(q.jsx)(de.a,{item:!0,lg:6,sm:12,children:Object(q.jsx)(je,{})})]})}var ke=n(65),we=(n(129),n(130),n(58)),Se=n(32);function Ce(e){var t=Object(a.useState)(""),n=Object(o.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)([]),i=Object(o.a)(s,2),u=i[0],j=i[1],b=Object(a.useState)({}),p=Object(o.a)(b,2),f=p[0],h=p[1],O=Object(a.useState)(!1),x=Object(o.a)(O,2),m=x[0],v=x[1],g=Je();function y(){return k.apply(this,arguments)}function k(){return(k=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(g.user.jwt,r);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){u.length>0?v(!0):v(!1)}),[u]);var w=Object(a.useRef)(null);return Object(a.useEffect)((function(){return window.addEventListener("click",(function(e){w.current&&w.current.contains(e.target)&&u.length>0?v(!0):v(!1)}))})),Object(q.jsx)(z,{title:"Select Account",description:"This is where your items will be sent.",children:Object(q.jsxs)("div",{className:"accSelectorContainer",children:[Object(q.jsxs)("form",{onSubmit:y,className:"searchForm",children:[Object(q.jsx)("input",{autoComplete:"off",ref:w,id:"userSearchInput",className:"searchInput",placeholder:"Search users...",onChange:function(e){c(e.target.value)}}),m?Object(q.jsx)("ul",{className:"dropdown",children:u.map((function(t){return Object(q.jsx)("li",{className:"dropdownItem",onClick:function(){return function(t){h(t),e.onUserSelect(t),v(!1)}(t)},children:t.username},t.id)}))}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)(B,{type:"submit",onClick:y,className:"userSearchBtn",children:Object(q.jsx)(we.a,{icon:Se.f})})]}),f.id?Object(q.jsxs)("div",{className:"selectedUser",children:[Object(q.jsx)("img",{className:"avatar",src:"https://cdn.epics.gg".concat(f.avatar),alt:"User Avatar"}),Object(q.jsx)("p",{children:f.username})]}):Object(q.jsx)("p",{className:"infoText",children:"No user selected."})]})})}n(133);function Ne(e){var t=e.max,n=e.progress,r=e.children,c=e.className,s=Object(a.useState)("".concat(n/t*100)),i=Object(o.a)(s,2),u=i[0],j=i[1];return Object(a.useEffect)((function(){j("".concat(n/t*100,"%"))}),[t,n]),Object(q.jsx)(q.Fragment,{children:Object(q.jsx)("div",{className:"progressContainer ".concat(c),children:Object(q.jsx)("div",{style:{width:u},id:"progressBar",children:r})})})}n(134);function Ee(e){var t=e.type,n=e.onChange,a=e.label,r=e.name;return Object(q.jsxs)("label",{className:"checkbox",htmlFor:"check-".concat(a),children:[Object(q.jsx)("input",{id:"check-".concat(a),type:t,defaultChecked:!0,onClick:n,value:a,name:r}),a]},a)}n(135);function Te(e){var t=e.onChange;function n(){var e=Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));t(e.map((function(e){return e.value})))}return Object(q.jsx)(z,{title:"Filter Seasons",description:"Change which Seasons you want to include in the transfer.",children:Object(q.jsx)("div",{className:"seasonsContainer",children:["Founders Edition","2018","2019","2020","2021"].map((function(e){return Object(q.jsx)(Ee,{type:"checkbox",label:e,onChange:n},e)}))})})}var Ae;n(136);function Ie(e){var t=e.onChange;function n(e){t("Send"===e.target.value?Ae.SEND:Ae.ACCEPT)}return Object(q.jsx)(z,{title:"Change Mode",description:"Do you want to send or accept Trades?",children:Object(q.jsxs)("div",{className:"modeContainer",children:[Object(q.jsx)(Ee,{type:"radio",onChange:n,label:"Send",name:"mode"}),Object(q.jsx)(Ee,{type:"radio",onChange:n,label:"Accept",name:"mode"})]})})}function Fe(e){var t=e.user,n="Please select a user first.",r=Object(a.useState)(n),c=Object(o.a)(r,2),s=c[0],i=c[1],u=Object(a.useState)([]),j=Object(o.a)(u,2),b=j[0],p=j[1],f=Object(a.useState)(!1),h=Object(o.a)(f,2),O=h[0],x=h[1],m=Je(),v=Object(a.useCallback)(Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,F(m.user.jwt,1,m.user.id);case 3:t=e.sent,p(t),x(!1);case 6:case"end":return e.stop()}}),e)}))),[m]),g=Object(a.useCallback)((function(){i("Confirm to accept all Trades from ".concat(t)),v()}),[t,v]);return Object(a.useEffect)((function(){t?g():i(n)}),[t,g]),Object(q.jsx)(z,{title:"Accept Trades",description:s,loading:O,children:Object(q.jsxs)("div",{children:[Object(q.jsx)("h3",{children:"Incoming Trades:"}),Object(q.jsx)("p",{children:b.length})]})})}function De(){var e=Object(a.useState)(Ae.SEND),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({}),s=Object(o.a)(c,2),i=s[0],u=s[1],j=Object(a.useState)([]),b=Object(o.a)(j,2),h=b[0],O=b[1],x=Object(a.useState)(0),m=Object(o.a)(x,2),v=m[0],g=m[1],y=Object(a.useState)(0),k=Object(o.a)(y,2),w=k[0],S=k[1],C=Object(a.useState)([]),N=Object(o.a)(C,2),T=N[0],I=N[1],F=Je();function D(){return(D=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(F.user.jwt,F.user.id,1);case 2:t=e.sent,S(t.length),O([]),g(0),n=[],t.forEach(function(){var e=Object(d.a)(l.a.mark((function e(t){var a,r,c,s,i,u,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.count&&T.some((function(e){return t.collection.properties.seasons.includes(e)}))){e.next=3;break}return g((function(e){return e+1})),e.abrupt("return");case 3:a=Object(f.a)(t.collection.properties.entity_types),e.prev=4,a.s();case 6:if((r=a.n()).done){e.next=17;break}if("card"===(c=r.value)||"sticker"===c){e.next=10;break}return e.abrupt("continue",15);case 10:return e.next=12,A(F.user.jwt,F.user.id,t.collection.id,c,1);case 12:s=e.sent,i=Object(f.a)(s);try{for(i.s();!(u=i.n()).done;)o=u.value,n.push({id:o,type:c})}catch(j){i.e(j)}finally{i.f()}case 15:e.next=6;break;case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(4),a.e(e.t0);case 22:return e.prev=22,a.f(),e.finish(22);case 25:O([].concat(Object(p.a)(h),n));case 26:case"end":return e.stop()}}),e,null,[[4,19,22,25]])})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){return g((function(e){return e+1}))}),[h]),Object(q.jsxs)("div",{className:"accTransferContainer",children:[Object(q.jsx)(Ie,{onChange:function(e){r(e)}}),w>0&&v<w?Object(q.jsx)(Ne,{max:w,progress:v}):Object(q.jsx)(q.Fragment,{}),Object(q.jsx)(Ce,{onUserSelect:function(e){return function(e){u(e)}(e)}}),n===Ae.SEND?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Te,{onChange:function(e){I(e)}}),Object(q.jsx)(B,{onClick:function(){return function(){return D.apply(this,arguments)}()},children:"Start Transfer"})]}):Object(q.jsx)(q.Fragment,{children:Object(q.jsx)(Fe,{user:i.username})}),Object(q.jsx)("p",{children:h.length})]})}!function(e){e[e.SEND=0]="SEND",e[e.ACCEPT=1]="ACCEPT"}(Ae||(Ae={}));n(137);function Pe(){var e=Object(b.g)(),t=Object(a.useRef)(null),n=function(t){return t===e.location.pathname},r=[{name:"Home",icon:Se.e,isActive:n("/"),path:"/",disabled:!1},{name:"Mint Search",icon:Se.f,isActive:n("/mintsearch"),path:"/mintsearch",disabled:!0},{name:"Mass List",icon:Se.g,isActive:n("/masslist"),path:"/masslist",disabled:!0},{name:"Rush Games",icon:Se.d,isActive:n("/rushgames"),path:"/rushgames",disabled:!0},{name:"Rush Team Builder",icon:Se.h,isActive:n("/rushteam"),path:"/rushteam",disabled:!0},{name:"Account Transfer",icon:Se.b,isActive:n("/accounttransfer"),path:"/accounttransfer",disabled:!1},{name:"Pack Opener",icon:Se.a,isActive:n("/packopener"),path:"/packopener",disabled:!0},{name:"Showcase",icon:Se.c,isActive:n("/showcase"),path:"/showcase",disabled:!1}];return Object(q.jsxs)("header",{children:[Object(q.jsx)("input",{ref:t,type:"checkbox",id:"navToggle",className:"navToggle"}),Object(q.jsx)("nav",{children:Object(q.jsx)("ul",{children:r.map((function(n){return Object(q.jsx)("li",{onClick:function(){return function(n){var a=e.location.state||{from:{pathname:"/"}};e.replace(a),e.push(n.path),t.current&&(t.current.checked=!1)}(n)},title:n.name,children:Object(q.jsx)("button",{children:n.icon?Object(q.jsxs)("div",{className:"routeContainer",children:[Object(q.jsx)(we.a,{className:n.isActive?"activeRoute":"",icon:n.icon,size:"lg"}),Object(q.jsx)("h2",{className:"routeLabel",children:n.name})]}):n.name})},n.path)}))})}),Object(q.jsx)("label",{htmlFor:"navToggle",className:"navToggleLabel",children:Object(q.jsx)("span",{})})]})}var Le=n(14),Re=n(17),Ge=(n(138),n(41)),qe=n(7),Be=(n(139),Object(a.forwardRef)((function(e,t){return Object(q.jsx)("img",Object(i.a)(Object(i.a)({},e.style),{},{ref:t,src:e.card.images.size402,className:"cardImage",alt:"Showcase Item"}))})));n(140);function ze(e){var t=Object(Ge.d)({id:e.id}),n=t.attributes,a=t.listeners,r=t.setNodeRef,c=t.transform,s=t.transition,u={transform:qe.a.Transform.toString(c),transition:s};return Object(q.jsxs)("div",{style:u,ref:r,className:"sortableItemContainer",children:[Object(q.jsx)(Be,{card:e.card}),Object(q.jsx)("div",Object(i.a)(Object(i.a)(Object(i.a)({},n),a),{},{className:"dragHandle",children:Object(q.jsx)("div",{className:"dot"})}))]})}function Me(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),s=Object(o.a)(c,2),u=s[0],j=s[1],b=Object(a.useState)(null),p=Object(o.a)(b,2),h=p[0],O=p[1],x=":;:",m=Je(),v=Object(Re.o)(Object(Re.n)(Re.e),Object(Re.n)(Re.d,{coordinateGetter:Ge.c}));function g(){return(g=Object(d.a)(l.a.mark((function e(){var t,a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,a=Object.values(n);case 1:if(!(t<a.length)){e.next=9;break}return r=a[t],c=y(r),e.next=6,R(m.user.jwt,c);case 6:t++,e.next=1;break;case 9:j(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return{id:e.id,main:e.main,name:e.name,order:e.order,visible:e.visible,cardIds:e.cards.map((function(e){return e.id})),stickerIds:e.stickers.map((function(e){return e.id}))}}return Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P(m.user.jwt,m.user.id);case 2:t=e.sent,n=Object(f.a)(t);try{for(c=function(){var e=a.value;r((function(t){return Object(i.a)(Object(i.a)({},t),{},Object(Le.a)({},e.name,e))}))},n.s();!(a=n.n()).done;)c()}catch(s){n.e(s)}finally{n.f()}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]),Object(q.jsxs)("div",{className:"showcasePage",children:[u?Object(q.jsxs)("div",{className:"btnRow",children:[Object(q.jsx)("p",{children:"You have unsaved changes!"}),Object(q.jsx)(B,{text:"Apply Changes",onClick:function(){return g.apply(this,arguments)}})]}):null,Object(q.jsx)(Re.a,{onDragEnd:function(e){var t=e.active,a=e.over;if(a&&t.id!==a.id){var c=t.id.split(x),s=Object(o.a)(c,2),u=s[0],l=s[1],d=a.id.split(x),b=Object(o.a)(d,2),p=b[0],f=b[1],h=n[u].cards.findIndex((function(e){return e.id.toString()===l})),m=n[p].cards.findIndex((function(e){return e.id.toString()===f})),v=n[u];if(u===p)v.cards=Object(Ge.b)(v.cards,h,m),r((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(Le.a)({},p,v))}));else{var g=n[p];g.cards.splice(m,0,v.cards[h]),v.cards.splice(h,1),r((function(e){var t;return Object(i.a)(Object(i.a)({},e),{},(t={},Object(Le.a)(t,u,v),Object(Le.a)(t,p,g),t))}))}j(!0),O(null)}},onDragStart:function(e){var t=function(e){var t=e.split(x),a=Object(o.a)(t,2),r=a[0],c=a[1];return n[r].cards.find((function(e){return e.id.toString()===c}))}(e.active.id);t&&O(t)},sensors:v,collisionDetection:Re.f,children:Object.entries(n).map((function(e){var t,n=Object(o.a)(e,2),a=n[0],r=n[1];return Object(q.jsxs)(z,{title:a,children:[Object(q.jsx)(Ge.a,{items:r.cards.map((function(e){return"".concat(a).concat(x).concat(e.id)})),children:Object(q.jsx)("div",{className:"showcaseContainer",children:null===(t=r.cards)||void 0===t?void 0:t.map((function(e){return Object(q.jsx)(ze,{card:e,id:"".concat(a).concat(x).concat(e.id)},e.id)}))})}),Object(q.jsx)(Re.b,{dropAnimation:{easing:"ease",duration:250,dragSourceOpacity:1},children:h?Object(q.jsx)(Be,{id:"".concat(a).concat(x).concat(h.id),card:h}):null})]},a)}))})]})}var He=["children"],Ue=Object(a.createContext)({user:{},signin:function(e){},signout:function(){}});function Ye(e){var t=e.children,n=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],r=t[1];return{user:n,signin:function(e){var t=e.user;t.jwt=e.jwt,r(t)},signout:function(){r({})}}}();return Object(q.jsx)(Ue.Provider,{value:n,children:t})}function Je(){return Object(a.useContext)(Ue)}function We(e){var t=e.children,n=Object(u.a)(e,He),a=Je();return Object(q.jsx)(b.b,Object(i.a)(Object(i.a)({},n),{},{render:function(e){var n=e.location;return a.user.jwt?Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)(Pe,{}),Object(q.jsx)("div",{className:"componentContainer",children:t})]}):Object(q.jsx)(b.a,{to:{pathname:"/login",state:{from:n}}})}}))}var _e=function(){return Object(q.jsx)(Ye,{children:Object(q.jsx)(ke.a,{children:Object(q.jsxs)(b.d,{children:[Object(q.jsx)(b.b,{path:"/login",exact:!0,render:function(){return Object(q.jsx)(M,{})}}),Object(q.jsx)(We,{path:"/accounttransfer",children:Object(q.jsx)(De,{})}),Object(q.jsx)(We,{path:"/showcase",children:Object(q.jsx)(Me,{})}),Object(q.jsx)(We,{path:"/",children:Object(q.jsx)(ye,{})})]})})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),c(e),s(e)}))},Qe=n(169),Ve=n(90),Xe=Object(Ve.a)({palette:{mode:"dark",primary:{main:"#2bc7c4"},secondary:{main:"#f50057"}}});s.a.render(Object(q.jsx)(r.a.StrictMode,{children:Object(q.jsx)(Qe.a,{theme:Xe,children:Object(q.jsx)(_e,{})})}),document.getElementById("root")),Ke()},71:function(e,t,n){}},[[141,1,2]]]);
//# sourceMappingURL=main.3cf83fa6.chunk.js.map