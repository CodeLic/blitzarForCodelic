var r=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  { id: 'nameFirst', label: 'First Name', component: 'input' },\r
  { id: 'nameLast', label: 'Last Name', component: 'input' },\r
]\r
const formData = ref([])\r
<\/script>\r
\r
<template>\r
  <div>\r
    <strong>Student Names</strong><br /><br />\r
\r
    <BlitzListForm v-model="formData" :schema="schema" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{r as default};
