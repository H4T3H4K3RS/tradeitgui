import{k as m,v as k,o as C,c as T,p as a,x as s,C as p,z as _,q as e,ax as R,m as n,an as S,V as U,y as b,ao as B,ay as v,aT as N,aq as j,ar as c,aU as f,D as q,am as D,j as E,r as F}from"./index.6ab7cdf7.js";import{r as V,e as I,p as L}from"./validators.118248dd.js";import{b as y}from"./route-block.023af118.js";import{V as P}from"./VForm.5ceedccd.js";const z={class:"auth-wrapper d-flex align-center justify-center pa-0 pa-md-4 h-100"},A={class:"position-relative my-sm-16"},M={class:"d-flex"},$=n("h5",{class:"text-h5 font-weight-semibold mb-1"}," \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C! ",-1),G=n("p",{class:"mb-0"}," \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439\u0442\u0435\u0441\u044C, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C \u0441\u0432\u043E\u044E \u043F\u0435\u0440\u0432\u0443\u044E \u0432\u0435\u0449\u044C! ",-1),H=n("span",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u044B ?",-1),J={__name:"register",setup(K){const r=m({email:"",username:"",password:""}),d=m(),l=m({enabled:!1,type:"error",message:"Permission denied!"}),i=m(!1),g=k(),x=E(),w=async()=>{var u;if(!(await((u=d==null?void 0:d.value)==null?void 0:u.validate())).valid){l.value={enabled:!0,type:"error",message:"\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0441\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u043F\u043E\u043B\u0435\u0439!"};return}let t=await g.register(r.value);if(console.log(t.data),!t.data.success){l.value.enabled=!0,l.value.type="warning",l.value.message=t.data;return}l.value.enabled=!0,l.value.type="success",l.value.message="\u0423\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043D \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C!",setTimeout(()=>{x.push({name:"auth-login"})},1e3)};return(h,t)=>{const u=F("RouterLink");return C(),T("div",z,[a(R,{modelValue:e(l).enabled,"onUpdate:modelValue":t[0]||(t[0]=o=>e(l).enabled=o),location:"bottom end",variant:"flat",transition:"scroll-y-reverse-transition",color:e(l).type},{default:s(()=>[p(_(e(l).message),1)]),_:1},8,["modelValue","color"]),n("div",A,[a(D,{class:"auth-card pa-4","max-width":"448"},{default:s(()=>[a(S,{class:"justify-center"},{prepend:s(()=>[n("div",M,[a(e(U),{nodes:e(b).app.logo},null,8,["nodes"])])]),default:s(()=>[a(B,{class:"font-weight-bold text-h5 py-1"},{default:s(()=>[p(_(e(b).app.title),1)]),_:1})]),_:1}),a(v,{class:"pt-2"},{default:s(()=>[$,G]),_:1}),a(v,null,{default:s(()=>[a(P,{ref_key:"refForm",ref:d,onSubmit:t[5]||(t[5]=N(()=>{},["prevent"]))},{default:s(()=>[a(j,null,{default:s(()=>[a(c,{cols:"12"},{default:s(()=>[a(f,{modelValue:e(r).username,"onUpdate:modelValue":t[1]||(t[1]=o=>e(r).username=o),label:"\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",type:"text",rules:[e(V)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12"},{default:s(()=>[a(f,{modelValue:e(r).email,"onUpdate:modelValue":t[2]||(t[2]=o=>e(r).email=o),label:"Email",type:"email",rules:[e(V),e(I)]},null,8,["modelValue","rules"])]),_:1}),a(c,{cols:"12"},{default:s(()=>[a(f,{modelValue:e(r).password,"onUpdate:modelValue":t[3]||(t[3]=o=>e(r).password=o),class:"mb-4",label:"\u041F\u0430\u0440\u043E\u043B\u044C",type:e(i)?"text":"password","append-inner-icon":e(i)?"tabler-eye-off":"tabler-eye",rules:[e(V),e(L)],"onClick:appendInner":t[4]||(t[4]=o=>i.value=!e(i))},null,8,["modelValue","type","append-inner-icon","rules"]),a(q,{block:"",type:"submit",class:"mt-4",onClick:w},{default:s(()=>[p(" \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F ")]),_:1})]),_:1}),a(c,{cols:"12",class:"text-center text-base"},{default:s(()=>[H,a(u,{class:"text-primary ms-2",to:{name:"auth-login"}},{default:s(()=>[p(" \u0412\u043E\u0439\u0442\u0438 ")]),_:1})]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})])])}}};typeof y=="function"&&y(J);export{J as default};