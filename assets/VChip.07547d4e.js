import{K as P,aG as q,aH as K,L as A,Q as B,au as _,aw as G,aI as N,aF as H,U as C,M as J,p as l,an as O,N as g,ap as Q,aq as U,as as W,aJ as X,P as j,at as Y,aK as Z,ax as ee,ay as ae,az as le,aB as te,W as se,aL as ne,a7 as ie,aM as oe,av as ue,a2 as I,aC as de,aD as ce,ag as u,E as d,a3 as re,G as S}from"./index.cd0f8983.js";import{a as ve}from"./index.affa8c13.js";const x=Symbol.for("vuetify:v-chip-group");P({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:q},...K({selectedClass:"v-chip--selected"}),...A(),...B(),..._({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:r}=G(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=N(e,x);return H({VChip:{color:C(e,"color"),filter:C(e,"filter"),variant:C(e,"variant")}}),J(()=>{var n;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(n=s.default)==null?void 0:n.call(s,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const me=P({name:"VChip",directives:{Ripple:O},props:{activeClass:String,appendAvatar:String,appendIcon:g,closable:Boolean,closeIcon:{type:g,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:g,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...Q(),...U(),...W(),...X(),...j(),...Y(),...Z(),...A({tag:"span"}),...B(),..._({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:s,emit:r,slots:t}=c;const{borderClasses:v}=ee(e),{colorClasses:f,colorStyles:p,variantClasses:m}=ae(e),{densityClasses:n}=le(e),{elevationClasses:D}=te(e),{roundedClasses:R}=se(e),{sizeClasses:$}=ne(e),{themeClasses:z}=G(e),k=ie(e,"modelValue"),a=oe(e,x,!1),h=ue(e,s);function E(i){k.value=!1,r("click:close",i)}return()=>{var i;const L=h.isLink.value?"a":e.tag,T=!!(t.append||e.appendIcon||e.appendAvatar),F=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,w=!!(t.prepend||e.prependIcon||e.prependAvatar),b=!a||a.isSelected.value,o=!e.disabled&&(!!a||h.isClickable.value||e.link),M=e.link?e.link:a==null?void 0:a.toggle;return k.value&&I(l(L,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":o,"v-chip--filter":V,"v-chip--pill":e.pill},z.value,v.value,b?f.value:void 0,n.value,D.value,R.value,$.value,m.value,a==null?void 0:a.selectedClass.value],style:[b?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:o&&M},{default:()=>{var y;return[ce(o,"v-chip"),V&&l(u,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(ve,null,{default:()=>[I(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(d,null,null)]),[[re,a.isSelected.value]])]})]}),w&&l(u,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(d,{start:!0},null):void 0]}),(y=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?y:e.text,T&&l(u,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(d,{end:!0},null):void 0]}),F&&l(u,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:E},[t.close?t.close():l(d,null,null)])]})]}}),[[de("ripple"),o&&e.ripple,null]])}}});export{me as V};
