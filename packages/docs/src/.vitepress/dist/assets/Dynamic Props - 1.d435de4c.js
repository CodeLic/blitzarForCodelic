import{v as u,G as n,o as p,b as m,A as l}from"./plugin-vue_export-helper.940ab1d0.js";const b={__name:"Dynamic Props - 1",setup(i){const r=[{id:"color",span:!0,component:"select",label:"What is your favorite color?",dynamicProps:["subLabel"],subLabel:e=>e==="red"?"like the sun":e==="blue"?"like the sky":e==="green"?"green is not a creative color":e==="other"?"oh, come on, just pick one":"pick a color!",slot:[{component:"option",value:"",slot:"Select one",disabled:!0},{component:"option",value:"red",slot:"red"},{component:"option",value:"blue",slot:"blue"},{component:"option",value:"green",slot:"green"},{component:"option",value:"other",slot:"other"}],spread:!0}],o=u({});return(e,t)=>{const a=n("BlitzForm"),s=n("CodeBlock");return p(),m("div",null,[l(a,{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=c=>o.value=c),schema:r},null,8,["modelValue"]),l(s,{content:`// formData
${JSON.stringify(o.value,void 0,2)}`},null,8,["content"])])}}};export{b as default};
