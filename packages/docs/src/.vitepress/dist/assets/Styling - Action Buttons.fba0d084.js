var n=`<script setup>\r
import { ref, reactive } from 'vue'\r
\r
const schema = [\r
  {\r
    label: 'Hero Details',\r
    class: '_title',\r
  },\r
  {\r
    id: 'name',\r
    component: 'input',\r
    label: 'Superhero name',\r
  },\r
  {\r
    id: 'powerOrigin',\r
    component: 'input',\r
    label: 'Power origin',\r
    subLabel: 'where the hero power is coming from',\r
    componentStyle: 'align-self: start',\r
  },\r
  {\r
    id: 'stamina',\r
    component: 'input',\r
    label: 'Stamina',\r
  },\r
  {\r
    id: 'power',\r
    component: 'input',\r
    label: 'Power',\r
  },\r
  {\r
    id: 'roleModel',\r
    component: 'input',\r
    label: 'Role model',\r
  },\r
]\r
\r
const actionButtonsPosition = ref('top')\r
\r
const actionButtons = ['delete', 'edit', 'cancel', 'save']\r
\r
const formData = reactive({\r
  name: 'Peace of Cake',\r
  powerOrigin: 'self',\r
  stamina: 5000,\r
  power: 9000,\r
  roleModel: 'Thor Odinson',\r
})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <select v-model="actionButtonsPosition" style="margin-bottom: 1rem">\r
      <option value="top">top</option>\r
      <option value="bottom">bottom</option>\r
      <option value="right">right</option>\r
      <option value="left">left</option>\r
    </select>\r
\r
    <BlitzForm\r
      v-model="formData"\r
      :actionButtonsPosition="actionButtonsPosition"\r
      :schema="schema"\r
      :actionButtons="actionButtons"\r
    />\r
  </div>\r
</template>\r
`;export{n as default};
