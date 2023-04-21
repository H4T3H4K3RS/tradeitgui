import{K as S,p as f,H as P,T as y,aN as v,aO as T,aP as p,aQ as B,aR as V,Q as k,aw as D,S as q,U as A,aa as R,aS as x,M as F}from"./index.cd0f8983.js";const O=S({name:"VDialogTransition",props:{target:Object},setup(n,s){let{slots:t}=s;const r={onBeforeEnter(e){e.style.pointerEvents="none",e.style.visibility="hidden"},async onEnter(e,c){var i;await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),e.style.visibility="";const{x:a,y:d,sx:h,sy:g,speed:l}=C(n.target,e),m=v(e,[{transform:`translate(${a}px, ${d}px) scale(${h}, ${g})`,opacity:0},{transform:""}],{duration:225*l,easing:T});(i=w(e))==null||i.forEach(o=>{v(o,[{opacity:0},{opacity:0,offset:.33},{opacity:1}],{duration:225*2*l,easing:p})}),m.finished.then(()=>c())},onAfterEnter(e){e.style.removeProperty("pointer-events")},onBeforeLeave(e){e.style.pointerEvents="none"},async onLeave(e,c){var i;await new Promise(o=>requestAnimationFrame(o));const{x:a,y:d,sx:h,sy:g,speed:l}=C(n.target,e);v(e,[{transform:""},{transform:`translate(${a}px, ${d}px) scale(${h}, ${g})`,opacity:0}],{duration:125*l,easing:B}).finished.then(()=>c()),(i=w(e))==null||i.forEach(o=>{v(o,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*l,easing:p})})},onAfterLeave(e){e.style.removeProperty("pointer-events")}};return()=>n.target?f(y,P({name:"dialog-transition"},r,{css:!1}),t):f(y,{name:"dialog-transition"},t)}});function w(n){var s;const t=(s=n.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:s.children;return t&&[...t]}function C(n,s){const t=n.getBoundingClientRect(),r=V(s),[e,c]=getComputedStyle(s).transformOrigin.split(" ").map(E=>parseFloat(E)),[i,a]=getComputedStyle(s).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=t.left+t.width/2;i==="left"||a==="left"?d-=t.width/2:(i==="right"||a==="right")&&(d+=t.width/2);let h=t.top+t.height/2;i==="top"||a==="top"?h-=t.height/2:(i==="bottom"||a==="bottom")&&(h+=t.height/2);const g=t.width/r.width,l=t.height/r.height,m=Math.max(1,g,l),o=g/m||0,b=l/m||0,u=r.width*r.height/(window.innerWidth*window.innerHeight),$=u>.12?Math.min(1.5,(u-.12)*10+1):1;return{x:d-(e+r.left),y:h-(c+r.top),sx:o,sy:b,speed:$}}const W=S({name:"VDivider",props:{color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...k()},setup(n,s){let{attrs:t}=s;const{themeClasses:r}=D(n),{backgroundColorClasses:e,backgroundColorStyles:c}=q(A(n,"color")),i=R(()=>{const a={};return n.length&&(a[n.vertical?"maxHeight":"maxWidth"]=x(n.length)),n.thickness&&(a[n.vertical?"borderRightWidth":"borderTopWidth"]=x(n.thickness)),a});return F(()=>f("hr",{class:[{"v-divider":!0,"v-divider--inset":n.inset,"v-divider--vertical":n.vertical},r.value,e.value],style:[i.value,c.value],"aria-orientation":!t.role||t.role==="separator"?n.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}});export{W as V,O as a};
