var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'name',\r
    component: 'input',\r
    label: 'Superhero name',\r
    subLabel: 'Think of something cool.',\r
  },\r
  {\r
    id: 'powerOrigin',\r
    label: 'Power origin',\r
    subLabel: 'Where does your power come from?',\r
    component: 'select',\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'mutation', slot: 'Mutation' },\r
      { component: 'option', value: 'self', slot: 'Self taught' },\r
      { component: 'option', value: 'item', slot: 'Magic item' },\r
      { component: 'option', value: 'gear', slot: 'Gear' },\r
    ],\r
    // make field "disabled" when the mode is 'readonly':\r
    dynamicProps: ['disabled'],\r
    disabled: (val, { mode }) => ['readonly', 'disabled'].includes(mode),\r
  },\r
  {\r
    id: 'stamina',\r
    component: 'input',\r
    type: 'range',\r
    label: 'Stamina',\r
    parseInput: (val) => Number(val),\r
    defaultValue: 50,\r
    min: 0,\r
    max: 100,\r
    // make field "disabled" when the mode is 'readonly':\r
    dynamicProps: ['disabled'],\r
    disabled: (val, { mode }) => ['readonly', 'disabled'].includes(mode),\r
  },\r
  {\r
    id: 'consent',\r
    component: 'input',\r
    type: 'checkbox',\r
    label: 'Do you agree with our terms?',\r
    defaultValue: false,\r
    // make field "disabled" when the mode is 'readonly':\r
    dynamicProps: ['disabled'],\r
    disabled: (val, { mode }) => ['readonly', 'disabled'].includes(mode),\r
  },\r
]\r
\r
const mode = ref('readonly')\r
const formData = ref({\r
  name: 'Johnny Silverhand',\r
  powerOrigin: 'self',\r
})\r
<\/script>\r
\r
<template>\r
  <div>\r
    mode:\r
    <select id="mode" v-model="mode" name="mode" style="margin-bottom: 1rem">\r
      <option value="edit">edit</option>\r
      <option value="readonly">readonly</option>\r
      <option value="disabled">disabled</option>\r
      <option value="raw">raw</option>\r
    </select>\r
\r
    <BlitzForm v-model="formData" :schema="schema" :mode="mode" :columnCount="2" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
