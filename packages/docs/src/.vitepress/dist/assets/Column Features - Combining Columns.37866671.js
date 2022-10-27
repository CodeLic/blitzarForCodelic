var n=`<script setup>\r
import { markRaw, onMounted, ref } from 'vue'\r
import { BlitzInput, BlitzGridToggle, BlitzPagination } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
\r
const blitzInput = markRaw(BlitzInput)\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
const blitzPagination = markRaw(BlitzPagination)\r
\r
const schemaColumnsAndGrid = [\r
  {\r
    // you need to add a column \`id\` even if it doesn't have/need one\r
    //   just to make the column searchable\r
    id: 'fullName',\r
    label: 'Full Name',\r
    parseValue: (val, { formData }) => \`\${formData.firstName} \${formData.lastName}\`,\r
  },\r
  {\r
    // you need to add a column \`id\` even if it doesn't have/need one\r
    //   just to make the column searchable\r
    id: 'initials',\r
    label: 'Initials',\r
    parseValue: (val, { formData }) => \`\${formData.firstName[0]}.\${formData.lastName[0]}.\`,\r
  },\r
]\r
\r
const rows = ref([\r
  {\r
    firstName: 'Harper',\r
    lastName: 'Nolan',\r
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
</style>\r
`;export{n as default};
