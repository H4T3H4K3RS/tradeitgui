import{t as g,i as k,v as w,k as y,w as V,o,b as n,x as e,q as t,m as b,p as a,E as C,aY as N,A as x,B as m,c as u,C as d,F as p,T as B,e as T,aZ as $,r as D}from"./index.d764a294.js";import F from"./Footer.8879efca.js";import L from"./UserProfile.64d1c7be.js";import{V as s}from"./VBtn.5fef2a98.js";import"./VBadge.713bbdd2.js";import"./VMenu.31213ad9.js";import"./dialog-transition.a6537768.js";import"./VList.4de0adb2.js";import"./VDivider.65832050.js";const S=[{title:"\u041B\u0435\u043D\u0442\u0430",to:{name:"index"},icon:{icon:"tabler-news"},role:0},{title:"\u041C\u043E\u0438 \u0412\u0435\u0449\u0438",icon:{icon:"tabler-hanger"},children:[{title:"\u0421\u043F\u0438\u0441\u043E\u043A",icon:{icon:"tabler-list"},to:{name:"items"}},{title:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",icon:{icon:"tabler-plus"},to:{name:"items-new"}}],role:1},{title:"\u041E\u0431\u043C\u0435\u043D\u044B",icon:{icon:"tabler-replace"},to:{name:"trade"},role:1},{title:"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F",icon:{icon:"tabler-messages"},to:{name:"message"},role:1},{title:"\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",icon:{icon:"tabler-heart"},to:{name:"wishlist"},role:1},{title:"\u0416\u0430\u043B\u043E\u0431\u044B",icon:{icon:"tabler-alert-triangle"},to:{name:"report"},role:1}];const W={class:"d-flex h-100 align-center"},J={__name:"DefaultLayoutWithVerticalNav",setup(z){const{appRouteTransition:_,isLessThanOverlayNavBreakpoint:f}=g(),{width:h}=k(),l=w();let c=y([]);return V(()=>{c.value=S.filter(r=>!r.role||l.userData.role>=r.role)}),(r,A)=>{const v=D("RouterView");return o(),n(t($),{"nav-items":t(c)},{navbar:e(({toggleVerticalOverlayNavActive:i})=>[b("div",W,[t(f)(t(h))?(o(),n(s,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:E=>i(!0)},{default:e(()=>[a(C,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):N("",!0),a(x),t(m)({to:"auth-login"},r.$router)||t(m)({to:"auth-register"},r.$router)?(o(),u(p,{key:1},[],64)):t(l).$state.userData.role?(o(),n(L,{key:3})):(o(),u(p,{key:2},[a(s,{rounded:"lg",class:"mr-4",color:"primary",to:{name:"auth-login"}},{default:e(()=>[d(" \u0412\u043E\u0439\u0442\u0438 ")]),_:1}),a(s,{variant:"outlined",rounded:"lg",class:"mr-4",color:"primary",to:{name:"auth-register"}},{default:e(()=>[d(" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ")]),_:1})],64))])]),footer:e(()=>[a(F)]),default:e(()=>[a(v,null,{default:e(({Component:i})=>[a(B,{name:t(_),mode:"out-in"},{default:e(()=>[(o(),n(T(i)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{J as default};