import{o as r,b as l,x as a,p as o,E as p,c as m,F as g,a as f,C as _,z as d,t as L}from"./index.d764a294.js";import{V as h}from"./VMenu.31213ad9.js";import{V,a as b,b as v}from"./VList.4de0adb2.js";import{V as x}from"./VBtn.5fef2a98.js";import"./dialog-transition.a6537768.js";import"./VDivider.65832050.js";const C={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(i,{emit:c}){const t=i,{locale:s}=useI18n({useScope:"global"});return(n,u)=>(r(),l(x,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[o(p,{icon:"tabler-language",size:"24"}),o(h,{activator:"parent",location:t.location,offset:"14px"},{default:a(()=>[o(V,{"min-width":"175px"},{default:a(()=>[(r(!0),m(g,null,f(t.languages,e=>(r(),l(b,{key:e.i18nLang,value:e.i18nLang,onClick:k=>{s.value=e.i18nLang,n.$emit("change",e.i18nLang)}},{default:a(()=>[o(v,null,{default:a(()=>[_(d(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},F={__name:"NavBarI18n",setup(i){const{isAppRtl:c}=L(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],s=n=>{c.value=n==="ar"};return(n,u)=>(r(),l(C,{languages:t,onChange:s}))}};export{F as default};