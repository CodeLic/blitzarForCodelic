var r=`<script setup>\r
import { ref, markRaw } from 'vue'\r
import { BlitzGridToggle } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
\r
const schemaColumnsAndGrid = [\r
  { id: 'firstName', label: 'First Name', component: 'input' },\r
  { id: 'lastName', label: 'Last Name', component: 'input' },\r
  { id: 'company', label: 'Company', component: 'input' },\r
  { id: 'birthdate', label: 'Birthdate', component: 'input' },\r
  {\r
    id: 'balance',\r
    label: 'Balance',\r
    component: 'input',\r
    type: 'number',\r
    parseValue: (val, { mode }) => (mode === 'raw' ? val.toLocaleString() : val),\r
    parseInput: (inputString) => Number(inputString),\r
  },\r
]\r
\r
const rows = [\r
  {\r
    id: 'id8269187329780852',\r
    balance: 93683,\r
    birthdate: '1946-07-22',\r
    firstName: 'Harper',\r
    lastName: 'Nolan',\r
    company: 'Tortor At Risus LLC',\r
  },\r
  { id: 'id44304518826349204', balance: 69632, birthdate: '1945-11-27', firstName: 'Whoopi', lastName: 'David', company: 'Ipsum Institute' }, // prettier-ignore\r
  { id: 'id5068577691466047', balance: 75903, birthdate: '1955-10-01', firstName: 'Peter', lastName: 'Mendez', company: 'Curabitur Dictum LLC' }, // prettier-ignore\r
  { id: 'id05232596295403691', balance: 53509, birthdate: '1977-06-21', firstName: 'Harrison', lastName: 'Miller', company: 'Enim Etiam Imperdiet Industries' }, // prettier-ignore\r
  { id: 'id23809333906635666', balance: 93450, birthdate: '2017-11-27', firstName: 'Wendy', lastName: 'Strong', company: 'Ac PC' }, // prettier-ignore\r
  { id: 'id7894530275645739', balance: 64590, birthdate: '1975-12-10', firstName: 'Kyla', lastName: 'Dalton', company: 'Urna Nec Luctus PC' }, // prettier-ignore\r
  { id: 'id9425069129254229', balance: 72444, birthdate: '2001-07-31', firstName: 'Aimee', lastName: 'Stephens', company: 'Tempus Incorporated' }, // prettier-ignore\r
  { id: 'id5539749518518775', balance: 99856, birthdate: '1972-01-28', firstName: 'Phelan', lastName: 'Jennings', company: 'Consectetuer Adipiscing Elit LLP' }, // prettier-ignore\r
  { id: 'id9413108287279646', balance: 83325, birthdate: '1966-11-17', firstName: 'Xena', lastName: 'Emerson', company: 'Mollis Foundation' }, // prettier-ignore\r
  { id: 'id8560871658852105', balance: 50981, birthdate: '1995-07-26', firstName: 'Althea', lastName: 'Mcdaniel', company: 'Non Foundation' }, // prettier-ignore\r
  { id: 'id04508174972460055', balance: 97869, birthdate: '1945-10-01', firstName: 'Shad', lastName: 'Beard', company: 'Mollis Incorporated' }, // prettier-ignore\r
]\r
\r
const mode = ref('raw')\r
\r
function onUpdateCell({ rowId, colId, value, origin }) {\r
  console.log('@updateCell', { rowId, colId, value, origin })\r
  const row = rows.find((r) => r.id === rowId)\r
  if (!row) return\r
  row[colId] = value\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <h4 style="display: inline">Table Mode:</h4>\r
    <input id="raw" v-model="mode" type="radio" value="raw" />\r
    <label for="raw">raw</label>\r
    <input id="edit" v-model="mode" type="radio" value="edit" />\r
    <label for="edit">edit</label>\r
  </div>\r
\r
  <BlitzTable\r
    :schemaColumns="schemaColumnsAndGrid"\r
    :schemaGrid="schemaColumnsAndGrid"\r
    :rows="rows"\r
    :mode="mode"\r
    :gridToggleField="{ component: blitzGridToggle }"\r
    @updateCell="({ rowId, colId, value, origin }) => onUpdateCell({ rowId, colId, value, origin })"\r
  />\r
</template>\r
\r
<style scoped>\r
:deep(.blitz-table--grid-card) {\r
  border: thin solid #dfe2e5;\r
}\r
:deep(.blitz-table--grid-card input) {\r
  min-width: 0;\r
}\r
</style>\r
`;export{r as default};
