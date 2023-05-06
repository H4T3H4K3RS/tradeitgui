import{o as V,c,m as a,z as x,t as K,am as W,p as l,x as t,q as i,V as d,y as n,b6 as J,C as o,b5 as R,bP as A}from"./index.d764a294.js";import{b as k}from"./route-block.023af118.js";import{V as F}from"./VBtn.5fef2a98.js";const U={class:"text-center"},T={class:"text-h4 font-weight-medium mb-3"},u={__name:"ErrorHeader",props:{errorTitle:{type:String,required:!0},errorDescription:{type:String,required:!0}},setup(s){const e=s;return(r,S)=>(V(),c("div",U,[a("h4",T,x(e.errorTitle),1),a("p",null,x(e.errorDescription),1)]))}},b="data:image/png;base64,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",O="data:image/png;base64,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",{theme:B,skin:L}=K(),E=(s,e,r,S,p=!1)=>W(()=>B.value==="light"?L.value==="bordered"&&p?r:s:L.value==="bordered"&&p?S:e);const X={class:"misc-wrapper"},H={class:"misc-avatar w-100 text-center"},Y={class:"d-flex"},g={__name:"[...all]",setup(s){const e=E(O,b);return(r,S)=>{const p=u;return V(),c("div",X,[l(p,{"error-title":"\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430 :(","error-description":"\u041A \u0441\u043E\u0436\u0430\u043B\u0435\u043D\u0438\u044E, \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u043D\u0430\u0439\u0442\u0438 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443, \u043A\u043E\u0442\u043E\u0440\u0443\u044E \u0432\u044B \u0437\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0435."}),a("div",H,[l(R,{class:"justify-center"},{prepend:t(()=>[a("div",Y,[l(i(d),{nodes:i(n).app.logo},null,8,["nodes"])])]),default:t(()=>[l(J,{class:"font-weight-bold text-h5 py-1"},{default:t(()=>[o(x(i(n).app.title),1)]),_:1})]),_:1})]),l(F,{to:"/",class:"mb-12"},{default:t(()=>[o(" \u041E\u0431\u0440\u0430\u0442\u043D\u043E \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E ")]),_:1}),l(A,{src:i(e),class:"misc-footer-img d-none d-md-block"},null,8,["src"])])}}};typeof k=="function"&&k(g);export{g as default};