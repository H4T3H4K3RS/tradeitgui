import{v as h,o as n,b as i,x as t,D as V,C as o,z as l,q as e,H as u,I as g,p as a,J as v,K as c,L as D,G as p,M as d,N as b,O as x,P as y,Q as L,j as $}from"./index.2deb187d.js";import{V as k}from"./VListItemAction.11e0ffc3.js";const f=s=>s===-1?{status:"Banned",chip:{color:"warning"}}:s===1?{status:"User",chip:{color:"success"}}:s===2?{status:"Moderator",chip:{color:"primary"}}:s===9?{status:"Admin",chip:{color:"error"}}:{status:"Unauthorized",chip:{color:"info"}},B={__name:"UserProfile",setup(s){const r=h(),m=$(),_=()=>{r.logout(),m.go(0)};return(w,C)=>(n(),i(V,{rounded:"",class:"cursor-pointer",color:"primary",variant:"tonal"},{default:t(()=>[o(l(e(r).$state.userData.email)+"\xA0 ",1),e(r).$state.userData.rating?(n(),i(u,{key:0,variant:"elevated",color:"warning","append-icon":"tabler-star"},{default:t(()=>[o(l(e(r).$state.userData.rating),1)]),_:1})):g("",!0),a(L,{"open-on-hover":"",activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[a(v,null,{default:t(()=>[a(c,null,{prepend:t(()=>[a(k,{start:""},{default:t(()=>[a(D,{color:"primary",variant:"tonal"},{default:t(()=>[a(p,{icon:"tabler-user"})]),_:1})]),_:1})]),default:t(()=>[a(d,{class:"font-weight-semibold"},{default:t(()=>[o(l(e(r).$state.userData.email),1)]),_:1}),a(b,null,{default:t(()=>[a(u,x({label:""},e(f)(e(r).$state.userData.role).chip,{size:"small"}),{default:t(()=>[o(l(e(f)(e(r).$state.userData.role).status),1)]),_:1},16)]),_:1})]),_:1}),a(y,{class:"my-2"}),a(c,{link:"",onClick:_},{prepend:t(()=>[a(p,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[a(d,null,{default:t(()=>[o("\u0412\u044B\u0439\u0442\u0438")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{B as default};