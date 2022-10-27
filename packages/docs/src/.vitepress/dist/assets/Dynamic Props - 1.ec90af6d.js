var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'color',\r
    span: true,\r
    component: 'select',\r
    label: 'What is your favorite color?',\r
    dynamicProps: ['subLabel'],\r
    subLabel: (val) =>\r
      val === 'red'\r
        ? 'like the sun'\r
        : val === 'blue'\r
        ? 'like the sky'\r
        : val === 'green'\r
        ? 'green is not a creative color'\r
        : val === 'other'\r
        ? 'oh, come on, just pick one'\r
        : 'pick a color!',\r
    // component props:\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'red', slot: 'red' },\r
      { component: 'option', value: 'blue', slot: 'blue' },\r
      { component: 'option', value: 'green', slot: 'green' },\r
      { component: 'option', value: 'other', slot: 'other' },\r
    ],\r
    spread: true,\r
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
