import{aX as ne,aY as le,X as F,Y as oe,aI as ye,aH as ae,a2 as Se,aZ as se,k as S,aw as y,au as ie,p as m,D as j,a6 as p,a9 as ue,a_ as xe,a$ as Ce,b0 as Te,b1 as we,R as U,b2 as re,b3 as ke,b4 as Be,b5 as ze,b6 as _e,aa as Ie,a8 as Ve,aP as q,aN as Ee,S as Y,b7 as Re,b8 as $e,aK as J,b9 as He,ba as Z,G as Q,bb as Me,bc as Pe,a3 as Ae,a7 as Oe,O as ce,bd as pe,be as Xe,aC as Ye,aG as Fe,aO as Le,$ as Ge,a0 as $,aJ as We}from"./index.6ab7cdf7.js";const De=e=>{const{touchstartX:n,touchendX:l,touchstartY:t,touchendY:r}=e,s=.5,o=16;e.offsetX=l-n,e.offsetY=r-t,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&l<n-o&&e.left(e),e.right&&l>n+o&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<t-o&&e.up(e),e.down&&r>t+o&&e.down(e))};function je(e,n){var l;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(l=n.start)==null||l.call(n,{originalEvent:e,...n})}function qe(e,n){var l;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(l=n.end)==null||l.call(n,{originalEvent:e,...n}),De(n)}function Ue(e,n){var l;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(l=n.move)==null||l.call(n,{originalEvent:e,...n})}function Ke(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:l=>je(l,n),touchend:l=>qe(l,n),touchmove:l=>Ue(l,n)}}function Ne(e,n){var i,c;var l;const t=n.value,r=t!=null&&t.parent?e.parentElement:e,s=(i=t==null?void 0:t.options)!=null?i:{passive:!0},o=(l=n.instance)==null?void 0:l.$.uid;if(!r||!o)return;const a=Ke(n.value);r._touchHandlers=(c=r._touchHandlers)!=null?c:Object.create(null),r._touchHandlers[o]=a,ne(a).forEach(v=>{r.addEventListener(v,a[v],s)})}function Je(e,n){var l,t;const r=(l=n.value)!=null&&l.parent?e.parentElement:e,s=(t=n.instance)==null?void 0:t.$.uid;if(!(r!=null&&r._touchHandlers)||!s)return;const o=r._touchHandlers[s];ne(o).forEach(a=>{r.removeEventListener(a,o[a])}),delete r._touchHandlers[s]}const ve={mounted:Ne,unmounted:Je},Ze=ve,de=Symbol.for("vuetify:v-window"),fe=Symbol.for("vuetify:v-window-group"),st=le()({name:"VWindow",directives:{Touch:ve},props:{continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{default:"force"},...F(),...oe()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{themeClasses:t}=ye(e),{isRtl:r}=ae(),{t:s}=Se(),o=se(e,fe),a=S(),i=y(()=>r.value?!e.reverse:e.reverse),c=S(!1),v=y(()=>{const f=e.direction==="vertical"?"y":"x",T=(i.value?!c.value:c.value)?"-reverse":"";return`v-window-${f}${T}-transition`}),x=S(0),C=S(void 0),h=y(()=>o.items.value.findIndex(f=>o.selected.value.includes(f.id)));ie(h,(f,b)=>{const T=o.items.value.length,z=T-1;T<=2?c.value=f<b:f===z&&b===0?c.value=!0:f===0&&b===z?c.value=!1:c.value=f<b}),Ce(de,{transition:v,isReversed:c,transitionCount:x,transitionHeight:C,rootRef:a});const g=y(()=>e.continuous||h.value!==0),I=y(()=>e.continuous||h.value!==o.items.value.length-1);function E(){g.value&&o.prev()}function V(){I.value&&o.next()}const k=y(()=>{const f=[],b={icon:r.value?e.nextIcon:e.prevIcon,class:`v-window__${i.value?"right":"left"}`,onClick:o.prev,ariaLabel:s("$vuetify.carousel.prev")};f.push(g.value?l.prev?l.prev({props:b}):m(j,b,null):m("div",null,null));const T={icon:r.value?e.prevIcon:e.nextIcon,class:`v-window__${i.value?"left":"right"}`,onClick:o.next,ariaLabel:s("$vuetify.carousel.next")};return f.push(I.value?l.next?l.next({props:T}):m(j,T,null):m("div",null,null)),f}),B=y(()=>e.touch===!1?e.touch:{...{left:()=>{i.value?E():V()},right:()=>{i.value?V():E()},start:b=>{let{originalEvent:T}=b;T.stopPropagation()}},...e.touch===!0?{}:e.touch});return p(()=>{var f,b;return ue(m(e.tag,{ref:a,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},t.value]},{default:()=>[m("div",{class:"v-window__container",style:{height:C.value}},[(f=l.default)==null?void 0:f.call(l,{group:o}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[k.value])]),(b=l.additional)==null?void 0:b.call(l,{group:o})]}),[[xe("touch"),B.value]])}),{group:o}}});function Qe(){const e=S(!1);return Te(()=>{window.requestAnimationFrame(()=>{e.value=!0})}),{ssrBootStyles:y(()=>e.value?void 0:{transition:"none !important"}),isBooted:we(e)}}const it=U({name:"VWindowItem",directives:{Touch:Ze},props:{reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...re(),...ke()},emits:{"group:selected":e=>!0},setup(e,n){let{slots:l}=n;const t=Be(de),r=ze(e,fe),{isBooted:s}=Qe();if(!t||!r)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const o=S(!1),a=y(()=>t.isReversed.value?e.reverseTransition!==!1:e.transition!==!1);function i(){!o.value||!t||(o.value=!1,t.transitionCount.value>0&&(t.transitionCount.value-=1,t.transitionCount.value===0&&(t.transitionHeight.value=void 0)))}function c(){if(!(o.value||!t)){if(o.value=!0,t.transitionCount.value===0){var g;t.transitionHeight.value=q((g=t.rootRef.value)==null?void 0:g.clientHeight)}t.transitionCount.value+=1}}function v(){i()}function x(g){!o.value||Ee(()=>{!a.value||!o.value||!t||(t.transitionHeight.value=q(g.clientHeight))})}const C=y(()=>{const g=t.isReversed.value?e.reverseTransition:e.transition;return a.value?{name:typeof g!="string"?t.transition.value:g,onBeforeEnter:c,onAfterEnter:i,onEnterCancelled:v,onBeforeLeave:c,onAfterLeave:i,onLeaveCancelled:v,onEnter:x}:!1}),{hasContent:h}=_e(e,r.isSelected);return p(()=>{var g;return m(Ve,{transition:s.value&&C.value},{default:()=>[ue(m("div",{class:["v-window-item",r.selectedClass.value]},[h.value&&((g=l.default)==null?void 0:g.call(l))]),[[Ie,r.isSelected.value]])]})}),{}}});function ee(e){const l=Math.abs(e);return Math.sign(e)*(l/((1/.501-2)*(1-l)+1))}function te(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:r,currentScrollOffset:s,isHorizontal:o}=e;const a=o?n.clientWidth:n.clientHeight,i=o?n.offsetLeft:n.offsetTop,c=r&&o?t-i-a:i,v=l+s,x=a+c,C=a*.4;return c<=s?s=Math.max(c-C,0):v<=x&&(s=Math.min(s-(v-x-C),t-l)),s}function et(e){let{selectedElement:n,containerSize:l,contentSize:t,isRtl:r,isHorizontal:s}=e;const o=s?n.clientWidth:n.clientHeight,a=s?n.offsetLeft:n.offsetTop,i=r&&s?t-a-o/2-l/2:a+o/2-l/2;return Math.min(t-l,Math.max(0,i))}const tt=Symbol.for("vuetify:v-slide-group"),nt=le()({name:"VSlideGroup",props:{centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:tt},nextIcon:{type:Y,default:"$next"},prevIcon:{type:Y,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...F(),...Re({selectedClass:"v-slide-group-item--active"})},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const{isRtl:t}=ae(),{mobile:r}=$e(),s=se(e,e.symbol),o=S(!1),a=S(0),i=S(0),c=S(0),v=y(()=>e.direction==="horizontal"),{resizeRef:x,contentRect:C}=J(),{resizeRef:h,contentRect:g}=J(),I=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[0]):-1),E=y(()=>s.selected.value.length?s.items.value.findIndex(u=>u.id===s.selected.value[s.selected.value.length-1]):-1);if(He){let u=-1;ie(()=>[s.selected.value,C.value,g.value,v.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(C.value&&g.value){const d=v.value?"width":"height";i.value=C.value[d],c.value=g.value[d],o.value=i.value+1<c.value}if(I.value>=0&&h.value){const d=h.value.children[E.value];I.value===0||!o.value?a.value=0:e.centerActive?a.value=et({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,isHorizontal:v.value}):o.value&&(a.value=te({selectedElement:d,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value}))}})})}const V=S(!1);let k=0,B=0;function f(u){const d=v.value?"clientX":"clientY";B=(t.value&&v.value?-1:1)*a.value,k=u.touches[0][d],V.value=!0}function b(u){if(!o.value)return;const d=v.value?"clientX":"clientY",_=t.value&&v.value?-1:1;a.value=_*(B+k-u.touches[0][d])}function T(u){const d=c.value-i.value;a.value<0||!o.value?a.value=0:a.value>=d&&(a.value=d),V.value=!1}function z(){!x.value||(x.value[v.value?"scrollLeft":"scrollTop"]=0)}const H=S(!1);function L(u){if(H.value=!0,!(!o.value||!h.value)){for(const d of u.composedPath())for(const _ of h.value.children)if(_===d){a.value=te({selectedElement:_,containerSize:i.value,contentSize:c.value,isRtl:t.value,currentScrollOffset:a.value,isHorizontal:v.value});return}}}function R(u){H.value=!1}function G(u){var d;!H.value&&!(u.relatedTarget&&(d=h.value)!=null&&d.contains(u.relatedTarget))&&w()}function K(u){!h.value||(v.value?u.key==="ArrowRight"?w(t.value?"prev":"next"):u.key==="ArrowLeft"&&w(t.value?"next":"prev"):u.key==="ArrowDown"?w("next"):u.key==="ArrowUp"&&w("prev"),u.key==="Home"?w("first"):u.key==="End"&&w("last"))}function w(u){if(!!h.value)if(u){if(u==="next"){var _;const M=(_=h.value.querySelector(":focus"))==null?void 0:_.nextElementSibling;M?M.focus():w("first")}else if(u==="prev"){var A;const M=(A=h.value.querySelector(":focus"))==null?void 0:A.previousElementSibling;M?M.focus():w("last")}else if(u==="first"){var O;(O=h.value.firstElementChild)==null||O.focus()}else if(u==="last"){var N;(N=h.value.lastElementChild)==null||N.focus()}}else{var d;(d=[...h.value.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')].filter(be=>!be.hasAttribute("disabled"))[0])==null||d.focus()}}function P(u){const d=a.value+(u==="prev"?-1:1)*i.value;a.value=Me(d,0,c.value-i.value)}const X=y(()=>{let u=a.value>c.value-i.value?-(c.value-i.value)+ee(c.value-i.value-a.value):-a.value;a.value<=0&&(u=ee(-a.value));const d=t.value&&v.value?-1:1;return{transform:`translate${v.value?"X":"Y"}(${d*u}px)`,transition:V.value?"none":"",willChange:V.value?"transform":""}}),W=y(()=>({next:s.next,prev:s.prev,select:s.select,isSelected:s.isSelected})),D=y(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return o.value||Math.abs(a.value)>0;case"mobile":return r.value||o.value||Math.abs(a.value)>0;default:return!r.value&&(o.value||Math.abs(a.value)>0)}}),me=y(()=>Math.abs(a.value)>0),ge=y(()=>c.value>Math.abs(a.value)+i.value);return p(()=>{var u,d,_;return m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!v.value,"v-slide-group--has-affixes":D.value,"v-slide-group--is-overflowing":o.value}],tabindex:H.value||s.selected.value.length?-1:0,onFocus:G},{default:()=>{var A,O;return[D.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!me.value}],onClick:()=>P("prev")},[(A=(u=l.prev)==null?void 0:u.call(l,W.value))!=null?A:m(Z,null,{default:()=>[m(Q,{icon:t.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:x,class:"v-slide-group__container",onScroll:z},[m("div",{ref:h,class:"v-slide-group__content",style:X.value,onTouchstartPassive:f,onTouchmovePassive:b,onTouchendPassive:T,onFocusin:L,onFocusout:R,onKeydown:K},[(d=l.default)==null?void 0:d.call(l,W.value)])]),D.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!ge.value}],onClick:()=>P("next")},[(O=(_=l.next)==null?void 0:_.call(l,W.value))!=null?O:m(Z,null,{default:()=>[m(Q,{icon:t.value?e.prevIcon:e.nextIcon},null)]})])]}})}),{selected:s.selected,scrollTo:P,scrollOffset:a,focus:w}}});const he=Symbol.for("vuetify:v-tabs"),lt=U({name:"VTab",props:{fixed:Boolean,icon:[Boolean,String,Function,Object],prependIcon:Y,appendIcon:Y,stacked:Boolean,title:String,ripple:{type:Boolean,default:!0},color:String,sliderColor:String,hideSlider:Boolean,direction:{type:String,default:"horizontal"},...F(),...Pe(),...re({selectedClass:"v-tab--selected"}),...oe()},setup(e,n){let{slots:l,attrs:t}=n;const{textColorClasses:r,textColorStyles:s}=Ae(e,"sliderColor"),o=y(()=>e.direction==="horizontal"),a=S(!1),i=S(),c=S();function v(x){let{value:C}=x;if(a.value=C,C){var h,g;const I=(h=i.value)==null||(g=h.$el.parentElement)==null?void 0:g.querySelector(".v-tab--selected .v-tab__slider"),E=c.value;if(!I||!E)return;const V=getComputedStyle(I).color,k=I.getBoundingClientRect(),B=E.getBoundingClientRect(),f=o.value?"x":"y",b=o.value?"X":"Y",T=o.value?"right":"bottom",z=o.value?"width":"height",H=k[f],L=B[f],R=H>L?k[T]-B[T]:k[f]-B[f],G=Math.sign(R)>0?o.value?"right":"bottom":Math.sign(R)<0?o.value?"left":"top":"center",w=(Math.abs(R)+(Math.sign(R)<0?k[z]:B[z]))/Math.max(k[z],B[z]),P=k[z]/B[z],X=1.5;pe(E,{backgroundColor:[V,""],transform:[`translate${b}(${R}px) scale${b}(${P})`,`translate${b}(${R/X}px) scale${b}(${(w-1)/X+1})`,""],transformOrigin:Array(3).fill(G)},{duration:225,easing:Xe})}}return p(()=>{const[x]=Oe(e,["href","to","replace","icon","stacked","prependIcon","appendIcon","ripple","theme","disabled","selectedClass","value","color"]);return m(j,ce({_as:"VTab",symbol:he,ref:i,class:["v-tab"],tabindex:a.value?0:-1,role:"tab","aria-selected":String(a.value),active:!1,block:e.fixed,maxWidth:e.fixed?300:void 0,variant:"text",rounded:0},x,t,{"onGroup:selected":v}),{default:()=>[l.default?l.default():e.title,!e.hideSlider&&m("div",{ref:c,class:["v-tab__slider",r.value],style:s.value},null)]})}),{}}});function ot(e){return e?e.map(n=>typeof n=="string"?{title:n,value:n}:n):[]}const ut=U({name:"VTabs",props:{alignTabs:{type:String,default:"start"},color:String,direction:{type:String,default:"horizontal"},fixedTabs:Boolean,items:{type:Array,default:()=>[]},stacked:Boolean,bgColor:String,grow:Boolean,height:{type:[Number,String],default:void 0},hideSlider:Boolean,sliderColor:String,modelValue:null,mandatory:{type:[Boolean,String],default:"force"},...Ye(),...F()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:l}=n;const t=Fe(e,"modelValue"),r=y(()=>ot(e.items)),{densityClasses:s}=Le(e),{backgroundColorClasses:o,backgroundColorStyles:a}=Ge($(e,"bgColor"));return We({VTab:{color:$(e,"color"),direction:$(e,"direction"),stacked:$(e,"stacked"),fixed:$(e,"fixedTabs"),sliderColor:$(e,"sliderColor"),hideSlider:$(e,"hideSlider")}}),p(()=>m(nt,{modelValue:t.value,"onUpdate:modelValue":i=>t.value=i,class:["v-tabs",`v-tabs--${e.direction}`,`v-tabs--align-tabs-${e.alignTabs}`,{"v-tabs--fixed-tabs":e.fixedTabs,"v-tabs--grow":e.grow,"v-tabs--stacked":e.stacked},s.value,o.value],style:[{"--v-tabs-height":q(e.height)},a.value],role:"tablist",symbol:he,mandatory:e.mandatory,direction:e.direction},{default:()=>[l.default?l.default():r.value.map(i=>m(lt,ce(i,{key:i.title}),null))]})),{}}});export{ut as V,st as a,lt as b,it as c,Qe as u};