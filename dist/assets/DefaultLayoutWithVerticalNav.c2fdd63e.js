import{t as g,i as y,v as b,k,w,o,b as i,x as e,q as t,m as V,p as a,E as C,H as N,A as x,B as m,c as u,C as d,F as p,T as B,e as T,aZ as $,r as D}from"./index.08a50e10.js";import F from"./Footer.827f169c.js";import L from"./UserProfile.f4431193.js";import{V as s}from"./VBtn.6ea5676b.js";import"./VBadge.cdfa8f54.js";import"./VMenu.23984fe0.js";import"./dialog-transition.2b7db99f.js";import"./VList.c205a119.js";import"./VDivider.aa67db92.js";const S=[{title:"\u041B\u0435\u043D\u0442\u0430",to:{name:"index"},icon:{icon:"tabler-news"},role:0},{title:"\u041E\u0434\u0435\u0436\u0434\u0430",icon:{icon:"tabler-hanger-2"},to:{name:"category-id",params:{id:"clothes"}},role:0},{title:"\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B",icon:{icon:"tabler-tie"},to:{name:"category-id",params:{id:"accessory"}},role:0},{title:"\u041C\u043E\u0438 \u0412\u0435\u0449\u0438",icon:{icon:"tabler-hanger"},children:[{title:"\u0421\u043F\u0438\u0441\u043E\u043A",icon:{icon:"tabler-list"},to:{name:"items"}},{title:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",icon:{icon:"tabler-plus"},to:{name:"items-new"}}],role:1},{title:"\u041E\u0431\u043C\u0435\u043D\u044B",icon:{icon:"tabler-replace"},to:{name:"trade"},role:1},{title:"\u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435",icon:{icon:"tabler-heart"},to:{name:"wishlist"},role:1},{title:"\u0416\u0430\u043B\u043E\u0431\u044B",icon:{icon:"tabler-alert-triangle"},to:{name:"report"},role:1}];const W={class:"d-flex h-100 align-center"},K={__name:"DefaultLayoutWithVerticalNav",setup(z){const{appRouteTransition:_,isLessThanOverlayNavBreakpoint:f}=g(),{width:h}=y(),l=b();let c=k([]);return w(()=>{c.value=S.filter(r=>!r.role||l.userData.role>=r.role)}),(r,A)=>{const v=D("RouterView");return o(),i(t($),{"nav-items":t(c)},{navbar:e(({toggleVerticalOverlayNavActive:n})=>[V("div",W,[t(f)(t(h))?(o(),i(s,{key:0,icon:"",variant:"text",color:"default",class:"ms-n3",size:"small",onClick:E=>n(!0)},{default:e(()=>[a(C,{icon:"tabler-menu-2",size:"24"})]),_:2},1032,["onClick"])):N("",!0),a(x),t(m)({to:"auth-login"},r.$router)||t(m)({to:"auth-register"},r.$router)?(o(),u(p,{key:1},[],64)):t(l).$state.userData.role?(o(),i(L,{key:3})):(o(),u(p,{key:2},[a(s,{rounded:"lg",class:"mr-4",color:"primary",to:{name:"auth-login"}},{default:e(()=>[d(" \u0412\u043E\u0439\u0442\u0438 ")]),_:1}),a(s,{variant:"outlined",rounded:"lg",class:"mr-4",color:"primary",to:{name:"auth-register"}},{default:e(()=>[d(" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ")]),_:1})],64))])]),footer:e(()=>[a(F)]),default:e(()=>[a(v,null,{default:e(({Component:n})=>[a(B,{name:t(_),mode:"out-in"},{default:e(()=>[(o(),i(T(n)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{K as default};
