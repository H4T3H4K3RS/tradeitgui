import{bQ as T,v as B,k as m,w as y,o as l,c as p,p as a,x as e,C as r,z as o,q as s,bd as N,b as d,b4 as V,be as f,as as z,E as h,b9 as k,H as A,F as v,a as x,b8 as E,bk as L,j,r as F,bp as H,b5 as $,b6 as q,G as _,bs as D,bT as G,A as M,m as C}from"./index.803ecb77.js";const P={class:"text-subtitle-2 me-4"},J={__name:"[id]",setup(Q){const w=L();j();const S=T();B();const n=m(null),i=m({message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u{1F9E0}",status:0}),u=m({enabled:!1,type:"success",message:"Hello!"});return y(()=>{n.value===null?i.value={message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u{1F9E0}",status:0}:n.value.length===0&&(i.value={message:"\u0411\u043E\u043B\u044C\u0448\u0435 \u043D\u0435\u0442 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432",status:2})}),y(()=>{S.fetchItems({state:"exposed",category:w.params.id}).then(c=>{if(c.status>250)throw`${c.status}`;n.value=[...c.data.results],u.value={enabled:!0,message:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442\u044B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u044B \u{1F389}",type:"success"}}).catch(c=>{u.value={enabled:!0,message:`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432: ${c}`,type:"error"}})}),(c,b)=>{const g=F("RouterLink");return l(),p("div",null,[a(N,{modelValue:s(u).enabled,"onUpdate:modelValue":b[0]||(b[0]=t=>s(u).enabled=t),location:"bottom end",variant:"flat",color:s(u).type},{default:e(()=>[r(o(s(u).message),1)]),_:1},8,["modelValue","color"]),a(E,null,{default:e(()=>[!s(n)||!s(n).length?(l(),d(k,{key:0,cols:"12"},{default:e(()=>[a(V,null,{default:e(()=>[a(f,{class:"d-flex justify-center text-center text-body-1 align-center"},{default:e(()=>[r(o(s(i).message)+" ",1),s(i).status===0?(l(),d(z,{key:0,width:3,color:"primary",indeterminate:""})):s(i).status===1?(l(),d(h,{key:1,color:"success",icon:"tabler-tick"})):(l(),d(h,{key:2,color:"error",icon:"tabler-x"}))]),_:1})]),_:1})]),_:1})):A("",!0),(l(!0),p(v,null,x(s(n),t=>(l(),d(k,{key:t.id,cols:"12",sm:"6",md:"4",class:"d-flex"},{default:e(()=>[a(V,{class:"h-100 w-100"},{default:e(()=>[a(H,{height:"300px","max-height":"300px",src:t.photos[0]},null,8,["src"]),a($,null,{default:e(()=>[a(q,null,{default:e(()=>[r(o(t.name),1)]),_:2},1024)]),_:2},1024),a(f,null,{default:e(()=>[r(o(t.description.slice(0,20))+" "+o(t.description.length>20?"...":""),1)]),_:2},1024),a(f,null,{default:e(()=>[r(" \u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F: "),a(g,{to:{name:"category-id",params:{id:t.category}}},{default:e(()=>[a(_,{color:"warning",variant:"tonal",class:"cursor-pointer"},{default:e(()=>[r(o(D(t.category)),1)]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024),a(f,null,{default:e(()=>[r(" \u0422\u0435\u0433\u0438: "),(l(!0),p(v,null,x(t.tags.slice(0,3),(I,R)=>(l(),d(_,{key:R,variant:"tonal",class:"me-1"},{default:e(()=>[r(o(I),1)]),_:2},1024))),128))]),_:2},1024),a(G,null,{default:e(()=>[a(g,{to:{name:"items-view-id",params:{id:t.id}}},{default:e(()=>[a(_,{class:"cursor-pointer",size:"large",color:"primary",variant:"flat","append-icon":"tabler-eye"},{default:e(()=>[r(" \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 ")]),_:1})]),_:2},1032,["to"]),a(M),C("div",null,[C("span",P,o(t.time_created.replace("T"," ").slice(0,-17)),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})])}}};export{J as default};
