import{m as ne}from"./VSelect.03dd780b.js";import{aL as ue,am as V,q as oe,bF as X,aR as ie,a0 as se,aA as re,as as ce,au as ve,k as L,aC as G,av as fe,a3 as E,a4 as J,$ as de,p as f,F as Y,I as R,aq as me,H as he,C as be,aK as ye}from"./index.26b889da.js";import{u as ge,t as $,V as ke,a as W}from"./VList.bb92ce7a.js";import{m as xe,f as Ce,V as Ve}from"./VTextField.93aa309e.js";import{V as Fe}from"./VMenu.0d2d443f.js";import{V as pe}from"./VCheckboxBtn.4065f8cb.js";const Ie=(e,i,t)=>e==null||i==null?-1:e.toString().toLocaleLowerCase().indexOf(i.toString().toLocaleLowerCase()),_e=ue({customFilter:Function,customKeyFilter:Object,filterKeys:[Array,String],filterMode:{type:String,default:"intersection"},noFilter:Boolean},"filter");function we(e,i,t){var m,r;const F=[],s=(m=t==null?void 0:t.default)!=null?m:Ie,w=t!=null&&t.filterKeys?X(t.filterKeys):!1,h=Object.keys((r=t==null?void 0:t.customKeyFilter)!=null?r:{}).length;if(!(e!=null&&e.length))return F;e:for(let a=0;a<e.length;a++){const g=e[a],p={},D={};let b=-1;if(i&&!(t!=null&&t.noFilter)){if(typeof g=="object"){const c=w||Object.keys(g);for(const y of c){var d;const v=ie(g,y,g),C=t==null||(d=t.customKeyFilter)==null?void 0:d[y];if(b=C?C(v,i,g):s(v,i,g),b!==-1&&b!==!1)C?p[y]=b:D[y]=b;else if((t==null?void 0:t.filterMode)==="every")continue e}}else b=s(g,i,g),b!==-1&&b!==!1&&(D.title=b);const M=Object.keys(D).length,P=Object.keys(p).length;if(!M&&!P||(t==null?void 0:t.filterMode)==="union"&&P!==h&&!M||(t==null?void 0:t.filterMode)==="intersection"&&(P!==h||!M))continue}F.push({index:a,matches:{...D,...p}})}return F}function De(e,i,t){const F=V(()=>typeof(t==null?void 0:t.value)!="string"&&typeof(t==null?void 0:t.value)!="number"?"":String(t.value));return{filteredItems:V(()=>{const w=oe(i);return we(w,F.value,{customKeyFilter:e.customKeyFilter,default:e.customFilter,filterKeys:e.filterKeys,filterMode:e.filterMode,noFilter:e.noFilter}).map(d=>{let{index:m,matches:r}=d;return{item:w[m],matches:r}})})}}function Ke(e,i,t){if(Array.isArray(i))throw new Error("Multiple matches is not implemented");return typeof i=="number"&&~i?f(Y,null,[f("span",{class:"v-combobox__unmask"},[e.substr(0,i)]),f("span",{class:"v-combobox__mask"},[e.substr(i,t)]),f("span",{class:"v-combobox__unmask"},[e.substr(i+t)])]):e}const Te=se()({name:"VCombobox",props:{delimiters:Array,..._e({filterKeys:["title"]}),...ne({hideNoData:!0,returnObject:!0}),...re(xe({modelValue:null}),["validationValue","dirty","appendInnerIcon"]),...ce({transition:!1})},emits:{"update:modelValue":e=>!0,"update:search":e=>!0,"update:menu":e=>!0},setup(e,i){var H;var t;let{emit:F,slots:s}=i;const{t:w}=ve(),h=L(),d=L(!1),m=L(!0),r=G(e,"menu"),a=L(-1),g=V(()=>{var l;return(l=h.value)==null?void 0:l.color}),{items:p,transformIn:D,transformOut:b}=ge(e),{textColorClasses:M,textColorStyles:P}=fe(g),c=G(e,"modelValue",[],l=>D(X(l||[])),l=>{var n;const u=b(l);return e.multiple?u:(n=u[0])!=null?n:null}),y=L(e.multiple?"":(H=(t=c.value[0])==null?void 0:t.title)!=null?H:""),v=V({get:()=>y.value,set:l=>{var u;if(y.value=l,e.multiple||(c.value=[$(e,l)]),l&&e.multiple&&(u=e.delimiters)!=null&&u.length){const n=l.split(new RegExp(`(?:${e.delimiters.join("|")})+`));n.length>1&&(n.forEach(k=>{k=k.trim(),k&&I($(e,k))}),y.value="")}l||(a.value=-1),d.value&&(r.value=!0),m.value=!l}});E(y,l=>{F("update:search",l)}),E(c,l=>{var n;if(!e.multiple){var u;y.value=(n=(u=l[0])==null?void 0:u.title)!=null?n:""}});const{filteredItems:C}=De(e,p,V(()=>m.value?void 0:v.value)),K=V(()=>c.value.map(l=>p.value.find(u=>u.value===l.value)||l)),N=V(()=>K.value.map(l=>l.props.value)),U=V(()=>K.value[a.value]),B=L();function Z(l){c.value=[],e.openOnClear&&(r.value=!0)}function z(){e.hideNoData&&!p.value.length||e.readonly||(r.value=!0)}function q(l){if(e.readonly)return;const u=h.value.selectionStart,n=N.value.length;if(a.value>-1&&l.preventDefault(),["Enter","ArrowDown"].includes(l.key)&&(r.value=!0),["Escape"].includes(l.key)&&(r.value=!1),["Enter","Escape","Tab"].includes(l.key)&&(m.value=!0),l.key==="ArrowDown"){var k;l.preventDefault(),(k=B.value)==null||k.focus("next")}else if(l.key==="ArrowUp"){var S;l.preventDefault(),(S=B.value)==null||S.focus("prev")}if(!!e.multiple){if(["Backspace","Delete"].includes(l.key)){if(a.value<0){l.key==="Backspace"&&!v.value&&(a.value=n-1);return}I(U.value),J(()=>!U.value&&(a.value=n-2))}if(l.key==="ArrowLeft"){if(a.value<0&&u>0)return;const o=a.value>-1?a.value-1:n-1;K.value[o]?a.value=o:(a.value=-1,h.value.setSelectionRange(v.value.length,v.value.length))}if(l.key==="ArrowRight"){if(a.value<0)return;const o=a.value+1;K.value[o]?a.value=o:(a.value=-1,h.value.setSelectionRange(0,0))}l.key==="Enter"&&(I($(e,v.value)),v.value="")}}function ee(){d.value&&(m.value=!0)}function I(l){if(e.multiple){const u=N.value.findIndex(n=>n===l.value);if(u===-1)c.value=[...c.value,l];else{const n=[...c.value];n.splice(u,1),c.value=n}v.value=""}else c.value=[l],y.value=l.title,J(()=>{r.value=!1,m.value=!0})}function le(l){d.value=!0}function te(l){if(l.relatedTarget==null){var u;(u=h.value)==null||u.focus()}}return E(C,l=>{!l.length&&e.hideNoData&&(r.value=!1)}),E(d,l=>{if(l)a.value=-1;else{if(r.value=!1,!e.multiple||!v.value)return;c.value=[...c.value,$(e,v.value)],v.value=""}}),de(()=>{const l=!!(e.chips||s.chip),[u]=Ce(e);return f(Ve,R({ref:h},u,{modelValue:v.value,"onUpdate:modelValue":[n=>v.value=n,n=>{n==null&&(c.value=[])}],validationValue:c.externalValue,dirty:c.value.length>0,class:["v-combobox",{"v-combobox--active-menu":r.value,"v-combobox--chips":!!e.chips,"v-combobox--selecting-index":a.value>-1,[`v-combobox--${e.multiple?"multiple":"single"}`]:!0}],appendInnerIcon:e.items.length?e.menuIcon:void 0,readonly:e.readonly,"onClick:clear":Z,"onClick:control":z,"onClick:input":z,onFocus:()=>d.value=!0,onBlur:()=>d.value=!1,onKeydown:q}),{...s,default:()=>{var n,k,S;return f(Y,null,[f(Fe,R({modelValue:r.value,"onUpdate:modelValue":o=>r.value=o,activator:"parent",contentClass:"v-combobox__content",eager:e.eager,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:ee},e.menuProps),{default:()=>[f(ke,{ref:B,selected:N.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:o=>o.preventDefault(),onFocusin:le,onFocusout:te},{default:()=>{var o;return[!C.value.length&&!e.hideNoData&&((o=(n=s["no-data"])==null?void 0:n.call(s))!=null?o:f(W,{title:w(e.noDataText)},null)),(k=s["prepend-item"])==null?void 0:k.call(s),C.value.map((_,O)=>{var Q;var A;let{item:x,matches:ae}=_;return(Q=(A=s.item)==null?void 0:A.call(s,{item:x,index:O,props:R(x.props,{onClick:()=>I(x)})}))!=null?Q:f(W,R({key:O},x.props,{onClick:()=>I(x)}),{prepend:T=>{let{isSelected:j}=T;return e.multiple&&!e.hideSelected?f(pe,{modelValue:j,ripple:!1},null):void 0},title:()=>{var j;var T;return m.value?x.title:Ke(x.title,ae.title,(j=(T=v.value)==null?void 0:T.length)!=null?j:0)}})}),(S=s["append-item"])==null?void 0:S.call(s)]}})]}),K.value.map((o,_)=>{function O(x){x.stopPropagation(),x.preventDefault(),I(o)}const A={"onClick:close":O,modelValue:!0,"onUpdate:modelValue":void 0};return f("div",{key:o.value,class:["v-combobox__selection",_===a.value&&["v-combobox__selection--selected",M.value]],style:_===a.value?P.value:{}},[l?f(me,{defaults:{VChip:{closable:e.closableChips,size:"small",text:o.title}}},{default:()=>[s.chip?s.chip({item:o,index:_,props:A}):f(he,A,null)]}):s.selection?s.selection({item:o,index:_}):f("span",{class:"v-combobox__selection-text"},[o.title,e.multiple&&_<K.value.length-1&&f("span",{class:"v-combobox__selection-comma"},[be(",")])])])})])}})}),ye({isFocused:d,isPristine:m,menu:r,search:v,selectionIndex:a,filteredItems:C,select:I},h)}});export{Te as V};