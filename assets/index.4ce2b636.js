import{k as d,bI as E,v as U,w,am as j,o as i,c as v,p as a,x as r,C as f,z as c,q as s,bd as N,F as y,a as k,A as F,b0 as S,be as T,b4 as H,j as R,b as g,m as e,H as W,E as _,an as q,ar as L,az as M}from"./index.0f395c90.js";import{V as b}from"./VBtn.609113ec.js";import{V as O,a as G,b as J,c as K}from"./VTabs.539fc03b.js";import{V as Q,a as X}from"./VTable.e8f87133.js";const Y=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," # "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0424\u043E\u0442\u043E "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0421\u0442\u0430\u0442\u0443\u0441 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u044F "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F ")])],-1),Z={class:"text-high-emphasis"},ee={class:"text-high-emphasis"},te={class:"text-high-emphasis"},ae={class:"text-high-emphasis"},se={class:"text-high-emphasis"},le={class:"text-high-emphasis"},oe={class:"text-high-emphasis"},ne={class:"text-high-emphasis"},re={colspan:"8",class:"text-center text-body-1 justify-center align-center"},ue={class:"text-sm text-disabled"},xe={__name:"index",setup(ce){const p=d("exposed"),z=d([{name:"Exposed",value:"exposed"},{name:"Draft",value:"draft"},{name:"Exchnaged",value:"exchanged"}]);R();const C=E(),$=U(),u=d(null),I=d(10),h=d(1),V=d(1),D=d(0),x=d({message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}),m=d({enabled:!1,type:"success",message:"Hello!"});w(()=>{u.value===null?x.value={message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}:u.value.length===0&&(x.value={message:"\u041D\u0435\u0442 \u0434\u0430\u043D\u043D\u044B\u0445",status:2})}),w(()=>{u.value=null,C.fetchItems({state:p.value,user:$.$state.userData.id}).then(o=>{u.value=o.data}).catch(o=>{m.value={enabled:!0,message:o,type:"error"}})}),w(()=>{h.value>V.value&&(h.value=V.value)});const A=j(()=>{const o=u.value&&u.value.length?(h.value-1)*I.value+1:0,t=u.value?u.value.length+(h.value-1)*I.value:0;return`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441 ${o} \u043F\u043E ${t} \u0438\u0437 ${D.value} \u0441\u0442\u0440\u043E\u043A`}),P=o=>{let t="";return typeof o=="string"?t=o:t=new Date(o*1e3).toISOString(),t.slice(0,-5).replaceAll("T"," ").replaceAll("-",".")},B=async o=>{C.deleteItem({id:o}).then(t=>{if(console.log(t.data),u.value=u.value.filter(n=>n.id!==o),t.status>250)throw t.data;m.value={enabled:!0,message:`\u041F\u0440\u0435\u0434\u043C\u0435\u0442 ${o} \u0443\u0434\u0430\u043B\u0451\u043D`,type:"success"}}).catch(t=>{m.value={enabled:!0,message:`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430: ${t}`,type:"error"}})};return(o,t)=>(i(),v("div",null,[a(N,{modelValue:s(m).enabled,"onUpdate:modelValue":t[0]||(t[0]=n=>s(m).enabled=n),location:"top end",variant:"flat",color:s(m).type},{default:r(()=>[f(c(s(m).message),1)]),_:1},8,["modelValue","color"]),a(O,{modelValue:s(p),"onUpdate:modelValue":t[1]||(t[1]=n=>S(p)?p.value=n:null),class:"mb-1"},{default:r(()=>[(i(!0),v(y,null,k(s(z),n=>(i(),g(J,{key:n.value,value:n.value},{default:r(()=>[f(c(n.name),1)]),_:2},1032,["value"]))),128)),a(F),a(b,{to:{name:"items-new"},"append-icon":"tabler-plus"},{default:r(()=>[f(" \u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")]),_:1})]),_:1},8,["modelValue"]),a(H,{flat:""},{default:r(()=>[a(T,null,{default:r(()=>[a(G,{modelValue:s(p),"onUpdate:modelValue":t[3]||(t[3]=n=>S(p)?p.value=n:null)},{default:r(()=>[(i(!0),v(y,null,k(s(z),n=>(i(),g(K,{key:n.value,value:n.value},{default:r(()=>[a(Q,{class:"text-no-wrap pb-5"},{default:r(()=>[Y,e("tbody",null,[(i(!0),v(y,null,k(s(u),l=>(i(),v("tr",{key:l.id,style:{height:"3.5rem"}},[e("td",Z,c(l.id),1),e("td",ee,c(l.name),1),e("td",te,c(l.description.slice(0,100))+" "+c(l.description.length>100?"...":""),1),e("td",ae,c(l.photos.length),1),e("td",se,[a(W,{variant:"tonal",color:l.moderation_state==="Accepted"?"success":l.moderation_state==="Pending"?"warning":"error"},{default:r(()=>[f(c(l.moderation_state),1)]),_:2},1032,["color"])]),e("td",le,c(P(l.time_modified)),1),e("td",oe,c(P(l.time_created)),1),e("td",ne,[a(b,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-view-id",params:{id:l.id}}},{default:r(()=>[a(_,{size:"22",icon:"tabler-eye"})]),_:2},1032,["to"]),a(b,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-edit-id",params:{id:l.id}}},{default:r(()=>[a(_,{size:"22",icon:"tabler-edit"})]),_:2},1032,["to"]),a(b,{icon:"",size:"x-small",color:"default",variant:"text",onClick:ie=>B(l.id)},{default:r(()=>[a(_,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),q(e("tfoot",null,[e("tr",null,[e("td",re,[f(c(s(x).message)+" ",1),s(x).status===0?(i(),g(L,{key:0,width:3,color:"primary",indeterminate:""})):s(x).status===1?(i(),g(_,{key:1,color:"success",icon:"tabler-tick"})):(i(),g(_,{key:2,color:"error",icon:"tabler-x"}))])])],512),[[M,!s(u)||!s(u).length]])]),_:1}),a(T,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:r(()=>[e("span",ue,c(s(A)),1),a(X,{modelValue:s(h),"onUpdate:modelValue":t[2]||(t[2]=l=>S(h)?h.value=l:null),size:"small","total-visible":4,length:s(V)},null,8,["modelValue","length"])]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}};export{xe as default};
