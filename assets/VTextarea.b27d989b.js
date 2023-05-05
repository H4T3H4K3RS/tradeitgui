import{J as Q,bv as W,aC as X,am as V,k as f,bn as Y,a3 as v,aM as Z,$ as ee,bw as te,p as a,I as k,F as I,an as _,ao as ae,bx as ne,aK as le,a4 as N,by as oe,aS as ue,bu as re}from"./index.0f395c90.js";import{m as ie,a as se,u as ce,f as de,b as fe,V as ve,c as xe,d as me}from"./VCounter.3b11b0ca.js";const Ve=Q({name:"VTextarea",directives:{Intersect:W},inheritAttrs:!1,props:{autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,hint:String,persistentHint:Boolean,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,...ie(),...se()},emits:{"click:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,$){let{attrs:y,emit:p,slots:r}=$;const n=X(e,"modelValue"),{isFocused:c,focus:z,blur:T}=ce(e),A=V(()=>typeof e.counterValue=="function"?e.counterValue(n.value):(n.value||"").toString().length),D=V(()=>{if(y.maxlength)return y.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function G(t,l){var o,u;!e.autofocus||!t||(o=l[0].target)==null||(u=o.focus)==null||u.call(o)}const P=f(),x=f(),R=f(""),m=f(),S=V(()=>c.value||e.persistentPlaceholder),M=V(()=>e.messages.length?e.messages:S.value||e.persistentHint?e.hint:"");function C(){if(m.value!==document.activeElement){var t;(t=m.value)==null||t.focus()}c.value||z()}function U(t){C(),p("click:control",t)}function E(t){t.stopPropagation(),C(),N(()=>{n.value="",oe(e["onClick:clear"],t)})}function J(t){n.value=t.target.value}const i=f();function s(){!e.autoGrow||N(()=>{if(!i.value||!x.value)return;const t=getComputedStyle(i.value),l=getComputedStyle(x.value.$el),o=parseFloat(t.getPropertyValue("--v-field-padding-top"))+parseFloat(t.getPropertyValue("--v-input-padding-top"))+parseFloat(t.getPropertyValue("--v-field-padding-bottom")),u=i.value.scrollHeight,F=parseFloat(t.lineHeight),b=Math.max(parseFloat(e.rows)*F+o,parseFloat(l.getPropertyValue("--v-input-control-height"))),w=parseFloat(e.maxRows)*F+o||1/0;R.value=ue(re(u!=null?u:0,b,w))})}Y(s),v(n,s),v(()=>e.rows,s),v(()=>e.maxRows,s),v(()=>e.density,s);let g;return v(i,t=>{if(t)g=new ResizeObserver(s),g.observe(i.value);else{var l;(l=g)==null||l.disconnect()}}),Z(()=>{var t;(t=g)==null||t.disconnect()}),ee(()=>{const t=!!(r.counter||e.counter||e.counterValue),l=!!(t||r.details),[o,u]=te(y),[{modelValue:F,...b}]=de(e),[w]=fe(e);return a(me,k({ref:P,modelValue:n.value,"onUpdate:modelValue":d=>n.value=d,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-text-field--flush-details":["plain","underlined"].includes(e.variant)}],"onClick:prepend":e["onClick:prepend"],"onClick:append":e["onClick:append"]},o,b,{focused:c.value,messages:M.value}),{...r,default:d=>{let{isDisabled:h,isDirty:B,isReadonly:K,isValid:O}=d;return a(ve,k({ref:x,style:{"--v-textarea-control-height":R.value},"onClick:control":U,"onClick:clear":E,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:"textbox"},w,{active:S.value||B.value,dirty:B.value||e.dirty,focused:c.value,error:O.value===!1}),{...r,default:j=>{let{props:{class:H,...q}}=j;return a(I,null,[e.prefix&&a("span",{class:"v-text-field__prefix"},[e.prefix]),_(a("textarea",k({ref:m,class:H,value:n.value,onInput:J,autofocus:e.autofocus,readonly:K.value,disabled:h.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:C,onBlur:T},q,u),null),[[ae("intersect"),{handler:G},null,{once:!0}]]),e.autoGrow&&_(a("textarea",{class:[H,"v-textarea__sizer"],"onUpdate:modelValue":L=>n.value=L,ref:i,readonly:!0,"aria-hidden":"true"},null),[[ne,n.value]]),e.suffix&&a("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:l?d=>{var h;return a(I,null,[(h=r.details)==null?void 0:h.call(r,d),t&&a(I,null,[a("span",null,null),a(xe,{active:e.persistentCounter||c.value,value:A.value,max:D.value},r.counter)])])}:void 0})}),le({},P,x,m)}});export{Ve as V};
