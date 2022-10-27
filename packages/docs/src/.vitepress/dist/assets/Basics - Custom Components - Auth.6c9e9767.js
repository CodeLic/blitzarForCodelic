var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'username',\r
    component: 'BlitzInput',\r
    label: 'Email',\r
    // component props:\r
    placeholder: 'you@email.com',\r
    autocomplete: 'username',\r
  },\r
  {\r
    id: 'password',\r
    component: 'BlitzInput',\r
    label: 'Password',\r
    // component props:\r
    type: 'password',\r
    autocomplete: 'new-password',\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <form>\r
      <BlitzForm v-model="formData" :schema="schema" :columnCount="2" />\r
    </form>\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
