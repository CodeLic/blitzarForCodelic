var n=`<script setup>\r
import { ref } from 'vue'\r
import { showToast } from '../.vitepress/theme/toasts'\r
\r
const schema = [\r
  {\r
    id: 'size.width',\r
    label: 'Width',\r
    component: 'input',\r
    parseInput: (val) => Number(val),\r
    // component props:\r
    type: 'number',\r
  },\r
  {\r
    id: 'size.depth',\r
    label: 'Depth',\r
    component: 'input',\r
    parseInput: (val) => Number(val),\r
    // component props:\r
    type: 'number',\r
  },\r
  {\r
    id: 'size.height',\r
    label: 'Height',\r
    component: 'input',\r
    parseInput: (val) => Number(val),\r
    // component props:\r
    type: 'number',\r
  },\r
]\r
\r
function logupdateField(eventPayload) {\r
  showToast('@updateField', eventPayload)\r
}\r
function logFormInput(eventPayload, origin) {\r
  showToast('@update:modelValue', eventPayload, origin)\r
}\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      :schema="schema"\r
      :columnCount="3"\r
      @updateField="logupdateField"\r
      @update:modelValue="logFormInput"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
