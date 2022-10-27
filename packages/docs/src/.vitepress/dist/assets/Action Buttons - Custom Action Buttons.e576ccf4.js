var n=`<script setup>\r
import { ref } from 'vue'\r
import { showToast } from '../.vitepress/theme/toasts'\r
\r
const schema = [\r
  {\r
    id: 'enableLogging',\r
    component: 'input',\r
    type: 'checkbox',\r
    label: 'Enable logging',\r
    subLabel: 'shows hidden action button',\r
  },\r
  {\r
    id: 'name',\r
    component: 'input',\r
    label: 'Superhero name',\r
    subLabel: 'Think of something cool.',\r
    span: 2,\r
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
    span: 2,\r
  },\r
]\r
\r
const actionButtons = [\r
  'cancel',\r
  'edit',\r
  'save',\r
  {\r
    component: 'button',\r
    type: 'button',\r
    slot: 'log the data',\r
    showCondition: (_, { formData }) => formData.enableLogging,\r
    events: {\r
      click: (event, { formData }) => showToast('formData', formData),\r
    },\r
  },\r
]\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm\r
      v-model="formData"\r
      :actionButtons="actionButtons"\r
      :schema="schema"\r
      :columnCount="5"\r
    />\r
  </div>\r
</template>\r
`;export{n as default};
