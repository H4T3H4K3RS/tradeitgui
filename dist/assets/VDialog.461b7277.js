import{aY as h,bf as y,bg as x,aG as E,bh as P,k as S,b9 as D,au as f,aN as O,a6 as w,bi as A,p as m,bj as B,O as g,bk as I,bl as R}from"./index.b24e0408.js";const $=h()({name:"VDialog",props:{fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...y({origin:"center center",scrollStrategy:"block",transition:{component:x},zIndex:2400})},emits:{"update:modelValue":r=>!0},setup(r,b){let{slots:i}=b;const n=E(r,"modelValue"),{scopeId:p}=P(),a=S();function c(t){var e,l;const s=t.relatedTarget,o=t.target;if(s!==o&&(e=a.value)!=null&&e.contentEl&&(l=a.value)!=null&&l.globalTop&&![document,a.value.contentEl].includes(o)&&!a.value.contentEl.contains(o)){const u=[...a.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(v=>!v.hasAttribute("disabled")&&!v.matches('[tabindex="-1"]'));if(!u.length)return;const d=u[0],V=u[u.length-1];s===d?V.focus():d.focus()}}return D&&f(()=>n.value&&r.retainFocus,t=>{t?document.addEventListener("focusin",c):document.removeEventListener("focusin",c)},{immediate:!0}),f(n,async t=>{if(await O(),t){var e;(e=a.value.contentEl)==null||e.focus({preventScroll:!0})}else{var l;(l=a.value.activatorEl)==null||l.focus({preventScroll:!0})}}),w(()=>{const[t]=A(r);return m(I,g({ref:a,class:["v-dialog",{"v-dialog--fullscreen":r.fullscreen,"v-dialog--scrollable":r.scrollable}]},t,{modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,"aria-role":"dialog","aria-modal":"true",activatorProps:g({"aria-haspopup":"dialog","aria-expanded":String(n.value)},r.activatorProps)},p),{activator:i.activator,default:function(){for(var e,l=arguments.length,s=new Array(l),o=0;o<l;o++)s[o]=arguments[o];return m(B,{root:!0},{default:()=>[(e=i.default)==null?void 0:e.call(i,...s)]})}})}),R({},a)}});export{$ as V};
