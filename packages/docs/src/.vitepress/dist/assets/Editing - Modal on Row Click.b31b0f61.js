var n=`<script setup>\r
import { VueFinalModal } from 'vue-final-modal'\r
import { ref, reactive, markRaw } from 'vue'\r
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
  { id: 'id23809333906635666', balance: 93450, birthdate: '2017-11-27', firstName: 'Wendy', lastName: 'Strong', company: 'Ac PC' }, // prettier-ignore\r
  { id: 'id7894530275645739', balance: 64590, birthdate: '1975-12-10', firstName: 'Kyla', lastName: 'Dalton', company: 'Urna Nec Luctus PC' }, // prettier-ignore\r
  { id: 'id9425069129254229', balance: 72444, birthdate: '2001-07-31', firstName: 'Aimee', lastName: 'Stephens', company: 'Tempus Incorporated' }, // prettier-ignore\r
  { id: 'id5539749518518775', balance: 99856, birthdate: '1972-01-28', firstName: 'Phelan', lastName: 'Jennings', company: 'Consectetuer Adipiscing Elit LLP' }, // prettier-ignore\r
  { id: 'id9413108287279646', balance: 83325, birthdate: '1966-11-17', firstName: 'Xena', lastName: 'Emerson', company: 'Mollis Foundation' }, // prettier-ignore\r
  { id: 'id8560871658852105', balance: 50981, birthdate: '1995-07-26', firstName: 'Althea', lastName: 'Mcdaniel', company: 'Non Foundation' }, // prettier-ignore\r
  { id: 'id04508174972460055', balance: 97869, birthdate: '1945-10-01', firstName: 'Shad', lastName: 'Beard', company: 'Mollis Incorporated' }, // prettier-ignore\r
])\r
\r
const editInfo = reactive({\r
  isShowingModal: false,\r
  editingRowData: null,\r
  remountCounter: 0,\r
})\r
\r
function onRowClick(rowData) {\r
  // set the new form data for the modal\r
  editInfo.editingRowData = rowData\r
\r
  // increment the \`remountCounter\` to force the BlitzForm to remount to display the new form data\r
  editInfo.remountCounter++\r
\r
  // show the modal\r
  editInfo.isShowingModal = true\r
}\r
\r
function saveEdits(saveEventPayload) {\r
  // the updated form data from the @save event of the BlitzForm\r
  const newData = saveEventPayload.newData\r
\r
  // the row id that is being edited\r
  const rowId = editInfo.editingRowData.id\r
\r
  // find the row in the local state\r
  const rowToUpdate = rows.value.find((r) => r.id === rowId)\r
\r
  // update the row fields\r
  Object.assign(rowToUpdate, newData)\r
\r
  // hide the modal again\r
  editInfo.isShowingModal = false\r
}\r
\r
function deleteEditingRow() {\r
  // the row id that is being edited\r
  const rowId = editInfo.editingRowData.id\r
\r
  // find the row index in the local state\r
  const rowIndexToDelete = rows.value.findIndex((r) => r.id === rowId)\r
\r
  // splice out the row\r
  rows.value.splice(rowIndexToDelete, 1)\r
\r
  // hide the modal again\r
  editInfo.isShowingModal = false\r
}\r
<\/script>\r
\r
<template>\r
  <BlitzTable\r
    :schemaColumns="schemaColumnsAndGrid"\r
    :schemaGrid="schemaColumnsAndGrid"\r
    :rows="rows"\r
    :gridToggleField="{ component: blitzGridToggle }"\r
    @rowClick="(e, rowData) => onRowClick(rowData)"\r
  />\r
\r
  <!-- Blitzar does not come with a modal library\r
    The example below uses \`vue-final-modal\`\r
    However, you can use any modal library you want -->\r
  <VueFinalModal v-model="editInfo.isShowingModal" classes="form-modal">\r
    <!-- show a BlitzForm in a modal -->\r
    <BlitzForm\r
      :key="editInfo.remountCounter"\r
      :schema="schemaColumnsAndGrid"\r
      :modelValue="editInfo.editingRowData"\r
      :actionButtons="['delete', 'edit', 'cancel', 'save']"\r
      :columnCount="2"\r
      @cancel="editInfo.isShowingModal = false"\r
      @delete="() => deleteEditingRow()"\r
      @save="(payload) => saveEdits(payload)"\r
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
