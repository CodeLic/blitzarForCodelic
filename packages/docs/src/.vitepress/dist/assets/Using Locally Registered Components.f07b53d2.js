var n=`<script setup>\r
import { markRaw, ref } from 'vue'\r
import { BlitzInput } from 'blitzar'\r
\r
const schema = [\r
  {\r
    id: 'name',\r
    component: markRaw(BlitzInput),\r
    label: 'Nickname',\r
    // component props:\r
    icon: 'person',\r
  },\r
  {\r
    id: 'height',\r
    component: markRaw(BlitzInput),\r
    label: 'Height',\r
    // component props:\r
    suffix: 'cm',\r
    type: 'number',\r
  },\r
  {\r
    id: 'description',\r
    component: markRaw(BlitzInput),\r
    label: 'Write something about yourself',\r
    span: 2,\r
    // component props:\r
    type: 'textarea',\r
    autogrow: true,\r
    icon: 'identification',\r
    clearable: true,\r
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
