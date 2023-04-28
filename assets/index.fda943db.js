import{I as de,a5 as N,bi as me,a8 as C,a7 as Y,K as J,bj as pe,k as m,p as e,H as B,bk as fe,bb as _e,a2 as ve,a3 as be,a4 as ge,a6 as he,ad as xe,af as ye,ag as Ve,o as f,b as h,w as t,E as U,C as y,b0 as z,b1 as Q,b2 as X,B as b,ba as x,q as d,aY as D,m as n,D as De,c as k,b9 as we,y as _,b5 as V,G as S,aT as P,b4 as T,F as A,a_ as $e,a$ as Ce,z as ke,bl as Se,a as Z,v as Ue,bm as Pe}from"./index.06ce4c3e.js";import{V as ee}from"./VSelect.28e9d127.js";import{V as Be}from"./VDivider.6886f8b3.js";import{V as te}from"./VDialog.f2ecf9ca.js";import{a as Te,k as E}from"./formatters.04cd2ee9.js";import{r as H}from"./formatters.d874f70c.js";import{V as ae}from"./VChip.a4563941.js";import{V as Ae,a as ze}from"./VList.db187d07.js";import{m as Ie,f as Re,V as Le}from"./VCheckboxBtn.04eae92e.js";import{m as je,u as Fe,f as Oe,V as qe}from"./VTextField.ce54915a.js";import{V as Me,a as Ee,b as K,c as Ne}from"./VTabs.14587c89.js";import"./VMenu.c95eb43d.js";import"./index.6f29b349.js";const We=de({name:"VSwitch",inheritAttrs:!1,props:{indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...je(),...Ie()},emits:{"update:focused":a=>!0,"update:modelValue":()=>!0,"update:indeterminate":a=>!0},setup(a,s){let{attrs:r,slots:l}=s;const u=N(a,"indeterminate"),p=N(a,"modelValue"),{loaderClasses:i}=me(a),{isFocused:o,focus:c,blur:v}=Fe(a),g=C(()=>typeof a.loading=="string"&&a.loading!==""?a.loading:a.color),O=Y(),w=C(()=>a.id||`switch-${O}`);function I(){u.value&&(u.value=!1)}return J(()=>{const[R,$]=pe(r),[L,Ut]=Oe(a),[le,Pt]=Re(a),G=m();function oe(){var j,F;(j=G.value)==null||(F=j.input)==null||F.click()}return e(qe,B({class:["v-switch",{"v-switch--inset":a.inset},{"v-switch--indeterminate":u.value},i.value]},R,L,{id:w.value,focused:o.value}),{...l,default:j=>{let{id:F,isDisabled:ne,isReadonly:ie,isValid:re}=j;return e(Le,B({ref:G},le,{modelValue:p.value,"onUpdate:modelValue":[q=>p.value=q,I],id:F.value,type:"checkbox","aria-checked":u.value?"mixed":void 0,disabled:ne.value,readonly:ie.value,onFocus:c,onBlur:v},$),{...l,default:()=>e("div",{class:"v-switch__track",onClick:oe},null),input:q=>{let{textColorClasses:ue,textColorStyles:ce}=q;return e("div",{class:["v-switch__thumb",ue.value],style:ce.value},[a.loading&&e(fe,{name:"v-switch",active:!0,color:re.value===!1?void 0:g.value},{default:M=>l.loader?l.loader(M):e(_e,{active:M.isActive,color:M.color,indeterminate:!0,size:"16",width:"2"},null)})])}})}})}),{}}});const Ge=ve()({name:"VTooltip",props:{id:String,text:String,...be(ge({closeOnBack:!1,location:"end",locationStrategy:"connected",minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent","eager"])},emits:{"update:modelValue":a=>!0},setup(a,s){let{slots:r}=s;const l=N(a,"modelValue"),{scopeId:u}=he(),p=Y(),i=C(()=>a.id||`v-tooltip-${p}`),o=m(),c=C(()=>a.location.split(" ").length>1?a.location:a.location+" center"),v=C(()=>a.origin==="auto"||a.origin==="overlap"||a.origin.split(" ").length>1||a.location.split(" ").length>1?a.origin:a.origin+" center"),g=C(()=>a.transition?a.transition:l.value?"scale-transition":"fade-transition");return J(()=>{const[O]=xe(a);return e(ye,B({ref:o,class:["v-tooltip"],id:i.value},O,{modelValue:l.value,"onUpdate:modelValue":w=>l.value=w,transition:g.value,absolute:!0,location:c.value,origin:v.value,persistent:!0,role:"tooltip",eager:!0,activatorProps:B({"aria-describedby":i.value},a.activatorProps)},u),{activator:r.activator,default:function(){var L;for(var w,I=arguments.length,R=new Array(I),$=0;$<I;$++)R[$]=arguments[$];return(L=(w=r.default)==null?void 0:w.call(r,...R))!=null?L:a.text}})}),Ve({},o)}}),se={__name:"DialogCloseBtn",props:{icon:{type:String,required:!1,default:"tabler-x"}},setup(a){const s=a;return(r,l)=>(f(),h(y,{icon:"",class:"v-dialog-close-btn"},{default:t(()=>[e(U,{icon:s.icon},null,8,["icon"])]),_:1}))}},He=n("p",null," Choose the best plan for user. ",-1),Ke=n("p",{class:"font-weight-medium mb-2"}," User current plan is standard plan ",-1),Ye={class:"d-flex justify-space-between flex-wrap"},Je=n("div",{class:"d-flex align-center me-3"},[n("sup",{class:"text-primary"},"$"),n("h3",{class:"text-h3 font-weight-semibold text-primary"}," 99 "),n("sub",{class:"text-body-1 mt-3"},"/ month")],-1),Qe={__name:"UserUpgradePlanDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(a,{emit:s}){const r=a,l=m("standard"),u=[{text:"Basic - $0/month",value:"basic"},{text:"Standard - $99/month",value:"standard"},{text:"Enterprise - $499/month",value:"enterprise"},{text:"Company - $999/month",value:"company"}],p=i=>{s("update:isDialogVisible",i)};return(i,o)=>{const c=se;return f(),h(te,{width:i.$vuetify.display.smAndDown?"auto":560,"model-value":r.isDialogVisible,"onUpdate:modelValue":p},{default:t(()=>[e(c,{onClick:o[0]||(o[0]=v=>p(!1))}),e(z,{class:"py-8"},{default:t(()=>[e(Q,{class:"text-center"},{default:t(()=>[e(X,{class:"text-h5 mb-5"},{default:t(()=>[b(" Upgrade Plan ")]),_:1}),He]),_:1}),e(x,{class:"d-flex align-center flex-wrap flex-sm-nowrap px-15"},{default:t(()=>[e(ee,{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=v=>D(l)?l.value=v:null),label:"Choose Plan",items:u,"item-title":"text","item-value":"value",density:"compact",class:"me-3"},null,8,["modelValue"]),e(y,{class:"mt-3 mt-sm-0"},{default:t(()=>[b(" Upgrade ")]),_:1})]),_:1}),e(Be,{class:"my-3"}),e(x,{class:"px-15"},{default:t(()=>[Ke,n("div",Ye,[Je,e(y,{color:"error",variant:"tonal",class:"mt-3"},{default:t(()=>[b(" Cancel Subscription ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}};const W=a=>($e("data-v-7056ff67"),a=a(),Ce(),a),Xe={class:"text-5xl font-weight-semibold"},Ze={class:"text-h6 mt-4"},et={class:"d-flex align-center ms-4 mb-2"},tt={class:"text-base font-weight-semibold"},at=W(()=>n("span",{class:"text-sm"},"Available Payout",-1)),st={class:"d-flex align-center mx-4 mb-2"},lt={class:"text-base font-weight-semibold"},ot=W(()=>n("span",{class:"text-sm"},"Frozen Payout",-1)),nt={class:"d-flex align-center mx-4 mb-2"},it={class:"text-base font-weight-semibold"},rt=W(()=>n("span",{class:"text-sm"},"Referral Revenue",-1)),ut={__name:"UserBioPanel",props:{userData:{type:Object,required:!0}},setup(a){const s=a,r=m(!1),l=m(""),u=m("error"),p=(o,c,v="error")=>{navigator.clipboard.writeText(o).then(()=>{r.value=!0,l.value=c,u.value=v}).catch(g=>{console.error("Failed to copy to clipboard: ",g)})};m(!1);const i=m(!1);return(o,c)=>{const v=Qe;return f(),k(A,null,[e(T,null,{default:t(()=>[e(we,{modelValue:d(r),"onUpdate:modelValue":c[0]||(c[0]=g=>D(r)?r.value=g:null),location:"top end",variant:"flat",transition:"scroll-y-reverse-transition",color:d(u)},{default:t(()=>[b(_(d(l)),1)]),_:1},8,["modelValue","color"]),e(V,{cols:"12"},{default:t(()=>[s.userData?(f(),h(z,{key:0},{default:t(()=>[e(x,{class:"text-center pt-15"},{default:t(()=>[e(S,{rounded:"",size:120,color:"primary",variant:"tonal"},{default:t(()=>[n("span",Xe,_(d(Te)(s.userData.email)),1)]),_:1}),n("h6",Ze,_(s.userData.email),1),e(ae,B(d(H)(s.userData.role).chip,{class:"text-capitalize mt-4",size:"small"}),{default:t(()=>[b(_(d(H)(s.userData.role).status),1)]),_:1},16)]),_:1}),e(x,{class:"d-flex justify-center flex-wrap mt-3"},{default:t(()=>[n("div",et,[e(S,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e(U,{size:"24",icon:"tabler-currency-dollar"})]),_:1}),n("div",null,[n("h6",tt,_(d(E)(s.userData.balance.available))+" $ ",1),at])]),n("div",st,[e(S,{size:38,rounded:"",color:"primary",variant:"tonal",class:"me-3"},{default:t(()=>[e(U,{size:"24",icon:"tabler-snowflake"})]),_:1}),n("div",null,[n("h6",lt,_(d(E)(s.userData.balance.frozen))+" $ ",1),ot])]),n("div",nt,[e(S,{size:38,rounded:"",color:"success",variant:"tonal",class:"me-3"},{default:t(()=>[e(U,{size:"24",icon:"tabler-users"})]),_:1}),n("div",null,[n("h6",it,_(d(E)(s.userData.referer.profit))+" $ ",1),rt])])]),_:1}),e(x,{class:"d-flex justify-center"},{default:t(()=>[e(y,{variant:"tonal",color:"error","prepend-icon":"tabler-external-link",class:"cursor-pointer",onClick:c[1]||(c[1]=g=>i.value=!0)},{default:t(()=>[b(" Withdraw ")]),_:1}),e(y,{variant:"tonal","prepend-icon":"tabler-copy",color:"success",class:"ms-3 cursor-pointer",onClick:c[2]||(c[2]=g=>p(`${a.userData.referer.code}`,"\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D \u0440\u0435\u0444\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u043A\u043E\u0434!","success"))},{default:t(()=>[b(" Refer "),e(Ge,{"open-on-focus":"",location:"top",activator:"parent"},{default:t(()=>[b(" Copy Referral Link ")]),_:1})]),_:1})]),_:1})]),_:1})):P("",!0)]),_:1})]),_:1}),e(v,{isDialogVisible:d(i),"onUpdate:isDialogVisible":c[3]||(c[3]=g=>D(i)?i.value=g:null)},null,8,["isDialogVisible"])],64)}}},ct=De(ut,[["__scopeId","data-v-7056ff67"]]),dt=n("p",null," Choose the best subscription for you. ",-1),mt={class:"d-flex justify-center flex-wrap"},pt={__name:"UserBuySubscriptionDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(a,{emit:s}){const r=a,l=m("monthly"),u=[{text:"Monthly - $99/month",value:"monthly"},{text:"Enterprise - $499/month",value:"enterprise"},{text:"Company - $999/month",value:"company"}],p=i=>{s("update:isDialogVisible",i)};return(i,o)=>{const c=se;return f(),h(te,{width:i.$vuetify.display.smAndDown?"auto":560,"model-value":r.isDialogVisible,"onUpdate:modelValue":p},{default:t(()=>[e(c,{onClick:o[0]||(o[0]=v=>p(!1))}),e(z,{class:"py-8"},{default:t(()=>[e(Q,{class:"text-center"},{default:t(()=>[e(X,{class:"text-h5 mb-5"},{default:t(()=>[b(" Buy Subscription ")]),_:1}),dt]),_:1}),e(x,{class:"d-flex align-center flex-wrap flex-sm-nowrap px-15"},{default:t(()=>[e(ee,{modelValue:d(l),"onUpdate:modelValue":o[1]||(o[1]=v=>D(l)?l.value=v:null),label:"Choose Plan",items:u,"item-title":"text","item-value":"value",density:"compact",class:"me-3"},null,8,["modelValue"])]),_:1}),e(x,{class:"px-15"},{default:t(()=>[n("div",mt,[e(y,{color:"success",variant:"tonal",class:"mt-3"},{default:t(()=>[b(" Buy Subscription ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}};const ft={class:"d-flex align-center"},_t=n("sup",{class:"text-primary text-sm font-weight-regular"},"$",-1),vt={class:"text-h3 text-primary font-weight-semibold"},bt={class:"mt-3"},gt={class:"text-sm font-weight-regular"},ht={class:"text-base font-weight-semibold mb-1"},xt={key:0,class:"text-base font-weight-semibold mb-1"},yt={class:"d-flex justify-space-between font-weight-bold mt-8 mb-2"},Vt=n("h6",{class:"text-sm"}," Days ",-1),Dt={class:"text-sm"},wt={class:"text-sm mt-2"},$t={class:"d-flex flex-wrap gap-4"},Ct={__name:"UserTabBillingsPlans",props:{userData:{type:Object,required:!0}},setup(a){const s=a,r=m(!1);m(!1),m(!1),m(),m(!1),m(!1);const l=(i,o=!1)=>{const c=Date.now()/1e3,v=o?i:i-c;return parseInt(v/(24*60*60))},u=i=>l(i/30,!0),p=i=>{const o={month:"short",day:"numeric",year:"numeric"};return new Date(i*1e3).toLocaleDateString("en-US",o)};return(i,o)=>(f(),k(A,null,[e(T,null,{default:t(()=>[e(V,{cols:"12"},{default:t(()=>[e(z,null,{default:t(()=>[e(x,{class:"d-flex"},{default:t(()=>[e(ae,{label:"",color:s.userData.subscription.end!==0?"primary":"error",size:"small"},{default:t(()=>[b(_(s.userData.subscription.end!==0?"Active":"No Subscription"),1)]),_:1},8,["color"]),s.userData.subscription.end!==0?(f(),k(A,{key:0},[e(ke),n("div",ft,[_t,n("h3",vt,_(s.userData.subscription.price),1),n("sub",bt,[n("h6",gt," / "+_(u(s.userData.subscription.duration))+" month(s)",1)])])],64)):P("",!0)]),_:1}),e(x,null,{default:t(()=>[e(T,null,{default:t(()=>[e(V,{cols:"12",md:"6","order-md":"1",order:"2"},{default:t(()=>[n("h6",ht,_(s.userData.subscription.end!==0?"Plan active":"No plan active"),1),s.userData.subscription.end!==0?(f(),k("h6",xt," Active until "+_(p(s.userData.subscription.end)),1)):P("",!0)]),_:1}),s.userData.subscription.end!==0?(f(),h(V,{key:0,cols:"12",md:"6","order-md":"2",order:"1"},{default:t(()=>[n("div",yt,[Vt,n("h6",Dt,_(l(s.userData.subscription.duration,!0)-l(s.userData.subscription.end))+" of "+_(l(s.userData.subscription.duration,!0))+" Days ",1)]),e(Se,{rounded:"",color:"primary",height:10,"model-value":(l(s.userData.subscription.duration,!0)-l(s.userData.subscription.end))/l(s.userData.subscription.duration,!0)*100},null,8,["model-value"]),n("p",wt,_(l(s.userData.subscription.end))+" days remaining until your plan requires update ",1)]),_:1})):P("",!0),e(V,{cols:"12",order:"3"},{default:t(()=>[n("div",$t,[s.userData.subscription.end===0?(f(),h(y,{key:0,color:"success",variant:"tonal",onClick:o[0]||(o[0]=c=>r.value=!0)},{default:t(()=>[b(" Buy Subscription ")]),_:1})):s.userData.subscription.end>=Date.now()?(f(),h(y,{key:1,color:"error",variant:"tonal"},{default:t(()=>[b(" Cancel Subscription ")]),_:1})):(f(),h(y,{key:2,color:"primary",variant:"tonal",onClick:o[1]||(o[1]=c=>r.value=!0)},{default:t(()=>[b(" Renew Subscription ")]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(pt,{isDialogVisible:d(r),"onUpdate:isDialogVisible":o[2]||(o[2]=c=>D(r)?r.value=c:null)},null,8,["isDialogVisible"])],64))}},kt=n("p",{class:"text-sm mt-n6 mb-6"}," Display content from your connected accounts on your site ",-1),St={__name:"UserTabWallet",props:{userData:{type:Object,required:!0}},setup(a){const s=m([{img:null,title:"Google",text:"Calendar and contacts",connected:!0},{img:null,title:"Slack",text:"Communication",connected:!1},{img:null,title:"Github",text:"Manage your Git repositories",connected:!0},{img:null,title:"Mailchimp",text:"Email marketing service",connected:!1},{img:null,title:"Asana",text:"Communication",connected:!1}]);return m([{img:null,title:"Facebook",connected:!1},{img:null,title:"Twitter",link:"https://twitter.com/theme_selection",username:"@Theme_Selection",connected:!0},{img:null,title:"Linkedin",link:"https://www.linkedin.com/company/pixinvent",username:"@Pixinvent",connected:!0},{img:null,title:"Dribbble",connected:!1},{img:null,title:"Behance",connected:!1}]),(r,l)=>(f(),h(T,null,{default:t(()=>[e(V,{cols:"12"},{default:t(()=>[e(z,{title:"Connected Accounts"},{default:t(()=>[e(x,null,{default:t(()=>[kt,e(Ae,{class:"card-list"},{default:t(()=>[(f(!0),k(A,null,Z(d(s),u=>(f(),h(ze,{key:u.title,title:u.title,subtitle:u.text},{prepend:t(()=>[e(S,{start:"",size:35,image:u.img},null,8,["image"])]),append:t(()=>[e(We,{modelValue:u.connected,"onUpdate:modelValue":p=>u.connected=p,density:"compact",class:"me-1"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1032,["title","subtitle"]))),128))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}},Nt={__name:"index",setup(a){Pe();const s=Ue(),r=m(),l=m(null),u=[{icon:"tabler-credit-card",title:"\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430"},{icon:"tabler-wallet",title:"\u041A\u043E\u0448\u0435\u043B\u0451\u043A"}];return s.me().then(()=>{r.value=s.$state.userData}),(p,i)=>d(r)?(f(),h(T,{key:0},{default:t(()=>[e(V,{cols:"12",md:"5",lg:"4"},{default:t(()=>[e(ct,{"user-data":d(r)},null,8,["user-data"])]),_:1}),e(V,{cols:"12",md:"7",lg:"8"},{default:t(()=>[e(Me,{modelValue:d(l),"onUpdate:modelValue":i[0]||(i[0]=o=>D(l)?l.value=o:null),class:"v-tabs-pill"},{default:t(()=>[(f(),k(A,null,Z(u,o=>e(Ne,{key:o.icon,class:"me-1"},{default:t(()=>[e(U,{size:18,icon:o.icon,class:"me-1"},null,8,["icon"]),n("span",null,_(o.title),1)]),_:2},1024)),64))]),_:1},8,["modelValue"]),e(Ee,{modelValue:d(l),"onUpdate:modelValue":i[1]||(i[1]=o=>D(l)?l.value=o:null),class:"mt-6 disable-tab-transition",touch:!1},{default:t(()=>[e(K,null,{default:t(()=>[e(Ct,{"user-data":d(r)},null,8,["user-data"])]),_:1}),e(K,null,{default:t(()=>[e(St,{"user-data":d(r)},null,8,["user-data"])]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})):P("",!0)}};export{Nt as default};
