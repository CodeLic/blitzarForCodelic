import{v as c,G as n,o as i,b as u,A as t}from"./plugin-vue_export-helper.940ab1d0.js";const d={__name:"Basics - Basic Example",setup(r){const l=[{id:"name",component:"input",label:"Superhero name",subLabel:"Think of something cool."},{id:"powerOrigin",label:"Power origin",subLabel:"Where does your power come from?",component:"select",slot:[{component:"option",value:"",slot:"Select one",disabled:!0},{component:"option",value:"mutation",slot:"Mutation"},{component:"option",value:"self",slot:"Self taught"},{component:"option",value:"item",slot:"Magic item"},{component:"option",value:"gear",slot:"Gear"}]}],e=c({});return(p,o)=>{const a=n("blitz-form"),s=n("CodeBlock");return i(),u("div",null,[t(a,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=m=>e.value=m),schema:l,columnCount:2},null,8,["modelValue"]),t(s,{content:`// formData
${JSON.stringify(e.value,void 0,2)}`},null,8,["content"])])}}};export{d as default};
