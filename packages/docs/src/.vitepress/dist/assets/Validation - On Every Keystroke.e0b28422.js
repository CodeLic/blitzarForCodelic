var r=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'name',\r
    label: 'Name',\r
    component: 'input',\r
    required: true,\r
  },\r
  {\r
    id: 'age',\r
    label: 'Age',\r
    component: 'input',\r
    type: 'number',\r
    parseInput: (val) => Number(val),\r
    dynamicProps: ['error'],\r
    error: (val) => (Number(val) >= 18 ? null : 'You have to be over 18!'),\r
  },\r
  {\r
    id: 'consent',\r
    label: 'Do you agree with our terms?',\r
    component: 'input',\r
    type: 'checkbox',\r
    defaultValue: false,\r
    dynamicProps: ['error'],\r
    error: (val) => (val === true ? null : 'You must accept our terms'),\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      :schema="schema"\r
      :actionButtons="['cancel', 'edit', 'save']"\r
      :columnCount="3"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{r as default};
