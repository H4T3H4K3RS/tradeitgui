import{k as u,o as n,c,p as s,w as o,ba as p,G as g,B as i,m as t,F as k,a as w,q as l,a2 as y,a3 as V,y as f,bs as T,b2 as v}from"./index.cd0f8983.js";import{u as B}from"./usePsStore.15c25792.js";import{b as m}from"./route-block.023af118.js";import{V as M}from"./VTable.a1fd0acf.js";const C=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-subtitle-1"}," \u0412\u0430\u043B\u044E\u0442\u0430 "),t("th",{scope:"col",class:"text-subtitle-1"}," \u041F\u043E\u043A\u0443\u043F\u043A\u0430 ")])],-1),F={class:"text-high-emphasis text-h6 font-weight-bold"},P=["innerHTML"],L={colspan:"8",class:"text-center text-body-1 justify-center align-center"},N={__name:"nbrk",setup(S){const d=u("\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435..."),_=B(),r=u([]);_.fetchBank({bank:"nbrk"}).then(e=>{r.value=e.data.data}).catch(e=>{d.value="\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u0434\u0430\u043D\u043D\u044B\u0445",console.log(e)});let x=e=>{let h=e<0?"-":"",a=Math.abs(parseInt(e)),b=(Math.abs(e)%1).toFixed(2).slice(2);return`<span class="text-h6">${h}${a}</span>.${b}`};return(e,h)=>(n(),c("div",null,[s(v,{class:"mb-6"},{default:o(()=>[s(p,{class:"text-h4 px-10 font-weight-bold"},{default:o(()=>[s(g,{size:"50",image:"/src/assets/images/misc/currencies/fiat/KZT.png"}),i(" \u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u043A\u0443\u0440\u0441\u044B \u0432\u0430\u043B\u044E\u0442 \u041D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0411\u0430\u043D\u043A\u0430 \u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D\u0430 ")]),_:1}),s(p,{class:"text-h5 font-weight-bold"},{default:o(()=>[i(" \u041E\u0431\u043C\u0435\u043D KZT ")]),_:1}),s(M,{class:"text-no-wrap pb-10 px-10"},{default:o(()=>[C,t("tbody",null,[(n(!0),c(k,null,w(l(r),a=>(n(),c("tr",{key:a.code,style:{height:"3.5rem"}},[t("td",F,f(a.code),1),t("td",{class:"text-medium-emphasis",innerHTML:l(x)(a.price)},null,8,P)]))),128))]),y(t("tfoot",null,[t("tr",null,[t("td",L,[i(f(l(d))+"\xA0 ",1),s(T,{width:3,color:"primary",indeterminate:""})])])],512),[[V,!l(r).length]])]),_:1})]),_:1})]))}};typeof m=="function"&&m(N);export{N as default};
