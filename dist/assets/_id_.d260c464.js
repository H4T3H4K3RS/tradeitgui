import{k as V,bC as E,w as F,o as f,c as y,p as e,x as a,C as d,z as b,q as l,ax as L,af as _,P as x,ay as C,aq as R,ar as m,aU as k,bD as w,bE as $,H as j,L as q,F as N,a as A,D as p,am as H,j as W,bJ as z,b as J}from"./index.6ab7cdf7.js";import{u as P}from"./validators.118248dd.js";import{b as U,V as G,a as K,c as h}from"./VTabs.e470ff33.js";import{V as M}from"./VForm.5ceedccd.js";import{V as O}from"./VTextarea.39ee5f20.js";const le={__name:"[id]",setup(Q){const I=W(),c=z(),r=V("base-info"),v=E(),u=V({enabled:!1,type:"success",message:"Hello!"}),S=["New"],s=V({name:"",description:"",state:"draft",category:"clothes",photos:["https://thumbs.dreamstime.com/b/grayscale-random-squares-checkered-pattern-mosaic-abstract-geometric-design-element-cubic-cubism-illustration-214781178.jpg"]});F(()=>{u.value={enabled:!0,message:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043C \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u{1F9E0}",type:"warning"},v.fetchItem({id:c.params.id}).then(n=>{s.value=n.data,u.value={enabled:!0,message:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u{1F389}",type:"success"}}).catch(n=>{u.value={enabled:!0,message:n,type:"error"},console.log(n)})});const T=[{name:"\u041E\u0434\u0435\u0436\u0434\u0430",value:"clothes"},{name:"\u0410\u043A\u0441\u0435\u0441\u0441\u0443\u0430\u0440\u044B",value:"accessory"}],B=[{name:"\u0412\u044B\u0441\u0442\u0430\u0432\u0438\u0442\u044C",value:"exposed"},{name:"\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A",value:"draft"}],D=async()=>{u.value={enabled:!0,message:"Saving item \u{1F9E0}",type:"warning"},v.putItem({id:c.params.id,...s.value}).then(n=>{console.log(n),u.value={enabled:!0,message:"\u041F\u0440\u0435\u0434\u043C\u0435\u0442 \u0441\u043E\u0445\u0440\u0430\u043D\u0451\u043D \u{1F389}",type:"success"},setTimeout(()=>{I.push({name:"items"})},1e3)}).catch(n=>{u.value={enabled:!0,message:`Error occured: ${n}`,type:"error"},console.log(n)})};return(n,o)=>(f(),y("div",null,[e(L,{modelValue:l(u).enabled,"onUpdate:modelValue":o[0]||(o[0]=t=>l(u).enabled=t),location:"bottom end",variant:"flat",color:l(u).type},{default:a(()=>[d(b(l(u).message),1)]),_:1},8,["modelValue","color"]),e(G,{modelValue:l(r),"onUpdate:modelValue":o[1]||(o[1]=t=>_(r)?r.value=t:null)},{default:a(()=>[e(U,{value:"base-info"},{default:a(()=>[d(" \u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F ")]),_:1}),e(U,{value:"photos"},{default:a(()=>[d(" \u0424\u043E\u0442\u043E ")]),_:1})]),_:1},8,["modelValue"]),e(x),e(H,{flat:""},{default:a(()=>[e(C,null,{default:a(()=>[e(K,{modelValue:l(r),"onUpdate:modelValue":o[8]||(o[8]=t=>_(r)?r.value=t:null),touch:{left:null,right:null}},{default:a(()=>[e(h,{value:"base-info"},{default:a(()=>[e(M,{class:"mt-2"},{default:a(()=>[e(R,null,{default:a(()=>[e(m,{md:"6",cols:"12"},{default:a(()=>[e(k,{modelValue:l(s).name,"onUpdate:modelValue":o[2]||(o[2]=t=>l(s).name=t),label:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:l(s).category,"onUpdate:modelValue":o[3]||(o[3]=t=>l(s).category=t),items:T,"item-value":"value","item-title":"name",label:"\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e(w,{modelValue:l(s).state,"onUpdate:modelValue":o[4]||(o[4]=t=>l(s).state=t),items:B,"item-value":"value","item-title":"name",label:"\u0421\u0442\u0430\u0442\u0443\u0441"},null,8,["modelValue"])]),_:1}),e(m,{cols:"12",md:"6"},{default:a(()=>[e($,{modelValue:l(s).tags,"onUpdate:modelValue":o[5]||(o[5]=t=>l(s).tags=t),items:S,label:"\u0422\u0435\u0433\u0438",multiple:""},{selection:a(({item:t})=>[e(j,{class:"mt-1"},{default:a(()=>[e(q,{start:"",color:"primary"},{default:a(()=>[d(b(String(t.title).charAt(0).toUpperCase()),1)]),_:2},1024),d(" "+b(t.title),1)]),_:2},1024)]),_:1},8,["modelValue"])]),_:1}),e(m,{cols:"12"},{default:a(()=>[e(O,{modelValue:l(s).description,"onUpdate:modelValue":o[6]||(o[6]=t=>l(s).description=t),label:"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",rows:"3","auto-grow":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(h,{value:"photos"},{default:a(()=>[(f(!0),y(N,null,A(l(s).photos,(t,i)=>(f(),J(m,{key:i,md:"6",cols:"12"},{default:a(()=>[e(k,{modelValue:l(s).photos[i],"onUpdate:modelValue":g=>l(s).photos[i]=g,label:`\u0424\u043E\u0442\u043E ${i+1}`,type:"text","append-inner-icon":"tabler-trash",rules:[l(P)],"onClick:appendInner":g=>l(s).photos.splice(i,1)},null,8,["modelValue","onUpdate:modelValue","label","rules","onClick:appendInner"])]),_:2},1024))),128)),e(p,{class:"justify-end",variant:"outlined","prepend-icon":"tabler-plus",onClick:o[7]||(o[7]=t=>l(s).photos.push(""))},{default:a(()=>[d(" \u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0424\u043E\u0442\u043E ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(x),e(C,{class:"d-flex gap-4"},{default:a(()=>[e(p,{variant:"tonal",to:{name:"items-view-id",params:{id:l(c).params.id}},"append-icon":"tabler-eye",class:"cursor-pointer"},{default:a(()=>[d(" \u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440 ")]),_:1},8,["to"]),e(p,{color:"secondary",variant:"tonal",to:{name:"items"}},{default:a(()=>[d(" \u041E\u0442\u043C\u0435\u043D\u0430 ")]),_:1}),e(p,{onClick:D},{default:a(()=>[d(" \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ")]),_:1})]),_:1})]),_:1})]))}};export{le as default};