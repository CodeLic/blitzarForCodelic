var r=`<script setup>\r
import { markRaw, onMounted, ref } from 'vue'\r
import { BlitzTable, BlitzInput } from 'blitzar'\r
\r
const blitzInput = markRaw(BlitzInput)\r
\r
const schemaColumns = [\r
  { id: 'firstName', label: 'First Name' },\r
  { id: 'lastName', label: 'Last Name' },\r
  { id: 'company', label: 'Company' },\r
  { id: 'birthdate', label: 'Birthdate' },\r
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
])\r
\r
function flipRows() {\r
  rows.value.reverse()\r
}\r
\r
onMounted(async () => {\r
  rows.value = (await import('./users.json')).default.slice(0, 10)\r
})\r
<\/script>\r
\r
<template>\r
  <BlitzTable\r
    class="my-table"\r
    :schemaColumns="schemaColumns"\r
    :rows="rows"\r
    :searchField="{\r
      component: blitzInput,\r
      placeholder: 'Search...',\r
      debounce: 300,\r
      clearable: true,\r
    }"\r
  >\r
    <div>Custom slot content! Let's render some buttons:</div>\r
    <button @click="() => flipRows()">flip rows \u2195</button>\r
  </BlitzTable>\r
</template>\r
`;export{r as default};
