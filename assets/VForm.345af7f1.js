import{e as p,g as v}from"./VCounter.3b11b0ca.js";import{J as b,k as h,$ as V,p as F,aK as R}from"./index.0f395c90.js";const D=b({name:"VForm",props:{...p()},emits:{"update:modelValue":r=>!0,submit:r=>!0},setup(r,i){let{slots:s,emit:u}=i;const o=v(r),n=h();function m(t){t.preventDefault(),o.reset()}function f(t){const a=t,e=o.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),u("submit",a),a.defaultPrevented||e.then(d=>{let{valid:c}=d;if(c){var l;(l=n.value)==null||l.submit()}}),a.preventDefault()}return V(()=>{var t;return F("form",{ref:n,class:"v-form",novalidate:!0,onReset:m,onSubmit:f},[(t=s.default)==null?void 0:t.call(s,o)])}),R(o,n)}});export{D as V};
