import{v as l,G as i,o as m,b as s,g as d,A as p,y as u}from"./plugin-vue_export-helper.940ab1d0.js";const f={__name:"Styling - Raw Form Styling",setup(g){const n=[{label:"Hero Details",class:"_title"},{id:"name",component:"input",label:"Superhero name"},{id:"powerOrigin",component:"input",label:"Power origin"},{id:"stamina",component:"input",label:"Stamina"},{id:"power",component:"input",label:"Power"},{id:"roleModel",component:"input",label:"Role model"}],o=l(!0),t=l({name:"Peace of Cake",powerOrigin:"self",stamina:5e3,power:9e3,roleModel:"Thor Odinson"});return(c,e)=>{const r=i("BlitzForm");return m(),s("div",null,[d("button",{style:{"margin-bottom":"1rem"},onClick:e[0]||(e[0]=a=>o.value=!o.value)}," Toggle Custom Styling "),p(r,{modelValue:t.value,"onUpdate:modelValue":e[1]||(e[1]=a=>t.value=a),class:u(o.value?"raw-form-data-style":""),labelPosition:"left",schema:n,mode:"raw",gridGap:"0"},null,8,["modelValue","class"])])}}};export{f as default};
