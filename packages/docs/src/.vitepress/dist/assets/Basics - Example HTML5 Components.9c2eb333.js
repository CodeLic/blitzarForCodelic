import{_ as n}from"./preload-helper.1c052cf7.js";import{v as l,C as s,G as r,o as i,b as c,A as p}from"./plugin-vue_export-helper.940ab1d0.js";const _={__name:"Basics - Example HTML5 Components",setup(m){const o=[{id:"firstName",label:"First Name"},{id:"lastName",label:"Last Name"},{id:"company",label:"Company"},{id:"birthdate",label:"Birthdate",parseValue:e=>new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})},{id:"balance",label:"Balance",parseValue:e=>e.toLocaleString()}],a=l([{balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC"}]);return s(async()=>{a.value=(await n(()=>import("./users.f91c4f42.js"),[])).default}),(e,d)=>{const t=r("BlitzTable");return i(),c("div",null,[p(t,{schemaColumns:o,schemaGrid:o,rows:a.value,rowsPerPage:5,titleField:{component:"h3",slot:"Users"},searchField:{component:"input",placeholder:"Search...",debounce:300,clearable:!0},gridToggleField:{label:"grid",component:"input",type:"checkbox"},paginationField:{label:"Open page:",component:"input",type:"number"},rowsPerPageField:{label:"Rows per page:",component:"select",slot:[{component:"option",slot:"5"},{component:"option",slot:"10"},{component:"option",slot:"20"},{component:"option",slot:"50"},{component:"option",slot:"100"}]},shownRowsInfoField:{component:"div"}},null,8,["rows","searchField"])])}}};export{_ as default};
