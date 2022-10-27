var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'classroomName',\r
    label: 'Classroom Name',\r
    component: 'input',\r
  },\r
  {\r
    id: 'students',\r
    label: 'Student Names',\r
    component: 'BlitzListForm',\r
    schema: [\r
      { id: 'nameFirst', label: 'First Name', component: 'input' },\r
      { id: 'nameLast', label: 'Last Name', component: 'input' },\r
    ],\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm v-model="formData" :schema="schema" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
