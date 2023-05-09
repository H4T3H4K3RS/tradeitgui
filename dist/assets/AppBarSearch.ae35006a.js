import{D as N,bU as P,k as y,bV as f,a4 as A,w as E,o as l,b as m,x as t,p as a,b4 as j,be as C,q as r,b0 as H,bW as I,E as u,m as n,b7 as O,ao as D,c as d,F as b,a as x,C as z,z as v,n as w,aA as $,b8 as W,b9 as X,H as B,b2 as G,b3 as J}from"./index.08a50e10.js";import{V as Y}from"./VTextField.e230c445.js";import{V as L}from"./VBtn.6ea5676b.js";import{V as Z}from"./VDivider.aa67db92.js";import{V as R,d as ee,a as Q,b as se}from"./VList.c205a119.js";import{V as te}from"./VDialog.54923118.js";import"./VCounter.05f2ecf8.js";import"./dialog-transition.2b7db99f.js";const ae=_=>(G("data-v-dd687002"),_=_(),J(),_),re={class:"d-flex align-center"},le={class:"h-100"},ie={class:"text-xs text-disabled text-uppercase"},oe={class:"h-100"},ne={class:"app-bar-search-suggestions d-flex flex-column align-center justify-center text-high-emphasis h-100"},ce={class:"text-h6 my-3"},ue={key:0,class:"mt-8"},de=ae(()=>n("span",{class:"d-flex justify-center text-disabled"},"Try searching for",-1)),pe=["onClick"],he={class:"text-sm"},fe={__name:"AppBarSearch",props:{isDialogVisible:{type:Boolean,required:!0},searchQuery:{type:String,required:!0},searchResults:{type:Array,required:!0},suggestions:{type:Array,required:!1},noDataSuggestion:{type:Array,required:!1}},emits:["update:isDialogVisible","update:searchQuery","itemSelected"],setup(_,{emit:g}){const i=_,{ctrl_k:K,meta_k:T}=P(),k=y(),o=y(structuredClone(f(i.searchQuery))),U=y(),S=y(structuredClone(f(i.isDialogVisible))),p=y(structuredClone(f(i.searchResults)));A(i,()=>{S.value=structuredClone(f(i.isDialogVisible)),p.value=structuredClone(f(i.searchResults)),o.value=structuredClone(f(i.searchQuery))}),A([K,T],()=>{S.value=!0,g("update:isDialogVisible",!0)});const V=()=>{g("update:isDialogVisible",!1),g("update:searchQuery","")};E(()=>{o.value.length||(p.value=[])});const q=e=>{var c,s;e.key==="ArrowDown"?(e.preventDefault(),(c=k.value)==null||c.focus("next")):e.key==="ArrowUp"&&(e.preventDefault(),(s=k.value)==null||s.focus("prev"))},F=e=>{g("update:isDialogVisible",e),g("update:searchQuery","")},M=e=>e==="dashboards"?"Dashboards":e==="appsPages"?"Apps & Pages":e==="userInterface"?"User Interface":e==="formsTables"?"Forms Tables":e==="chartsMisc"?"Charts Misc":"Misc";return(e,c)=>(l(),m(te,{"max-width":"600","model-value":r(S),height:e.$vuetify.display.smAndUp?"550":"100%",fullscreen:e.$vuetify.display.width<600,class:"app-bar-search-dialog","onUpdate:modelValue":F,onKeyup:I(V,["esc"])},{default:t(()=>[a(j,{height:"100%",width:"100%",class:"position-relative"},{default:t(()=>[a(C,{class:"pt-1",style:{"max-height":"65px"}},{default:t(()=>[a(Y,{ref_key:"refSearchInput",ref:U,modelValue:r(o),"onUpdate:modelValue":[c[0]||(c[0]=s=>H(o)?o.value=s:null),c[1]||(c[1]=s=>e.$emit("update:searchQuery",r(o)))],autofocus:"",variant:"plain",density:"comfortable",class:"app-bar-autocomplete-box",onKeyup:I(V,["esc"]),onKeydown:q},{"prepend-inner":t(()=>[a(L,{icon:"",variant:"text",color:"default",size:"x-small",class:"text-high-emphasis ms-n1"},{default:t(()=>[a(u,{size:"22",icon:"tabler-search"})]),_:1})]),"append-inner":t(()=>[n("div",re,[n("div",{class:"text-base text-disabled cursor-pointer me-2",onClick:V}," [esc] "),a(L,{icon:"",variant:"text",color:"default",size:"x-small",onClick:V},{default:t(()=>[a(u,{size:"22",icon:"tabler-x"})]),_:1})])]),_:1},8,["modelValue","onKeyup"])]),_:1}),a(Z),a(r(O),{options:{wheelPropagation:!1,suppressScrollX:!0},class:"h-100"},{default:t(()=>[D(a(r(R),{ref_key:"refSearchList",ref:k,density:"compact",class:"app-bar-search-list"},{default:t(()=>[(l(!0),d(b,null,x(r(p),s=>(l(),d(b,{key:s.title},["header"in s?(l(),m(r(ee),{key:0,class:"text-disabled"},{default:t(()=>[z(v(M(s.title)),1)]),_:2},1024)):w(e.$slots,"searchResult",{key:1,item:s},()=>[a(r(Q),{link:"",onClick:h=>e.$emit("itemSelected",s)},{prepend:t(()=>[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"])]),append:t(()=>[a(u,{size:"20",icon:"tabler-corner-down-left",class:"enter-icon text-disabled"})]),default:t(()=>[a(se,null,{default:t(()=>[z(v(s.title),1)]),_:2},1024)]),_:2},1032,["onClick"])],!0)],64))),128))]),_:3},512),[[$,r(o).length&&!!r(p).length]]),D(n("div",le,[w(e.$slots,"suggestions",{},()=>[a(C,{class:"app-bar-search-suggestions h-100 pa-10"},{default:t(()=>[i.suggestions?(l(),m(W,{key:0,class:"gap-y-4"},{default:t(()=>[(l(!0),d(b,null,x(i.suggestions,s=>(l(),m(X,{key:s.title,cols:"12",sm:"6",class:"ps-6"},{default:t(()=>[n("p",ie,v(s.title),1),a(r(R),{class:"card-list"},{default:t(()=>[(l(!0),d(b,null,x(s.content,h=>(l(),m(r(Q),{key:h.title,link:"",title:h.title,class:"app-bar-search-suggestion",onClick:_e=>e.$emit("itemSelected",h)},{prepend:t(()=>[a(u,{icon:h.icon,size:"20",class:"me-2"},null,8,["icon"])]),_:2},1032,["title","onClick"]))),128))]),_:2},1024)]),_:2},1024))),128))]),_:1})):B("",!0)]),_:1})],!0)],512),[[$,!!r(p)&&!r(o)]]),D(n("div",oe,[w(e.$slots,"noData",{},()=>[a(C,{class:"h-100"},{default:t(()=>[n("div",ne,[a(u,{size:"75",icon:"tabler-file-x"}),n("h6",ce,' No Result For "'+v(r(o))+'" ',1),i.noDataSuggestion?(l(),d("div",ue,[de,(l(!0),d(b,null,x(i.noDataSuggestion,s=>(l(),d("h6",{key:s.title,class:"app-bar-search-suggestion text-sm font-weight-regular cursor-pointer mt-3",onClick:h=>e.$emit("itemSelected",s)},[a(u,{size:"20",icon:s.icon,class:"me-3"},null,8,["icon"]),n("span",he,v(s.title),1)],8,pe))),128))])):B("",!0)])]),_:1})],!0)],512),[[$,!r(p).length&&r(o).length]])]),_:3})]),_:3})]),_:3},8,["model-value","height","fullscreen","onKeyup"]))}},Se=N(fe,[["__scopeId","data-v-dd687002"]]);export{Se as default};
