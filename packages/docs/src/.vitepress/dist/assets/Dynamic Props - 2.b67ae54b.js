var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'under18',\r
    component: 'input',\r
    type: 'checkbox',\r
    defaultValue: false,\r
    label: 'Are you under 18?',\r
  },\r
  {\r
    id: 'parentalConsent',\r
    component: 'input',\r
    type: 'checkbox',\r
    defaultValue: false,\r
    label: 'Do you have parental consent?',\r
    subLabel: 'Only applicable when under 18',\r
    dynamicProps: ['disabled'],\r
    // component props:\r
    disabled: (val, { formData }) => !formData.under18,\r
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
