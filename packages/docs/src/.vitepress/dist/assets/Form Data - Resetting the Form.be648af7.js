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
    // component props:\r
    component: 'select',\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'mutation', slot: 'Mutation' },\r
      { component: 'option', value: 'self', slot: 'Self taught' },\r
      { component: 'option', value: 'item', slot: 'Magic item' },\r
      { component: 'option', value: 'gear', slot: 'Gear' },\r
    ],\r
  },\r
]\r
\r
const formData = ref({\r
  name: 'Thor Odinson',\r
  powerOrigin: 'self',\r
})\r
const actionButtons = ['cancel', 'save', 'edit']\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      mode="readonly"\r
      :schema="schema"\r
      :columnCount="2"\r
      :actionButtons="actionButtons"\r
    />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
