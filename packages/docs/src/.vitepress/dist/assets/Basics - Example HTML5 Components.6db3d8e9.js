var n=`<script setup>\r
import { onMounted, ref } from 'vue'\r
\r
const schemaColumnsAndGrid = [\r
  { id: 'firstName', label: 'First Name' },\r
  { id: 'lastName', label: 'Last Name' },\r
  { id: 'company', label: 'Company' },\r
  {\r
    id: 'birthdate',\r
    label: 'Birthdate',\r
    parseValue: (val) =>\r
      new Date(val).toLocaleDateString(undefined, {\r
        year: 'numeric',\r
        month: 'long',\r
        day: 'numeric',\r
      }),\r
  },\r
  { id: 'balance', label: 'Balance', parseValue: (val) => val.toLocaleString() },\r
]\r
\r
const rows = ref([\r
  {\r
    balance: 93683,\r
    birthdate: '1946-07-22',\r
    firstName: 'Harper',\r
    lastName: 'Nolan',\r
    company: 'Tortor At Risus LLC',\r
  },\r
  // other rows loaded asynchronously\r
])\r
\r
onMounted(async () => {\r
  rows.value = (await import('./users.json')).default\r
})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzTable\r
      :schemaColumns="schemaColumnsAndGrid"\r
      :schemaGrid="schemaColumnsAndGrid"\r
      :rows="rows"\r
      :rowsPerPage="5"\r
      :titleField="{ component: 'h3', slot: 'Users' }"\r
      :searchField="{\r
        component: 'input',\r
        placeholder: 'Search...',\r
        debounce: 300,\r
        clearable: true,\r
      }"\r
      :gridToggleField="{ label: 'grid', component: 'input', type: 'checkbox' }"\r
      :paginationField="{\r
        label: 'Open page:',\r
        component: 'input',\r
        type: 'number',\r
      }"\r
      :rowsPerPageField="{\r
        label: 'Rows per page:',\r
        component: 'select',\r
        slot: [\r
          { component: 'option', slot: '5' },\r
          { component: 'option', slot: '10' },\r
          { component: 'option', slot: '20' },\r
          { component: 'option', slot: '50' },\r
          { component: 'option', slot: '100' },\r
        ],\r
      }"\r
      :shownRowsInfoField="{ component: 'div' }"\r
    />\r
  </div>\r
</template>\r
`;export{n as default};
