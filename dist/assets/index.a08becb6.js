import{k as i,bQ as U,v as E,w,an as N,o as d,c as v,p as a,x as s,C as x,z as c,q as l,bd as R,b9 as I,b0 as y,F as k,a as C,b8 as F,be as $,b4 as W,j as q,b as g,m as e,G,E as _,ao as H,as as L,aA as M}from"./index.08a50e10.js";import{V as O,a as Q,b as J,c as K}from"./VTabs.f4b48226.js";import{V as b}from"./VBtn.6ea5676b.js";import{V as X,a as Y}from"./VTable.c2ab7539.js";const Z=e("thead",null,[e("tr",null,[e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," # "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0424\u043E\u0442\u043E "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0421\u0442\u0430\u0442\u0443\u0441 "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u044F "),e("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F ")])],-1),ee={class:"text-high-emphasis"},te={class:"text-high-emphasis"},ae={class:"text-high-emphasis"},se={class:"text-high-emphasis"},le={class:"text-high-emphasis"},oe={class:"text-high-emphasis"},ne={class:"text-high-emphasis"},ue={class:"text-high-emphasis"},re={colspan:"8",class:"text-center text-body-1 justify-center align-center"},ce={class:"text-sm text-disabled"},ve={__name:"index",setup(de){const p=i("exposed"),S=i([{name:"\u0412\u044B\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u043D\u044B\u0435",value:"exposed"},{name:"\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438",value:"draft"},{name:"\u0423\u0436\u0435 \u043E\u0431\u043C\u0435\u043D\u044F\u043B\u0438 \u{1F389}",value:"exchanged"}]);q();const z=U(),j=E(),r=i(null),P=i(10),m=i(1),V=i(1),A=i(0),f=i({message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}),h=i({enabled:!1,type:"success",message:"Hello!"});w(()=>{r.value===null?f.value={message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}:r.value.length===0&&(f.value={message:"\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",status:2})}),w(()=>{r.value=null,z.fetchItems({state:p.value,user:j.userData.id}).then(n=>{r.value=n.data}).catch(n=>{h.value={enabled:!0,message:n,type:"error"}})}),w(()=>{m.value>V.value&&(m.value=V.value)});const B=N(()=>{const n=r.value&&r.value.length?(m.value-1)*P.value+1:0,t=r.value?r.value.length+(m.value-1)*P.value:0;return`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441 ${n} \u043F\u043E ${t} \u0438\u0437 ${A.value} \u0441\u0442\u0440\u043E\u043A`}),T=n=>{let t="";return typeof n=="string"?t=n:t=new Date(n*1e3).toISOString(),t.slice(0,-11).replaceAll("T"," ").replaceAll("-",".")},D=async n=>{z.deleteItem({id:n}).then(t=>{if(console.log(t.data),r.value=r.value.filter(u=>u.id!==n),t.status>250)throw t.data;h.value={enabled:!0,message:`\u041F\u0440\u0435\u0434\u043C\u0435\u0442 ${n} \u0443\u0434\u0430\u043B\u0451\u043D`,type:"success"}}).catch(t=>{h.value={enabled:!0,message:`\u041E\u0448\u0438\u0431\u043A\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u0430: ${t}`,type:"error"}})};return(n,t)=>(d(),v("div",null,[a(R,{modelValue:l(h).enabled,"onUpdate:modelValue":t[0]||(t[0]=u=>l(h).enabled=u),location:"bottom end",variant:"flat",color:l(h).type},{default:s(()=>[x(c(l(h).message),1)]),_:1},8,["modelValue","color"]),a(F,null,{default:s(()=>[a(I,{cols:"12",sm:"8",class:"w-100 d-flex d-md-block justify-center justify-md-start"},{default:s(()=>[a(O,{modelValue:l(p),"onUpdate:modelValue":t[1]||(t[1]=u=>y(p)?p.value=u:null),class:"mb-1"},{default:s(()=>[(d(!0),v(k,null,C(l(S),u=>(d(),g(J,{key:u.value,value:u.value},{default:s(()=>[x(c(u.name),1)]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(I,{cols:"12",sm:"4"},{default:s(()=>[a(b,{class:"w-100",to:{name:"items-new"},"append-icon":"tabler-circle-plus"},{default:s(()=>[x(" \u0420\u0430\u0437\u043C\u0435\u0441\u0442\u0438\u0442\u044C ")]),_:1})]),_:1})]),_:1}),a(W,{flat:""},{default:s(()=>[a($,null,{default:s(()=>[a(Q,{modelValue:l(p),"onUpdate:modelValue":t[3]||(t[3]=u=>y(p)?p.value=u:null)},{default:s(()=>[(d(!0),v(k,null,C(l(S),u=>(d(),g(K,{key:u.value,value:u.value},{default:s(()=>[a(X,{class:"text-no-wrap pb-5"},{default:s(()=>[Z,e("tbody",null,[(d(!0),v(k,null,C(l(r),o=>(d(),v("tr",{key:o.id,style:{height:"3.5rem"}},[e("td",ee,c(o.id),1),e("td",te,c(o.name),1),e("td",ae,c(o.description.slice(0,100))+" "+c(o.description.length>100?"...":""),1),e("td",se,c(o.photos.length),1),e("td",le,[a(G,{variant:"tonal",color:o.moderation_state==="Accepted"?"success":o.moderation_state==="Pending"?"warning":"error"},{default:s(()=>[x(c(o.moderation_state),1)]),_:2},1032,["color"])]),e("td",oe,c(T(o.time_modified)),1),e("td",ne,c(T(o.time_created)),1),e("td",ue,[a(b,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-view-id",params:{id:o.id}}},{default:s(()=>[a(_,{size:"22",icon:"tabler-eye"})]),_:2},1032,["to"]),a(b,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-edit-id",params:{id:o.id}}},{default:s(()=>[a(_,{size:"22",icon:"tabler-edit"})]),_:2},1032,["to"]),a(b,{icon:"",size:"x-small",color:"default",variant:"text",onClick:ie=>D(o.id)},{default:s(()=>[a(_,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),H(e("tfoot",null,[e("tr",null,[e("td",re,[x(c(l(f).message)+" ",1),l(f).status===0?(d(),g(L,{key:0,width:3,color:"primary",indeterminate:""})):l(f).status===1?(d(),g(_,{key:1,color:"success",icon:"tabler-tick"})):(d(),g(_,{key:2,color:"error",icon:"tabler-x"}))])])],512),[[M,!l(r)||!l(r).length]])]),_:1}),a($,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:s(()=>[e("span",ce,c(l(B)),1),a(Y,{modelValue:l(m),"onUpdate:modelValue":t[2]||(t[2]=o=>y(m)?m.value=o:null),size:"small","total-visible":4,length:l(V)},null,8,["modelValue","length"])]),_:1})]),_:2},1032,["value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]))}};export{ve as default};
