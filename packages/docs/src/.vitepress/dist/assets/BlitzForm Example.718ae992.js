import{v as c,G as t,o as r,b as i,A as n}from"./plugin-vue_export-helper.940ab1d0.js";const _={__name:"BlitzForm Example",setup(u){const a=[{id:"classroomName",label:"Classroom Name",component:"input"},{id:"students",label:"Student Names",component:"BlitzListForm",schema:[{id:"nameFirst",label:"First Name",component:"input"},{id:"nameLast",label:"Last Name",component:"input"}]}],e=c([]);return(p,o)=>{const l=t("BlitzForm"),m=t("CodeBlock");return r(),i("div",null,[n(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),schema:a},null,8,["modelValue"]),n(m,{content:`// formData
${JSON.stringify(e.value,void 0,2)}`},null,8,["content"])])}}};export{_ as default};
