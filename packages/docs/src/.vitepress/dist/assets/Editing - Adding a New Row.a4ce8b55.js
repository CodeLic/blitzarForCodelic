var n=`<script setup>\r
import { VueFinalModal } from 'vue-final-modal'\r
import { ref, reactive, markRaw } from 'vue'\r
import { BlitzGridToggle } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
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
  { id: 'id05232596295403691', balance: 53509, birthdate: '1977-06-21', firstName: 'Harrison', lastName: 'Miller', company: 'Enim Etiam Imperdiet Industries' }, // prettier-ignore\r
])\r
\r
const addInfo = reactive({\r
  isShowingModal: false,\r
  remountCounter: 0,\r
})\r
\r
function openAddModal() {\r
  // increment the \`remountCounter\` to force the BlitzForm to remount to display an empty form\r
  addInfo.remountCounter++\r
\r
  // show the modal\r
  addInfo.isShowingModal = true\r
}\r
\r
function addNewRow(saveEventPayload) {\r
  // the updated form data from the @save event of the BlitzForm\r
  const newData = saveEventPayload.newData\r
\r
  // add a random ID\r
  newData.id = Math.random().toString()\r
\r
  // push the new row into the rows array\r
  rows.value.push(newData)\r
\r
  // hide the modal again\r
  addInfo.isShowingModal = false\r
}\r
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
    defaultValue: 0,\r
    parseValue: (val, { mode }) => (mode === 'raw' ? (val || 0).toLocaleString() : val),\r
    parseInput: (inputString) => Number(inputString),\r
  },\r
]\r
<\/script>\r
\r
<template>\r
  <button @click="openAddModal">Add New Row</button>\r
\r
  <BlitzTable\r
    :schemaColumns="schemaColumnsAndGrid"\r
    :schemaGrid="schemaColumnsAndGrid"\r
    :rows="rows"\r
    :gridToggleField="{ component: blitzGridToggle }"\r
  />\r
\r
  <!-- Blitzar does not come with a modal library\r
    The example below uses \`vue-final-modal\`\r
    However, you can use any modal library you want -->\r
  <VueFinalModal v-model="addInfo.isShowingModal" classes="form-modal">\r
    <!-- show a BlitzForm in a modal -->\r
    <BlitzForm\r
      :key="addInfo.remountCounter"\r
      :schema="schemaColumnsAndGrid"\r
      :actionButtons="['edit', 'cancel', 'save']"\r
      :columnCount="2"\r
      @cancel="addInfo.isShowingModal = false"\r
      @save="(payload) => addNewRow(payload)"\r
    />\r
  </VueFinalModal>\r
</template>\r
\r
<style scoped>\r
:deep(.blitz-table--grid-card) {\r
  border: thin solid #dfe2e5;\r
}\r
:deep(.blitz-table--grid-card input) {\r
  min-width: 0;\r
}\r
:deep(.form-modal) {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
:deep(.form-modal > *) {\r
  background: white;\r
  padding: 1.5rem;\r
}\r
</style>\r
`;export{n as default};
