import{a2 as h,a4 as y,a5 as x,a6 as E,k as P,bt as S,ac as f,bh as D,K as w,ad as A,p as m,ae as B,H as g,af as I,ag as O}from"./index.06ce4c3e.js";import{a as R}from"./VDivider.6886f8b3.js";const F=h()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:R},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,p){let{slots:i}=p;const n=x(r,"modelValue"),{scopeId:b}=E(),a=P();function c(t){var e,l;const s=t.relatedTarget,o=t.target;if(s!==o&&(e=a.value)!=null&&e.contentEl&&(l=a.value)!=null&&l.globalTop&&![document,a.value.contentEl].includes(o)&&!a.value.contentEl.contains(o)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],V=u[u.length-1];s===d?V.focus():d.focus()}}return S&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await D(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=a.value.activatorEl)==null||l.focus({preventScroll:!0})}}),w(()=>{const[t]=A(r);return m(I,g({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},b),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return m(B,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),O({},a)}});export{F as V};