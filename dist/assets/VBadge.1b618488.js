import{J as u,O as g,$ as m,p as t,a6 as y,aa as N,N as h,P as _,as as P,at as T,Z as r,X as I,au as L,av as w,aw as A,ah as R,ax as X,ay as Y,an as z,az as D,I as c,E}from"./index.98697618.js";const M=u({name:"VListItemAction",props:{start:Boolean,end:Boolean,...g()},setup(e,a){let{slots:i}=a;return m(()=>t(e.tag,{class:["v-list-item-action",{"v-list-item-action--start":e.start,"v-list-item-action--end":e.end}]},i)),{}}});const O=u({name:"VBadge",inheritAttrs:!1,props:{bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:y,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...N({location:"top end"}),...h(),...g(),..._(),...P({transition:"scale-rotate-transition"})},setup(e,a){const{backgroundColorClasses:i,backgroundColorStyles:b}=T(r(e,"color")),{roundedClasses:v}=I(e),{t:f}=L(),{textColorClasses:C,textColorStyles:x}=w(r(e,"textColor")),{themeClasses:B}=A(),{locationStyles:S}=R(e,!0,o=>{var n,l;return(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(o)?+((n=e.offsetY)!=null?n:0):["left","right"].includes(o)?+((l=e.offsetX)!=null?l:0):0)});return m(()=>{var o,d,n,l;const s=Number(e.content),V=!e.max||isNaN(s)?e.content:s<=e.max?s:`${e.max}+`,[$,k]=X(a.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return t(e.tag,c({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline}]},k),{default:()=>[t("div",{class:"v-badge__wrapper"},[(o=(d=a.slots).default)==null?void 0:o.call(d),t(Y,{transition:e.transition},{default:()=>[z(t("span",c({class:["v-badge__badge",B.value,i.value,v.value,C.value],style:[b.value,x.value,e.inline?{}:S.value],"aria-atomic":"true","aria-label":f(e.label,s),"aria-live":"polite",role:"status"},$),[e.dot?void 0:a.slots.badge?(n=(l=a.slots).badge)==null?void 0:n.call(l):e.icon?t(E,{icon:e.icon},null):V]),[[D,e.modelValue]])]})])]})}),{}}});export{O as V,M as a};