import{o as l,b as r,x as a,p as s,G as g,Q as p,J as m,c as _,F as d,a as f,K as L,M as h,C as b,z as v,D as x,t as C}from"./index.b24e0408.js";const V={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(i,{emit:c}){const n=i,{locale:o}=useI18n({useScope:"global"});return(t,u)=>(l(),r(x,{icon:"",variant:"text",color:"default",size:"small"},{default:a(()=>[s(g,{icon:"tabler-language",size:"24"}),s(p,{activator:"parent",location:n.location,offset:"14px"},{default:a(()=>[s(m,{"min-width":"175px"},{default:a(()=>[(l(!0),_(d,null,f(n.languages,e=>(l(),r(L,{key:e.i18nLang,value:e.i18nLang,onClick:k=>{o.value=e.i18nLang,t.$emit("change",e.i18nLang)}},{default:a(()=>[s(h,null,{default:a(()=>[b(v(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1})]),_:1},8,["location"])]),_:1}))}},y={__name:"NavBarI18n",setup(i){const{isAppRtl:c}=C(),n=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],o=t=>{c.value=t==="ar"};return(t,u)=>(l(),r(V,{languages:n,onChange:o}))}};export{y as default};
