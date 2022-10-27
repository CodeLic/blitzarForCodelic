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
const showErrorsOn = ref('save')\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    showErrorsOn:\r
    <select\r
      id="showErrorsOn"\r
      v-model="showErrorsOn"\r
      name="showErrorsOn"\r
      style="margin-bottom: 1rem"\r
    >\r
      <option value="interaction">interaction</option>\r
      <option value="save">save</option>\r
      <option value="save-focus">save-focus</option>\r
      <option value="never">never</option>\r
      <option value="always">always</option>\r
    </select>\r
\r
    <BlitzForm\r
      v-model="formData"\r
      :showErrorsOn="showErrorsOn"\r
      :schema="schema"\r
      :actionButtons="['cancel', 'edit', 'save']"\r
      :columnCount="3"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{r as default};
