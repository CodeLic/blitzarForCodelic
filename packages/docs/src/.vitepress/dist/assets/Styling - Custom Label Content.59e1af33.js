var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'example',\r
    component: 'input',\r
    label: 'Example of a label slot with extra text',\r
    slots: {\r
      label: {\r
        component: 'span',\r
        slot: '(extra text)',\r
        style: 'color: grey; padding-left: 0.5em',\r
      },\r
    },\r
  },\r
  {\r
    id: 'tooltip',\r
    component: 'input',\r
    label: 'Example of a label slot with a tooltip',\r
    slots: {\r
      label: {\r
        component: 'span',\r
        slot: {\r
          // Make sure to globally register the custom component!\r
          component: 'VueCustomTooltip',\r
          slot: '\u2139\uFE0F',\r
          label: \`Hi! I'm a tooltip! Yiiiihaaaa\`,\r
        },\r
      },\r
    },\r
  },\r
  {\r
    id: 'rainbows',\r
    component: 'input',\r
    label: 'Example of a label slot with multiple components',\r
    slots: {\r
      label: [\r
        { component: 'span', slot: 'double rainbow!!', style: 'color: grey; padding: 0 1em' },\r
        '\u{1F308}',\r
        { component: 'span', slot: '\u{1F308}', style: 'font-size: 2em' },\r
      ],\r
    },\r
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
