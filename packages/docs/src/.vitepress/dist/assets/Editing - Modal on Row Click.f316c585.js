import{E as w}from"./VueFinalModal.esm.6e938723.js";import{c as N}from"./index.es.364bad67.js";import"./style.186bb6a9.js";import{_,m as h,v as y,a as C,G as r,o as s,b as v,A as m,u as c,I as M,F as I,k as R}from"./plugin-vue_export-helper.940ab1d0.js";import"./framework.80e446ab.js";const k={__name:"Editing - Modal on Row Click",setup(B){const u=h(N),l=[{id:"firstName",label:"First Name",component:"input"},{id:"lastName",label:"Last Name",component:"input"},{id:"company",label:"Company",component:"input"},{id:"birthdate",label:"Birthdate",component:"input"},{id:"balance",label:"Balance",component:"input",type:"number",parseValue:(t,{mode:a})=>a==="raw"?t.toLocaleString():t,parseInput:t=>Number(t)}],o=y([{id:"id8269187329780852",balance:93683,birthdate:"1946-07-22",firstName:"Harper",lastName:"Nolan",company:"Tortor At Risus LLC"},{id:"id44304518826349204",balance:69632,birthdate:"1945-11-27",firstName:"Whoopi",lastName:"David",company:"Ipsum Institute"},{id:"id5068577691466047",balance:75903,birthdate:"1955-10-01",firstName:"Peter",lastName:"Mendez",company:"Curabitur Dictum LLC"},{id:"id05232596295403691",balance:53509,birthdate:"1977-06-21",firstName:"Harrison",lastName:"Miller",company:"Enim Etiam Imperdiet Industries"},{id:"id23809333906635666",balance:93450,birthdate:"2017-11-27",firstName:"Wendy",lastName:"Strong",company:"Ac PC"},{id:"id7894530275645739",balance:64590,birthdate:"1975-12-10",firstName:"Kyla",lastName:"Dalton",company:"Urna Nec Luctus PC"},{id:"id9425069129254229",balance:72444,birthdate:"2001-07-31",firstName:"Aimee",lastName:"Stephens",company:"Tempus Incorporated"},{id:"id5539749518518775",balance:99856,birthdate:"1972-01-28",firstName:"Phelan",lastName:"Jennings",company:"Consectetuer Adipiscing Elit LLP"},{id:"id9413108287279646",balance:83325,birthdate:"1966-11-17",firstName:"Xena",lastName:"Emerson",company:"Mollis Foundation"},{id:"id8560871658852105",balance:50981,birthdate:"1995-07-26",firstName:"Althea",lastName:"Mcdaniel",company:"Non Foundation"},{id:"id04508174972460055",balance:97869,birthdate:"1945-10-01",firstName:"Shad",lastName:"Beard",company:"Mollis Incorporated"}]),e=C({isShowingModal:!1,editingRowData:null,remountCounter:0});function p(t){e.editingRowData=t,e.remountCounter++,e.isShowingModal=!0}function b(t){const a=t.newData,n=e.editingRowData.id,d=o.value.find(i=>i.id===n);Object.assign(d,a),e.isShowingModal=!1}function f(){const t=e.editingRowData.id,a=o.value.findIndex(n=>n.id===t);o.value.splice(a,1),e.isShowingModal=!1}return(t,a)=>{const n=r("BlitzTable"),d=r("BlitzForm");return s(),v(I,null,[m(n,{schemaColumns:l,schemaGrid:l,rows:o.value,gridToggleField:{component:c(u)},onRowClick:a[0]||(a[0]=(i,g)=>p(g))},null,8,["rows","gridToggleField"]),m(c(w),{modelValue:e.isShowingModal,"onUpdate:modelValue":a[4]||(a[4]=i=>e.isShowingModal=i),classes:"form-modal"},{default:M(()=>[(s(),R(d,{key:e.remountCounter,schema:l,modelValue:e.editingRowData,actionButtons:["delete","edit","cancel","save"],columnCount:2,onCancel:a[1]||(a[1]=i=>e.isShowingModal=!1),onDelete:a[2]||(a[2]=()=>f()),onSave:a[3]||(a[3]=i=>b(i))},null,8,["modelValue"]))]),_:1},8,["modelValue"])],64)}}};var F=_(k,[["__scopeId","data-v-74aeafa8"]]);export{F as default};
