var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  // the \`deleteRow\` function and \`rowIndex\` props used below are only available in schemas of a BlitzListForm!\r
  {\r
    component: 'button',\r
    slot: '\u2212',\r
    events: {\r
      click: (e, { deleteRow }) => deleteRow(),\r
    },\r
    dynamicProps: ['disabled'],\r
    disabled: (val, { rowIndex, formData }) => rowIndex === formData.length,\r
    componentClasses: 'delete-button',\r
    span: '20px',\r
  },\r
  {\r
    id: 'type',\r
    label: 'Type',\r
    component: 'select',\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'personal', slot: 'Personal' },\r
      { component: 'option', value: 'work', slot: 'Work' },\r
    ],\r
  },\r
  {\r
    id: 'comment',\r
    label: 'Comment',\r
    component: 'input',\r
  },\r
  {\r
    id: 'amount',\r
    label: 'Amount',\r
    component: 'input',\r
    type: 'number',\r
    parseInput: (val) => Number(val),\r
  },\r
  {\r
    id: 'paid for',\r
    label: 'Paid for',\r
    component: 'input',\r
    type: 'checkbox',\r
    defaultValue: false,\r
    span: '100px',\r
  },\r
]\r
\r
const formData = ref([])\r
<\/script>\r
\r
<template>\r
  <div>\r
    <strong>Expenses</strong><br /><br />\r
\r
    <BlitzListForm v-model="formData" :schema="schema" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
\r
<style>\r
.delete-button {\r
  height: 20px;\r
  width: 20px;\r
  line-height: 1;\r
  color: white;\r
  background: crimson;\r
  border: none;\r
  font-weight: 900;\r
  border-radius: 100%;\r
  outline: none;\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.delete-button:disabled {\r
  opacity: 0.5;\r
}\r
</style>\r
`;export{n as default};
