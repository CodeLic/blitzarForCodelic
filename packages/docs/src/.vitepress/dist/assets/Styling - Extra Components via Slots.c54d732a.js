import{_ as i}from"./preload-helper.1c052cf7.js";import{b as c,_ as m}from"./index.es.364bad67.js";import{m as u,v as d,C as p,o as _,k as b,I as f,u as o,g as s}from"./plugin-vue_export-helper.940ab1d0.js";import"./framework.80e446ab.js";const h=s("div",null,"Custom slot content! Let's render some buttons:",-1),B={__name:"Styling - Extra Components via Slots",setup(v){const l=u(c),r=[{id:"firstName",label:"First Name"},{id:"lastName",label:"Last Name"},{id:"company",label:"Company"},{id:"birthdate",label:"Birthdate"},{id:"balance",label:"Balance",parseValue:e=>e.toLocaleString()}],a=d([{balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC"}]);function n(){a.value.reverse()}return p(async()=>{a.value=(await i(()=>import("./users.f91c4f42.js"),[])).default.slice(0,10)}),(e,t)=>(_(),b(o(m),{class:"my-table",schemaColumns:r,rows:a.value,searchField:{component:o(l),placeholder:"Search...",debounce:300,clearable:!0}},{default:f(()=>[h,s("button",{onClick:t[0]||(t[0]=()=>n())},"flip rows \u2195")]),_:1},8,["rows","searchField"]))}};export{B as default};
