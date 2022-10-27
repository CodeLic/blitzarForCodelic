var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'myInput',\r
    label: 'Type something',\r
    component: 'input',\r
  },\r
  {\r
    label: 'a div showing the same content as the input',\r
    component: 'div',\r
    slot: (val, { formData }) => formData.myInput,\r
    dynamicProps: ['slot'],\r
    componentStyle: 'border: dashed thin goldenrod; padding: 2em',\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm :schema="schema" />\r
  </div>\r
</template>\r
`;export{n as default};
