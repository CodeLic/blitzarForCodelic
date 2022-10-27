var n=`<script setup>\r
import { reactive, markRaw, computed } from 'vue'\r
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
function autoFocusInput(mouseEvent) {\r
  const cellEl = mouseEvent.srcElement.parentElement\r
  setTimeout(() => {\r
    const inputEl = cellEl.querySelector('input')\r
    if (inputEl) inputEl.focus()\r
  }, 0)\r
}\r
\r
const editInfo = reactive({ editingColId: '', editingRowId: '', lastEdit: null })\r
\r
function onUpdateCell({ rowId, colId, value }) {\r
  editInfo.lastEdit = { rowId, colId, value }\r
}\r
\r
function onCellDblclick(mouseEvent, rowData, colId) {\r
  console.log(\`@cellDblclick (mouseEvent, rowData, colId) \u2192 \`, mouseEvent, rowData, colId)\r
  editInfo.editingColId = colId\r
  editInfo.editingRowId = rowData.id\r
  // auto focus logic:\r
  autoFocusInput(mouseEvent)\r
}\r
\r
function stopEditing() {\r
  editInfo.editingRowId = ''\r
  editInfo.editingColId = ''\r
  editInfo.lastEdit = null\r
}\r
\r
function saveLastEdit() {\r
  if (!editInfo.lastEdit) return stopEditing()\r
\r
  const { rowId, colId, value } = editInfo.lastEdit\r
\r
  const row = rows.find((r) => r.id === rowId)\r
  if (!row) return stopEditing()\r
\r
  row[colId] = value\r
  stopEditing()\r
}\r
\r
const schemaWithEditingLogic = computed(() => {\r
  // return the columns with the added logic to edit & save data\r
  return schemaColumnsAndGrid.map((blueprint) => {\r
    return {\r
      ...blueprint,\r
      /**\r
       * The editing logic for every schema blueprint is dynamically setting the "mode" of a cell.\r
       * It does this based on the colId and rowId which are being edited.\r
       */\r
      dynamicProps: ['mode'],\r
      mode: (val, { formData }) =>\r
        editInfo.editingColId === blueprint.id && editInfo.editingRowId === formData.id\r
          ? 'edit'\r
          : 'raw',\r
      events: {\r
        keydown: (event) => {\r
          if (event.code === 'Enter') saveLastEdit()\r
          if (event.code === 'Escape') stopEditing()\r
        },\r
        blur: () => saveLastEdit(),\r
      },\r
    }\r
  })\r
})\r
<\/script>\r
\r
<template>\r
  <BlitzTable\r
    :schemaColumns="schemaWithEditingLogic"\r
    :schemaGrid="schemaWithEditingLogic"\r
    :rows="rows"\r
    :gridToggleField="{ component: blitzGridToggle }"\r
    @updateCell="({ rowId, colId, value }) => onUpdateCell({ rowId, colId, value })"\r
    @cellDblclick="(mouseEvent, rowData, colId) => onCellDblclick(mouseEvent, rowData, colId)"\r
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
`;export{n as default};
