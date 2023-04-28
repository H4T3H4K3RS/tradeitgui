import{I as A,aE as J,aF as K,J as P,O as B,as as _,au as G,aG as N,aD as O,R as C,K as H,p as l,al as M,L as g,an as X,ao as j,aq as Q,aH as U,N as W,ar as Y,aI as Z,av as ee,aw as ae,ax as le,az as te,S as se,aJ as ne,a5 as ie,aK as oe,at as ue,a0 as y,aA as de,aB as ce,ae as u,E as d,a1 as re,G as S}from"./index.06ce4c3e.js";import{a as ve}from"./index.6f29b349.js";const x=Symbol.for("vuetify:v-chip-group");A({name:"VChipGroup",props:{column:Boolean,filter:Boolean,valueComparator:{type:Function,default:J},...K({selectedClass:"v-chip--selected"}),...P(),...B(),..._({variant:"tonal"})},emits:{"update:modelValue":e=>!0},setup(e,c){let{slots:s}=c;const{themeClasses:r}=G(e),{isSelected:t,select:v,next:f,prev:p,selected:m}=N(e,x);return O({VChip:{color:C(e,"color"),filter:C(e,"filter"),variant:C(e,"variant")}}),H(()=>{var n;return l(e.tag,{class:["v-chip-group",{"v-chip-group--column":e.column},r.value]},{default:()=>[(n=s.default)==null?void 0:n.call(s,{isSelected:t,select:v,next:f,prev:p,selected:m.value})]})}),{}}});const me=A({name:"VChip",directives:{Ripple:M},props:{activeClass:String,appendAvatar:String,appendIcon:g,closable:Boolean,closeIcon:{type:g,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,pill:Boolean,prependAvatar:String,prependIcon:g,ripple:{type:Boolean,default:!0},text:String,modelValue:{type:Boolean,default:!0},...X(),...j(),...Q(),...U(),...W(),...Y(),...Z(),...P({tag:"span"}),...B(),..._({variant:"tonal"})},emits:{"click:close":e=>!0,"update:modelValue":e=>!0,"group:selected":e=>!0},setup(e,c){let{attrs:s,emit:r,slots:t}=c;const{borderClasses:v}=ee(e),{colorClasses:f,colorStyles:p,variantClasses:m}=ae(e),{densityClasses:n}=le(e),{elevationClasses:D}=te(e),{roundedClasses:R}=se(e),{sizeClasses:E}=ne(e),{themeClasses:$}=G(e),k=ie(e,"modelValue"),a=oe(e,x,!1),h=ue(e,s);function z(i){k.value=!1,r("click:close",i)}return()=>{var i;const T=h.isLink.value?"a":e.tag,F=!!(t.append||e.appendIcon||e.appendAvatar),L=!!(t.close||e.closable),V=!!(t.filter||e.filter)&&a,w=!!(t.prepend||e.prependIcon||e.prependAvatar),I=!a||a.isSelected.value,o=!e.disabled&&(!!a||h.isClickable.value||e.link),q=e.link?e.link:a==null?void 0:a.toggle;return k.value&&y(l(T,{class:["v-chip",{"v-chip--disabled":e.disabled,"v-chip--label":e.label,"v-chip--link":o,"v-chip--filter":V,"v-chip--pill":e.pill},$.value,v.value,I?f.value:void 0,n.value,D.value,R.value,E.value,m.value,a==null?void 0:a.selectedClass.value],style:[I?p.value:void 0],disabled:e.disabled||void 0,draggable:e.draggable,href:h.href.value,onClick:o&&q},{default:()=>{var b;return[ce(o,"v-chip"),V&&l(u,{key:"filter",defaults:{VIcon:{icon:e.filterIcon}}},{default:()=>[l(ve,null,{default:()=>[y(l("div",{class:"v-chip__filter"},[t.filter?t.filter():l(d,null,null)]),[[re,a.isSelected.value]])]})]}),w&&l(u,{key:"prepend",defaults:{VAvatar:{image:e.prependAvatar},VIcon:{icon:e.prependIcon}}},{default:()=>[t.prepend?l("div",{class:"v-chip__prepend"},[t.prepend()]):e.prependAvatar?l(S,{start:!0},null):e.prependIcon?l(d,{start:!0},null):void 0]}),(b=(i=t.default)==null?void 0:i.call(t,{isSelected:a==null?void 0:a.isSelected.value,selectedClass:a==null?void 0:a.selectedClass.value,select:a==null?void 0:a.select,toggle:a==null?void 0:a.toggle,value:a==null?void 0:a.value.value,disabled:e.disabled}))!=null?b:e.text,F&&l(u,{key:"append",defaults:{VAvatar:{image:e.appendAvatar},VIcon:{icon:e.appendIcon}}},{default:()=>[t.append?l("div",{class:"v-chip__append"},[t.append()]):e.appendAvatar?l(S,{end:!0},null):e.appendIcon?l(d,{end:!0},null):void 0]}),L&&l(u,{key:"close",defaults:{VIcon:{icon:e.closeIcon,size:"x-small"}}},{default:()=>[l("div",{class:"v-chip__close",onClick:z},[t.close?t.close():l(d,null,null)])]})]}}),[[de("ripple"),o&&e.ripple,null]])}}});export{me as V};