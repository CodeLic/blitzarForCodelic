import{v as c,G as t,o as r,b as u,g as p,A as n}from"./plugin-vue_export-helper.940ab1d0.js";const _={__name:"Basics - Custom Components - Auth",setup(d){const a=[{id:"username",component:"BlitzInput",label:"Email",placeholder:"you@email.com",autocomplete:"username"},{id:"password",component:"BlitzInput",label:"Password",type:"password",autocomplete:"new-password"}],e=c({});return(i,o)=>{const l=t("BlitzForm"),s=t("CodeBlock");return r(),u("div",null,[p("form",null,[n(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),schema:a,columnCount:2},null,8,["modelValue"])]),n(s,{content:`// formData
${JSON.stringify(e.value,void 0,2)}`},null,8,["content"])])}}};export{_ as default};
