var n=`<script setup>\r
import { ref } from 'vue'\r
import { showToast } from '../.vitepress/theme/toasts'\r
\r
const schema = [\r
  {\r
    id: 'name',\r
    component: 'input',\r
    label: 'Superhero name',\r
    subLabel: 'Think of something cool.',\r
  },\r
  {\r
    id: 'powerOrigin',\r
    label: 'Power origin',\r
    subLabel: 'Where does your power come from?',\r
    // component props:\r
    component: 'select',\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'mutation', slot: 'Mutation' },\r
      { component: 'option', value: 'self', slot: 'Self taught' },\r
      { component: 'option', value: 'item', slot: 'Magic item' },\r
      { component: 'option', value: 'gear', slot: 'Gear' },\r
    ],\r
  },\r
]\r
\r
function onSave({ newData, oldData, formData }) {\r
  showToast('@save \`newData\`', newData) // an object with only the updated fields\r
  showToast('@save \`oldData\`', oldData) // the original object with all the field values\r
  showToast('@save \`formData\`', formData) // the formData in its current state\r
  // do something...\r
}\r
function onDelete() {\r
  showToast(\`clicked 'delete'\`)\r
}\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      :actionButtons="['edit', 'cancel', 'save', 'delete']"\r
      :columnCount="2"\r
      :schema="schema"\r
      @save="(payload) => onSave(payload)"\r
      @delete="() => onDelete()"\r
    />\r
  </div>\r
</template>\r
`;export{n as default};
