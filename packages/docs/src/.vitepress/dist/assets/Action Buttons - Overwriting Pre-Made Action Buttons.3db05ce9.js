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
const actionButtonDefaults = {\r
  // you can pass a class to adjust the look of the button:\r
  edit: { slot: \`\u270F\uFE0F Edit\`, componentClasses: 'my-button-class' },\r
  // you can also directly adjust the style:\r
  cancel: { componentStyle: 'background: none; border: none;' },\r
  save: {\r
    slot: \`\u{1F4BE} Save\`,\r
    componentStyle: 'background: none; border: thin solid green; color: green',\r
  },\r
  delete: {\r
    componentStyle: 'background: none; border: none; color: crimson',\r
    showCondition: (_, { mode }) => mode !== 'edit',\r
  },\r
}\r
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
  <div class="example-action-buttons-overwrite-style">\r
    <BlitzForm\r
      v-model="formData"\r
      :actionButtons="['edit', 'cancel', 'save', 'delete']"\r
      :actionButtonDefaults="actionButtonDefaults"\r
      :columnCount="2"\r
      :schema="schema"\r
      @save="(payload) => onSave(payload)"\r
      @delete="() => onDelete()"\r
    />\r
  </div>\r
</template>\r
\r
<style scoped>\r
.example-action-buttons-overwrite-style .my-button-class {\r
  border: none;\r
  background: none;\r
  font-weight: 700;\r
}\r
</style>\r
`;export{n as default};
