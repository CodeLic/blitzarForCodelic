var n=`<script setup>\r
import { ref } from 'vue'\r
import { showToast } from '../.vitepress/theme/toasts'\r
\r
const schema = [\r
  {\r
    id: 'focusMe',\r
    component: 'input',\r
    label: 'Focus me',\r
    events: {\r
      focus: (val, { id, label }) => showToast(\`focussed: \u300C\${label}\u300D\`, \` (field id: \${id})\`),\r
    },\r
  },\r
  {\r
    id: 'typeInMe',\r
    component: 'input',\r
    label: 'Type something',\r
    events: {\r
      'update:modelValue': (val) => showToast('Typed:', val),\r
    },\r
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
