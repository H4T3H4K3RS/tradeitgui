import{v as d,o as _,b as V,x as t,p as e,C as s,z as l,q as o,G as h,E as i,H as b,I as g,j as v}from"./index.b1f681d3.js";import{V as u,a as x}from"./VBadge.4fae251e.js";import{V as y}from"./VMenu.19d5f449.js";import{V as D,a as n,b as c,c as B}from"./VList.44694c7a.js";import{V as L}from"./VDivider.d3d05dc6.js";import{V as k}from"./VBtn.5ae6ddde.js";import"./dialog-transition.83f11d7e.js";const f=a=>a===-1?{status:"Banned",chip:{color:"warning"}}:a===1?{status:"User",chip:{color:"success"}}:a===2?{status:"Moderator",chip:{color:"primary"}}:a===9?{status:"Admin",chip:{color:"error"}}:{status:"Unauthorized",chip:{color:"info"}},N={__name:"UserProfile",setup(a){const r=d(),p=v(),m=()=>{r.logout(),p.go(0)};return(w,z)=>(_(),V(u,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",bordered:"",color:"success"},{default:t(()=>[e(k,{rounded:"",class:"cursor-pointer",color:"primary",variant:"tonal","append-icon":"tabler-user"},{default:t(()=>[s(l(o(r).$state.userData.email)+" ",1),e(y,{"open-on-hover":"",activator:"parent",width:"230",location:"bottom end",offset:"14px"},{default:t(()=>[e(D,null,{default:t(()=>[e(n,null,{prepend:t(()=>[e(x,{start:""},{default:t(()=>[e(u,{dot:"",location:"bottom right","offset-x":"3","offset-y":"3",color:"success"},{default:t(()=>[e(h,{color:"primary",variant:"tonal"},{default:t(()=>[e(i,{icon:"tabler-user"})]),_:1})]),_:1})]),_:1})]),default:t(()=>[e(c,{class:"font-weight-semibold"},{default:t(()=>[s(l(o(r).$state.userData.email),1)]),_:1}),e(B,null,{default:t(()=>[e(b,g({label:""},o(f)(o(r).$state.userData.role).chip,{size:"small"}),{default:t(()=>[s(l(o(f)(o(r).$state.userData.role).status),1)]),_:1},16)]),_:1})]),_:1}),e(L,{class:"my-2"}),e(n,{link:"",onClick:m},{prepend:t(()=>[e(i,{class:"me-2",icon:"tabler-logout",size:"22"})]),default:t(()=>[e(c,null,{default:t(()=>[s("\u0412\u044B\u0439\u0442\u0438")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}};export{N as default};