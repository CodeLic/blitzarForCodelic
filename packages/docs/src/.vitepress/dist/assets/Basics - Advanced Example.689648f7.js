var r=`<script setup>\r
import { markRaw, onMounted, ref } from 'vue'\r
import { BlitzInput, BlitzGridToggle, BlitzPagination, BlitzFilters } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
\r
const blitzInput = markRaw(BlitzInput)\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
const blitzPagination = markRaw(BlitzPagination)\r
const blitzFilters = markRaw(BlitzFilters)\r
\r
const schemaColumnsAndGrid = [\r
  {\r
    id: 'avatarUrl',\r
    label: 'Avatar',\r
    component: 'img',\r
    mode: 'edit',\r
    src: (val) => val,\r
    dynamicProps: ['src'],\r
    style: 'min-height: 50px; min-width: 50px', // to prevent UI bounce before images are loaded\r
  },\r
  { id: 'firstName', label: 'First Name' },\r
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
  { id: 'isActive', label: 'Online', parseValue: (val) => (val ? '\u{1F7E2}' : '\u{1F534}') },\r
  {\r
    id: 'favoriteAnimal',\r
    label: 'Animal',\r
    style: 'font-size: 2.5em',\r
    parseValue: (val) => {\r
      if (val === 'cat') return '\u{1F431}'\r
      if (val === 'chicken') return '\u{1F414}'\r
      if (val === 'cow') return '\u{1F42E}'\r
      if (val === 'dog') return '\u{1F436}'\r
      if (val === 'duck') return '\u{1F986}'\r
      if (val === 'horse') return '\u{1F434}'\r
      if (val === 'owl') return '\u{1F989}'\r
      if (val === 'pig') return '\u{1F437}'\r
      if (val === 'rabbit') return '\u{1F430}'\r
      return '??'\r
    },\r
  },\r
]\r
const rows = ref([\r
  {\r
    avatarUrl: 'https://gravatar.com/avatar/8aa5e7a6220f2a87684a9f4e6286e343?s=50&d=robohash&r=x',\r
    firstName: 'Harper',\r
    birthdate: '1946-07-22',\r
    balance: 93683,\r
    isActive: false,\r
    favoriteAnimal: 'owl',\r
  },\r
  // other rows loaded asynchronously\r
])\r
\r
const filterOptions = {\r
  isActive: [\r
    { label: '\u{1F7E2}', value: true },\r
    { label: '\u{1F534}', value: false },\r
  ],\r
  favoriteAnimal: [\r
    { label: 'Cat', value: 'cat' },\r
    { label: 'Chicken', value: 'chicken' },\r
    { label: 'Cow', value: 'cow' },\r
    { label: 'Dog', value: 'dog' },\r
    { label: 'Duck', value: 'duck' },\r
    { label: 'Horse', value: 'horse' },\r
    { label: 'Owl', value: 'owl' },\r
    { label: 'Pig', value: 'pig' },\r
    { label: 'Rabbit', value: 'rabbit' },\r
  ],\r
}\r
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
      :filtersField="{ component: blitzFilters, filterOptions }"\r
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
`;export{r as default};
