var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'tel',\r
    component: 'input',\r
    label: 'Phone nr (hyphenated)',\r
    subLabel: 'Type any number with \`-\` or \`(  )\`',\r
    events: {\r
      'update:modelValue': (val, { updateField }) =>\r
        updateField({ id: 'telClean', value: !val ? '' : val.replace(/[^\\d]/g, '').trim() }),\r
    },\r
  },\r
  {\r
    id: 'telClean',\r
    component: 'input',\r
    label: 'Phone nr (only numbers)',\r
    subLabel: 'This field is automatically updated when you type in a phone nr on the left.',\r
    // component props:\r
    disabled: true,\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm v-model="formData" :schema="schema" :columnCount="2" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
