import{bc as $,v as P,k as u,w as v,am as T,o as p,c as x,p as n,x as r,C as _,z as d,q as l,bd as B,be as k,m as t,F as D,a as R,an as N,az as O,b,ar as j,E as h,b0 as A,b4 as E,j as F,r as L,H}from"./index.0f395c90.js";import{V as U,a as q}from"./VTable.e8f87133.js";import{V as C}from"./VBtn.609113ec.js";const J=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," # "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u044F "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F ")])],-1),M={class:"text-high-emphasis"},W={class:"text-high-emphasis"},G={class:"text-high-emphasis"},K={class:"text-high-emphasis"},Q={class:"text-high-emphasis"},X={colspan:"8",class:"text-center text-body-1 justify-center align-center"},Y={class:"text-sm text-disabled"},le={__name:"index",setup(Z){F();const y=$();P();const c=u({enabled:!1,type:"success",message:"Hello!"}),s=u(null),w=u(10),i=u(1),f=u(1),S=u(0),m=u({message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0});v(()=>{s.value===null?m.value={message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}:s.value.length===0&&(m.value={message:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",status:2})}),v(()=>{s.value=null,y.fetchItems({}).then(a=>{s.value=a.data}).catch(a=>{c.value={enabled:!0,message:`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432: ${a}`,type:"error"}})}),v(()=>{i.value>f.value&&(i.value=f.value)});const I=T(()=>{const a=s.value&&s.value.length?(i.value-1)*w.value+1:0,e=s.value?s.value.length+(i.value-1)*w.value:0;return`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441 ${a} \u043F\u043E ${e} \u0438\u0437 ${S.value} \u0441\u0442\u0440\u043E\u043A`}),V=a=>{let e="";return typeof a=="string"?e=a:e=new Date(a*1e3).toISOString(),e.slice(0,-5).replaceAll("T"," ").replaceAll("-",".")},z=async a=>{y.deleteItem({id:a}).then(e=>{if(console.log(e.data),s.value=s.value.filter(g=>g.id!==a),e.status>250)throw`Failed to save! Response: ${JSON.stringify(e.data)}`;c.value={enabled:!0,message:`Item ${a} deleted`,type:"success"}}).catch(e=>{c.value={enabled:!0,message:e,type:"error"},console.log(e)})};return(a,e)=>{const g=L("RouterLink");return p(),x("div",null,[n(B,{modelValue:l(c).enabled,"onUpdate:modelValue":e[0]||(e[0]=o=>l(c).enabled=o),location:"top end",variant:"flat",color:l(c).type},{default:r(()=>[_(d(l(c).message),1)]),_:1},8,["modelValue","color"]),n(E,{flat:""},{default:r(()=>[n(k,null,{default:r(()=>[n(U,{class:"text-no-wrap pb-5"},{default:r(()=>[J,t("tbody",null,[(p(!0),x(D,null,R(l(s),o=>(p(),x("tr",{key:o.id,style:{height:"3.5rem"}},[t("td",M,d(o.id),1),t("td",W,[n(g,{to:{name:"items-view-id",params:{id:o.item}}},{default:r(()=>[n(H,{class:"cursor-pointer",color:"primary"},{default:r(()=>[_(" TODO "+d(o.item),1)]),_:2},1024)]),_:2},1032,["to"])]),t("td",G,d(V(o.time_modified)),1),t("td",K,d(V(o.time_created)),1),t("td",Q,[n(C,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-view-id",params:{id:o.item}}},{default:r(()=>[n(h,{size:"22",icon:"tabler-eye"})]),_:2},1032,["to"]),n(C,{icon:"",size:"x-small",color:"default",variant:"text",onClick:ee=>z(o.id)},{default:r(()=>[n(h,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),N(t("tfoot",null,[t("tr",null,[t("td",X,[_(d(l(m).message)+" ",1),l(m).status===0?(p(),b(j,{key:0,width:3,color:"primary",indeterminate:""})):l(m).status===1?(p(),b(h,{key:1,color:"success",icon:"tabler-tick"})):(p(),b(h,{key:2,color:"error",icon:"tabler-x"}))])])],512),[[O,!l(s)||!l(s).length]])]),_:1}),n(k,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:r(()=>[t("span",Y,d(l(I)),1),n(q,{modelValue:l(i),"onUpdate:modelValue":e[1]||(e[1]=o=>A(i)?i.value=o:null),size:"small","total-visible":4,length:l(f)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})])}}};export{le as default};
