import{v as u,G as s,o as c,b as p,A as a,g as l}from"./plugin-vue_export-helper.940ab1d0.js";const d=l("strong",null,"Expenses",-1),_=l("br",null,null,-1),f=l("br",null,null,-1),v={__name:"Basics - Multi-Row Example",setup(b){const i=[{component:"button",slot:"\u2212",events:{click:(o,{deleteRow:e})=>e()},dynamicProps:["disabled"],disabled:(o,{rowIndex:e,formData:n})=>e===n.length,componentClasses:"delete-button"},{id:"type",label:"Type",component:"select",slot:[{component:"option",value:"",slot:"Select one",disabled:!0},{component:"option",value:"personal",slot:"Personal"},{component:"option",value:"work",slot:"Work"}]},{id:"amount",label:"Amount",component:"input",type:"number",parseInput:o=>Number(o)},{id:"paid for",label:"Paid for",component:"input",type:"checkbox",defaultValue:!1},{id:"comment",label:"Comment",component:"input"}],t=u([]);return(o,e)=>{const n=s("BlitzListForm"),r=s("CodeBlock");return c(),p("div",null,[d,_,f,a(n,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=m=>t.value=m),class:"my-multi-row-form",schema:i},null,8,["modelValue"]),a(r,{content:`// formData
${JSON.stringify(t.value,void 0,2)}`},null,8,["content"])])}}};export{v as default};
