var r=`<script setup>\r
import { ref } from 'vue'\r
import { validateFormPerSchema } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
import { showToast } from '../.vitepress/theme/toasts'\r
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
const formData = ref({\r
  name: undefined,\r
  age: undefined,\r
  consent: undefined,\r
})\r
const resetFormCounter = ref(0)\r
\r
function validateProgrammatically() {\r
  const result = validateFormPerSchema(formData.value, schema)\r
  const allGood = Object.values(result).every((res) => res === null)\r
\r
  showToast(allGood ? 'All good!' : 'Errors remain', result)\r
}\r
function setFormData() {\r
  formData.value.name = 'Luca Ban'\r
  formData.value.age = 18\r
  formData.value.consent = true\r
  resetFormCounter.value++\r
}\r
function clearFormData() {\r
  formData.value.name = undefined\r
  formData.value.age = undefined\r
  formData.value.consent = undefined\r
  resetFormCounter.value++\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <div style="margin-bottom: 1rem">\r
      <button @click="validateProgrammatically">validate Programmatically</button>\r
      <button @click="setFormData">Set Form Data</button>\r
      <button @click="clearFormData">Clear Form Data</button>\r
    </div>\r
\r
    <BlitzForm\r
      :key="resetFormCounter"\r
      v-model="formData"\r
      showErrorsOn="never"\r
      :schema="schema"\r
      :columnCount="3"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{r as default};
