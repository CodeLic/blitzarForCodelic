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
let remountCounter = ref(0)\r
\r
function clearFormData() {\r
  formData.value = {\r
    name: '',\r
    powerOrigin: '',\r
  }\r
}\r
function loadNewData() {\r
  formData.value = {\r
    name: 'Tony Stark',\r
    powerOrigin: 'gear',\r
  }\r
}\r
<\/script>\r
\r
<template>\r
  <div>\r
    <div style="margin-bottom: 1rem">\r
      <button type="button" @click="clearFormData(), remountCounter++">\r
        Clear form data & remount\r
      </button>\r
      <button type="button" @click="loadNewData(), remountCounter++">\r
        Load new data & remount\r
      </button>\r
      <button type="button" style="color: crimson" @click="clearFormData">\r
        Clear form data - no remount!\r
      </button>\r
      <button type="button" style="color: crimson" @click="loadNewData">\r
        Load new data - no remount!\r
      </button>\r
    </div>\r
\r
    <BlitzForm\r
      :key="JSON.stringify(remountCounter)"\r
      v-model="formData"\r
      :schema="schema"\r
      :columnCount="2"\r
    />\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
