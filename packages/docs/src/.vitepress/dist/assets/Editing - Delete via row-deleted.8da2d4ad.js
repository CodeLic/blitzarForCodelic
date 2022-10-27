var r=`<script setup>\r
import { BlitzTable, BlitzGridToggle } from 'blitzar'\r
import { markRaw, ref } from 'vue'\r
\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
\r
const rows = ref([\r
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
])\r
\r
/** @param {number} rowIndex */\r
function rowDeleted(rowIndex) {\r
  // remove via index from your rows array\r
  rows.value.splice(rowIndex, 1)\r
\r
  // here you could potentially make API calls etc.\r
}\r
\r
const schemaWithDeleteLogic = [\r
  {\r
    mode: 'edit',\r
    component: 'button',\r
    slot: '\u26D4\uFE0F',\r
    events: {\r
      /**\r
       * @param {PointerEvent} pointerEvent\r
       * @param {import('blitzar').FormContext} formContext\r
       */\r
      click: (pointerEvent, formContext) => {\r
        // you can use the \`deleteRow\` function available on formContext:\r
        formContext.deleteRow()\r
\r
        // now you can listen to the \`rowDeleted\` event to handle delete logic\r
      },\r
    },\r
  },\r
  { id: 'firstName', label: 'First Name', component: 'input' },\r
  { id: 'lastName', label: 'Last Name', component: 'input' },\r
  { id: 'company', label: 'Company', component: 'input' },\r
  { id: 'birthdate', label: 'Birthdate', component: 'input' },\r
  {\r
    id: 'balance',\r
    label: 'Balance',\r
    component: 'input',\r
    type: 'number',\r
    parseInput: (inputString) => Number(inputString),\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <BlitzTable\r
    :rows="rows"\r
    :schemaColumns="schemaWithDeleteLogic"\r
    :schemaGrid="schemaWithDeleteLogic"\r
    :gridToggleField="{ component: blitzGridToggle }"\r
    @rowDeleted="(rowIndex) => rowDeleted(rowIndex)"\r
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
