import{av as $,v as P,k as u,w as _,aw as B,o as m,c as b,p as n,x as r,C as y,z as d,q as l,ax as D,ay as C,m as t,F as R,a as T,a9 as N,aa as j,b as w,az as A,G as f,af as F,am as L,j as E,r as H,H as O,D as I}from"./index.2deb187d.js";import{V as U,a as q}from"./VTable.c664565d.js";const G=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," # "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0418\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0430\u0442\u0430 \u0421\u043E\u0437\u0434\u0430\u043D\u0438\u044F "),t("th",{scope:"col",class:"text-subtitle-2 text-wrap"}," \u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F ")])],-1),J={class:"text-high-emphasis"},M={class:"text-high-emphasis"},W={class:"text-high-emphasis"},K={class:"text-high-emphasis"},Q={class:"text-high-emphasis"},X={colspan:"8",class:"text-center text-body-1 justify-center align-center"},Y={class:"text-sm text-disabled"},se={__name:"index",setup(Z){E();const V=$();P();const c=u({enabled:!1,type:"success",message:"Hello!"}),s=u(null),g=u(10),i=u(1),p=u(1),v=u(0),h=u({message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0});_(()=>{s.value===null?h.value={message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u0434\u0430\u043D\u043D\u044B\u0435...",status:0}:s.value.length===0&&(h.value={message:"\u041D\u0435\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432",status:2})}),_(()=>{s.value=null,V.fetchItems({}).then(a=>{s.value=a.data.results,v.value=a.data.count,p.value=parseInt(v.value/g.value)+1}).catch(a=>{c.value={enabled:!0,message:`\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438 \u043F\u0440\u0435\u0434\u043C\u0435\u0442\u043E\u0432: ${a}`,type:"error"}})}),_(()=>{i.value>p.value&&(i.value=p.value)});const S=B(()=>{const a=s.value&&s.value.length?(i.value-1)*g.value+1:0,e=s.value?s.value.length+(i.value-1)*g.value:0;return`\u041F\u043E\u043A\u0430\u0437\u0430\u043D\u044B \u0441 ${a} \u043F\u043E ${e} \u0438\u0437 ${v.value} \u0441\u0442\u0440\u043E\u043A`}),k=a=>{let e="";return typeof a=="string"?e=a:e=new Date(a*1e3).toISOString(),e.slice(0,-11).replaceAll("T"," ").replaceAll("-",".")},z=async a=>{V.deleteItem({id:a}).then(e=>{if(console.log(e.data),s.value=s.value.filter(x=>x.id!==a),v.value-=1,e.status>250)throw`Failed to save! Response: ${JSON.stringify(e.data)}`;c.value={enabled:!0,message:`Item ${a} deleted`,type:"success"}}).catch(e=>{c.value={enabled:!0,message:e,type:"error"},console.log(e)})};return(a,e)=>{const x=H("RouterLink");return m(),b("div",null,[n(D,{modelValue:l(c).enabled,"onUpdate:modelValue":e[0]||(e[0]=o=>l(c).enabled=o),location:"bottom end",variant:"flat",color:l(c).type},{default:r(()=>[y(d(l(c).message),1)]),_:1},8,["modelValue","color"]),n(L,{flat:""},{default:r(()=>[n(C,null,{default:r(()=>[n(U,{class:"text-no-wrap pb-5"},{default:r(()=>[G,t("tbody",null,[(m(!0),b(R,null,T(l(s),o=>(m(),b("tr",{key:o.id,style:{height:"3.5rem"}},[t("td",J,d(o.id),1),t("td",M,[n(x,{to:{name:"items-view-id",params:{id:o.item}}},{default:r(()=>[n(O,{class:"cursor-pointer",color:"primary"},{default:r(()=>[y(d(o.item_name),1)]),_:2},1024)]),_:2},1032,["to"])]),t("td",W,d(k(o.time_modified)),1),t("td",K,d(k(o.time_created)),1),t("td",Q,[n(I,{icon:"",size:"x-small",color:"default",variant:"text",to:{name:"items-view-id",params:{id:o.item}}},{default:r(()=>[n(f,{size:"22",icon:"tabler-eye"})]),_:2},1032,["to"]),n(I,{icon:"",size:"x-small",color:"default",variant:"text",onClick:ee=>z(o.id)},{default:r(()=>[n(f,{size:"22",icon:"tabler-trash"})]),_:2},1032,["onClick"])])]))),128))]),N(t("tfoot",null,[t("tr",null,[t("td",X,[y(d(l(h).message)+" ",1),l(h).status===0?(m(),w(A,{key:0,width:3,color:"primary",indeterminate:""})):l(h).status===1?(m(),w(f,{key:1,color:"success",icon:"tabler-tick"})):(m(),w(f,{key:2,color:"error",icon:"tabler-x"}))])])],512),[[j,!l(s)||!l(s).length]])]),_:1}),n(C,{class:"d-flex align-center flex-wrap justify-space-between gap-4 py-3"},{default:r(()=>[t("span",Y,d(l(S)),1),n(q,{modelValue:l(i),"onUpdate:modelValue":e[1]||(e[1]=o=>F(i)?i.value=o:null),size:"small","total-visible":4,length:l(p)},null,8,["modelValue","length"])]),_:1})]),_:1})]),_:1})])}}};export{se as default};