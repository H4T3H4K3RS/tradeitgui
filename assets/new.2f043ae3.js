import{k as p,bI as B,v as $,o as c,c as b,p as e,w as a,B as d,y as D,q as t,bb as F,a_ as v,ba as g,b6 as E,b7 as i,F as N,a as R,C as f,b2 as j,j as A,b as L}from"./index.cd0f8983.js";import{u as q}from"./validators.118248dd.js";import{c as y,V as P,a as W,b as h}from"./VTabs.52be9fce.js";import{V as x}from"./VDivider.fa881b3f.js";import{V as H}from"./VForm.f8ceaffc.js";import{c as _}from"./VTextField.defe1801.js";import{V as k}from"./VSelect.861a0cd0.js";import{V as J}from"./VTextarea.2b6a236d.js";import"./index.affa8c13.js";import"./VList.750eb541.js";import"./VMenu.9cb27b8f.js";import"./VCheckboxBtn.6809607a.js";import"./VChip.07547d4e.js";const se={__name:"new",setup(O){const n=p({enabled:!1,type:"success",message:"Hello!"}),C=A(),w=B(),S=$(),r=p("base-info"),s=p({name:"",description:"",state:"draft",category:"clothes",photos:["https://thumbs.dreamstime.com/b/grayscale-random-squares-checkered-pattern-mosaic-abstract-geometric-design-element-cubic-cubism-illustration-214781178.jpg"]}),I=[{name:"Clothes",value:"clothes"},{name:"Accessory",value:"accessory"}],U=[{name:"Exchnaged",value:"exchanged"},{name:"Exposed",value:"exposed"},{name:"Draft",value:"draft"}],T=async()=>{n.value={enabled:!0,message:"Saving item \u{1F9E0}",type:"warning"},w.postItem({user:S.$state.userData.id,...s.value}).then(u=>{if(console.log(u.data),u.status>250)throw`Failed to save! Response: ${JSON.stringify(u.data)}`;n.value={enabled:!0,message:"Item saved \u{1F389}",type:"success"},setTimeout(()=>{C.push({name:"items"})},1e3)}).catch(u=>{n.value={enabled:!0,message:`Error occured: ${u}`,type:"error"},console.log(u)})};return(u,l)=>(c(),b("div",null,[e(F,{modelValue:t(n).enabled,"onUpdate:modelValue":l[0]||(l[0]=o=>t(n).enabled=o),location:"top end",variant:"flat",color:t(n).type},{default:a(()=>[d(D(t(n).message),1)]),_:1},8,["modelValue","color"]),e(P,{modelValue:t(r),"onUpdate:modelValue":l[1]||(l[1]=o=>v(r)?r.value=o:null)},{default:a(()=>[e(y,{value:"base-info"},{default:a(()=>[d(" Base Info ")]),_:1}),e(y,{value:"photos"},{default:a(()=>[d(" Photos ")]),_:1})]),_:1},8,["modelValue"]),e(x),e(j,{flat:""},{default:a(()=>[e(g,null,{default:a(()=>[e(W,{modelValue:t(r),"onUpdate:modelValue":l[7]||(l[7]=o=>v(r)?r.value=o:null)},{default:a(()=>[e(h,{value:"base-info"},{default:a(()=>[e(H,{class:"mt-2"},{default:a(()=>[e(E,null,{default:a(()=>[e(i,{md:"6",cols:"12"},{default:a(()=>[e(_,{modelValue:t(s).name,"onUpdate:modelValue":l[2]||(l[2]=o=>t(s).name=o),label:"Name"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:t(s).category,"onUpdate:modelValue":l[3]||(l[3]=o=>t(s).category=o),items:I,"item-value":"value","item-title":"name",label:"Category"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(k,{modelValue:t(s).state,"onUpdate:modelValue":l[4]||(l[4]=o=>t(s).state=o),items:U,"item-value":"value","item-title":"name",label:"State"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:a(()=>[e(J,{modelValue:t(s).description,"onUpdate:modelValue":l[5]||(l[5]=o=>t(s).description=o),label:"Description",rows:"3","auto-grow":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{value:"photos"},{default:a(()=>[(c(!0),b(N,null,R(t(s).photos,(o,m)=>(c(),L(i,{key:m,md:"6",cols:"12"},{default:a(()=>[e(_,{modelValue:t(s).photos[m],"onUpdate:modelValue":V=>t(s).photos[m]=V,label:`Photo ${m+1}`,type:"text","append-inner-icon":"tabler-trash",rules:[t(q)],"onClick:appendInner":V=>t(s).photos.splice(m,1)},null,8,["modelValue","onUpdate:modelValue","label","rules","onClick:appendInner"])]),_:2},1024))),128)),e(f,{class:"justify-end",variant:"outlined","prepend-icon":"tabler-plus",onClick:l[6]||(l[6]=o=>t(s).photos.push(""))},{default:a(()=>[d(" Add photo ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(x),e(g,{class:"d-flex gap-4"},{default:a(()=>[e(f,{onClick:T},{default:a(()=>[d(" Submit ")]),_:1}),e(f,{color:"secondary",variant:"tonal",to:{name:"items"}},{default:a(()=>[d(" Cancel ")]),_:1})]),_:1})]),_:1})]))}};export{se as default};
