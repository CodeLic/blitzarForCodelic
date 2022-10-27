var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    component: 'h4',\r
    slot: 'You can use header tags in your forms (this is an <h4>)',\r
    style: 'color: black',\r
  },\r
  {\r
    component: 'a',\r
    href: 'https://google.com',\r
    slot: 'google.com (this is an <a> component)',\r
    style: 'font-weight: bold',\r
  },\r
  {\r
    label: \`you can use an ol > with nested li\`,\r
    component: 'ol',\r
    slot: [\r
      { component: 'li', slot: 'unos' },\r
      { component: 'li', slot: 'dos' },\r
      { component: 'li', slot: 'tres' },\r
    ],\r
  },\r
  {\r
    component: 'div',\r
    slot: \`You can even use regular divs in your forms!\\n\\nI'm a div!\`,\r
    style: 'border: dashed thin goldenrod; padding: 1em',\r
  },\r
  {\r
    label: 'Or nested divs!',\r
    component: 'div',\r
    // 'style' would be applied to the entire field\r
    // 'componentStyle' is applied to just the component\r
    componentStyle: 'border: dashed thin slateblue; padding: 1em',\r
    slot: {\r
      component: 'div',\r
      style: 'border: dashed thin coral; padding: 1em',\r
      slot: {\r
        component: 'div',\r
        style: 'border: dashed thin olivedrab; padding: 1em',\r
        slot: 'nested div',\r
      },\r
    },\r
  },\r
  {\r
    label: 'And images of course!',\r
    component: 'img',\r
    src: 'https://i.imgur.com/C87xx6T.jpeg',\r
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
