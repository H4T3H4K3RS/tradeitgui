import{a_ as S,D as x,d as I,t as A,k as l,w as P,a$ as V,o as p,c as d,m as c,p as i,x as k,q as t,aY as B,I as C,b0 as m,F as D,E as N,j as q,b1 as R,b2 as T,b3 as E}from"./index.0f395c90.js";import{V as L}from"./VBtn.609113ec.js";const w=S.create({});const b=r=>(T("data-v-d2275827"),r=r(),E(),r),U={key:0,class:"d-none d-md-flex align-center text-disabled"},z=b(()=>c("span",{class:"me-3"},"Search",-1)),O=b(()=>c("span",{class:"meta-key"},"\u2318K",-1)),$=[z,O],j=I({inheritAttrs:!1}),F=Object.assign(j,{__name:"NavSearchBar",setup(r){const{appContentLayoutNav:g}=A(),e=l(!1),h=[{title:"Popular Searches",content:[{icon:"tabler-chart-donut",title:"Analytics",url:{name:"dashboards-analytics"}},{icon:"tabler-chart-bubble",title:"CRM",url:{name:"dashboards-crm"}},{icon:"tabler-file",title:"Invoice List",url:{name:"apps-invoice-list"}},{icon:"tabler-users",title:"User List",url:{name:"apps-user-list"}}]},{title:"Apps & Pages",content:[{icon:"tabler-calendar",title:"Calendar",url:{name:"apps-calendar"}},{icon:"tabler-file-plus",title:"Invoice Add",url:{name:"apps-invoice-add"}},{icon:"tabler-currency-dollar",title:"Pricing",url:{name:"pages-pricing"}},{icon:"tabler-user",title:"Account Settings",url:{name:"pages-account-settings-tab",params:{tab:"account"}}}]},{title:"User Interface",content:[{icon:"tabler-letter-a",title:"Typography",url:{name:"pages-typography"}},{icon:"tabler-square",title:"Tabs",url:{name:"components-tabs"}},{icon:"tabler-hand-click",title:"Buttons",url:{name:"components-button"}},{icon:"tabler-keyboard",title:"Statistics",url:{name:"pages-cards-card-statistics"}}]},{title:"Popular Searches",content:[{icon:"tabler-list",title:"Select",url:{name:"forms-select"}},{icon:"tabler-space",title:"Combobox",url:{name:"forms-combobox"}},{icon:"tabler-calendar",title:"Date & Time Picker",url:{name:"forms-date-time-picker"}},{icon:"tabler-hexagon",title:"Rating",url:{name:"forms-rating"}}]}],_=[{title:"Analytics Dashboard",icon:"tabler-shopping-cart",url:{name:"dashboards-analytics"}},{title:"Account Settings",icon:"tabler-user",url:{name:"pages-account-settings-tab",params:{tab:"account"}}},{title:"Pricing Page",icon:"tabler-cash",url:{name:"pages-pricing"}}],s=l(""),u=l([]),f=q();P(()=>{w.get("/app-bar/search",{params:{q:s.value}}).then(n=>{u.value=n.data})});const v=n=>{f.push(n.url),e.value=!1,s.value=""},y=V(()=>R(()=>import("./AppBarSearch.4ff85a84.js"),["assets/AppBarSearch.4ff85a84.js","assets/index.0f395c90.js","assets/index.c74f5789.css","assets/VTextField.83449bb1.js","assets/VCounter.3b11b0ca.js","assets/VCounter.539df929.css","assets/VBtn.609113ec.js","assets/VBtn.79a9ebaa.css","assets/VDivider.b997d957.js","assets/VDivider.5d6d66e0.css","assets/VList.8e9f0c12.js","assets/VList.f3553822.css","assets/VDialog.1621901b.js","assets/dialog-transition.8fb3264c.js","assets/VDialog.0e0bf965.css","assets/AppBarSearch.fae80d89.css"]));return(n,a)=>(p(),d(D,null,[c("div",C({class:"d-flex align-center cursor-pointer"},n.$attrs,{onClick:a[0]||(a[0]=o=>e.value=!t(e))}),[i(L,{icon:"",variant:"text",color:"default",size:"small"},{default:k(()=>[i(N,{icon:"tabler-search",size:"24"})]),_:1}),t(g)==="vertical"?(p(),d("span",U,$)):B("",!0)],16),i(t(y),{isDialogVisible:t(e),"onUpdate:isDialogVisible":a[1]||(a[1]=o=>m(e)?e.value=o:null),"search-query":t(s),"onUpdate:search-query":a[2]||(a[2]=o=>m(s)?s.value=o:null),"search-results":t(u),suggestions:h,"no-data-suggestion":_,onItemSelected:v},null,8,["isDialogVisible","search-query","search-results"])],64))}}),M=x(F,[["__scopeId","data-v-d2275827"]]);export{M as default};
