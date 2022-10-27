var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'firstName',\r
    label: 'First name',\r
    component: 'input',\r
    events: {\r
      'update:modelValue': (val, { formData, updateField }) => {\r
        const { lastName = '' } = formData\r
        const value = \`\${val} \${lastName}\`.trim()\r
        updateField({ id: 'fullName', value })\r
      },\r
    },\r
  },\r
  {\r
    id: 'lastName',\r
    label: 'Last name',\r
    component: 'input',\r
    events: {\r
      'update:modelValue': (val, { formData, updateField }) => {\r
        const { firstName = '' } = formData\r
        const value = \`\${firstName} \${val}\`.trim()\r
        updateField({ id: 'fullName', value })\r
      },\r
    },\r
  },\r
  {\r
    id: 'fullName',\r
    label: 'Full name (computed)',\r
    component: 'input',\r
    disabled: true,\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm v-model="formData" :schema="schema" :columnCount="3" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
