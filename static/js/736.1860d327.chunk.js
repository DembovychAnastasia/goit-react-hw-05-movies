"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{9736:function(n,e,t){t.r(e),t.d(e,{default:function(){return C}});var r,a,c,o,i,p,s,u,d=t(5861),l=t(9439),h=t(7757),f=t.n(h),x=t(2791),v=t(7689),m=t(409),g=t(168),w=t(6444),b=w.ZP.div(r||(r=(0,g.Z)(["\n  margin-top: 30px;\n  padding-right: 20px;\n  padding-left: 20px;\n  padding-bottom: 20px;\n  text-align: center;\n"]))),Z=w.ZP.h3(a||(a=(0,g.Z)(["\n  font-size: 30px;\n  font-weight: 700;\n\n  color: #040404;\n  margin-bottom: 20px;\n"]))),k=w.ZP.ul(c||(c=(0,g.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 16px;\n  list-style: none;\n  padding: 0;\n  margin: 0 auto;\n  margin-bottom: 30px;\n"]))),y=w.ZP.li(o||(o=(0,g.Z)(["\n\n\n  backdrop-filter: blur(10px);\n  padding: 10px;\n  text-align: center;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 250px;\n  padding: 18px;\n  border-radius: 4px;\n\n  &:hover,\n  &:focus {\n    box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 32px 0px;\n  }\n"]))),j=w.ZP.div(i||(i=(0,g.Z)(["\n  font-size: 16px;\n  font-weight: 400;\n  margin-top: 20px;\n  max-width: 220px;\n  color: #000000;\n  margin: 0 auto;\n"]))),_=w.ZP.h3(p||(p=(0,g.Z)(["\n    margin-bottom: 20px;\n"]))),P=w.ZP.p(s||(s=(0,g.Z)(["\n  margin: 30px auto 0 auto;\n  text-align: center;\n  padding: 20px;\n  border-radius: 5px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n"]))),E=w.ZP.img(u||(u=(0,g.Z)(["\n  display: block;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-size: cover;\n\n  display: block;\n  width: 100%;\n  /* height: 350px; */\n  object-fit: cover;\n  object-position: center;\n"]))),O=t(184),C=function(){var n=(0,v.UO)().movieId,e=(0,x.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1];return(0,x.useEffect)((function(){var e=function(){var e=(0,d.Z)(f().mark((function e(){var t,r;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,m.uV)(n);case 3:t=e.sent,r=t.cast,a(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,O.jsxs)(b,{children:[(0,O.jsx)(Z,{children:"Cast"}),r.length?(0,O.jsx)(k,{children:r.map((function(n){return(0,O.jsxs)(y,{className:"cast-card",children:[n.profile_path?(0,O.jsx)(E,{src:"https://image.tmdb.org/t/p/w200".concat(n.profile_path),alt:"".concat(n.name," profile")}):(0,O.jsx)(E,{src:"https://via.placeholder.com/200x300?text=No+Image",alt:"".concat(n.name," profile")}),(0,O.jsxs)(j,{children:[(0,O.jsx)(_,{children:n.name}),(0,O.jsxs)("p",{children:["Character: ",n.character]})]})]},n.id)}))}):(0,O.jsx)(P,{children:"We don't have any information about the cast yet."})]})}},409:function(n,e,t){t.d(e,{E3:function(){return p},Hx:function(){return d},Mc:function(){return s},_k:function(){return i},uV:function(){return u}});var r=t(5861),a=t(7757),c=t.n(a),o=t(1243);o.Z.defaults.baseURL="https://api.themoviedb.org/3",o.Z.defaults.params={api_key:"7d4ac179e844e8d16c4af681deb5028c",include_adult:!1};var i=function(){var n=(0,r.Z)(c().mark((function n(){var e,t,r,a,i=arguments;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=i.length>0&&void 0!==i[0]?i[0]:1,t=i.length>1?i[1]:void 0,n.prev=2,n.next=5,o.Z.get("/trending/movie/day",{params:{page:e,language:t}});case 5:return r=n.sent,a=r.data,n.abrupt("return",a);case 10:throw n.prev=10,n.t0=n.catch(2),new Error("Oops, there is no movies");case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=e?"https://api.themoviedb.org/3/search/movie?api_key=7d4ac179e844e8d16c4af681deb5028c&language=en-US&query=".concat(e,"&page=1&include_adult=false"):"/trending/movie/day",n.next=4,o.Z.get(t);case 4:return r=n.sent,a=r.data,n.abrupt("return",a);case 9:throw n.prev=9,n.t0=n.catch(0),new Error("Oops, there is no movie");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e),{params:{id:e,language:t}});case 3:return r=n.sent,a=r.data,n.abrupt("return",a);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no movie with that name");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e,t){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/credits"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, there is no cast movie");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"/reviews"));case 3:return t=n.sent,r=t.data,n.abrupt("return",r);case 8:throw n.prev=8,n.t0=n.catch(0),new Error("Oops, we don`t have any reviews");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.1860d327.chunk.js.map