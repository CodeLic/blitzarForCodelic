var r=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'firstName',\r
    component: 'input',\r
    label: 'First name',\r
  },\r
  {\r
    id: 'lastName',\r
    component: 'input',\r
    label: 'Last name',\r
  },\r
  {\r
    id: 'fullName',\r
    component: 'input',\r
    label: 'Full name (computed)',\r
    disabled: true,\r
    parseValue: (val, { formData, updateField }) => {\r
      const value = \`\${formData.firstName || ''} \${formData.lastName || ''}\`.trim()\r
      if (val !== value) updateField({ id: 'fullName', value })\r
      return value\r
    },\r
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
`;export{r as default};
