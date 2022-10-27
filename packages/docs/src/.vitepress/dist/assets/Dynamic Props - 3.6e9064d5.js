var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'car',\r
    component: 'input',\r
    type: 'checkbox',\r
    defaultValue: false,\r
    label: 'Do you have a car?',\r
  },\r
  {\r
    id: 'carType',\r
    component: 'input',\r
    label: 'What is the brand?',\r
    subLabel: 'This is only shown when the first question is \`true\`.',\r
    dynamicProps: ['showCondition'],\r
    showCondition: (val, { formData }) => formData.car,\r
  },\r
  {\r
    id: 'carNrPlate',\r
    component: 'input',\r
    label: 'Enter your license plate',\r
    subLabel: "This is hidden when the form is set to 'view' mode. Try clicking 'save'.",\r
    dynamicProps: ['showCondition'],\r
    showCondition: (val, { formData, mode }) => formData.car && mode === 'edit',\r
  },\r
]\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      :schema="schema"\r
      :actionButtons="['edit', 'save']"\r
      :columnCount="2"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
