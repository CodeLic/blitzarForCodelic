var r=`<script setup>\r
import { markRaw, onMounted, ref } from 'vue'\r
import { ROW_SELECTION_ID } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
import { BlitzInput, BlitzGridToggle, BlitzPagination } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
\r
const blitzInput = markRaw(BlitzInput)\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
const blitzPagination = markRaw(BlitzPagination)\r
\r
const schemaColumnsAndGrid = [\r
  { id: ROW_SELECTION_ID, label: 'Select', component: 'input', type: 'checkbox' },\r
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
const selectedRows = ref([])\r
\r
const rows = ref([\r
  {\r
    id: 'EA265B20-45F2-953C-C534-3E2A7862059C',\r
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
    <details>\r
      <summary>Selected rows ({{ selectedRows.length }})</summary>\r
      <pre class="_preview">{{ selectedRows }}</pre>\r
    </details>\r
    <!-- <pre>{{ selectedRows.length }}</pre> -->\r
\r
    <BlitzTable\r
      v-model:selectedRows="selectedRows"\r
      :schemaColumns="schemaColumnsAndGrid"\r
      :schemaGrid="schemaColumnsAndGrid"\r
      :rows="rows"\r
      :rowsPerPage="5"\r
      :titleField="{ component: 'h3', slot: 'Users' }"\r
      :searchField="{\r
        component: blitzInput,\r
        placeholder: 'Search...',\r
        debounce: 300,\r
        clearable: true,\r
      }"\r
      :gridToggleField="{ component: blitzGridToggle }"\r
      :paginationField="{ component: blitzPagination }"\r
      :rowsPerPageField="{\r
        label: 'Rows per page:',\r
        component: blitzInput,\r
        type: 'select',\r
        options: [\r
          { value: 5, label: '5' },\r
          { value: 10, label: '10' },\r
          { value: 20, label: '20' },\r
          { value: 50, label: '50' },\r
          { value: 100, label: '100' },\r
        ],\r
      }"\r
      :shownRowsInfoField="{ component: 'div' }"\r
    />\r
  </div>\r
</template>\r
\r
<style scoped>\r
:deep(.blitz-table--grid-card) {\r
  border: thin solid #dfe2e5;\r
}\r
\r
._preview {\r
  max-height: 500px;\r
  overflow-y: auto;\r
  background: rgba(0, 0, 0, 0.9);\r
  color: white;\r
}\r
</style>\r
`;export{r as default};
