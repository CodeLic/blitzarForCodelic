var n=`<script setup>\r
import { ref } from 'vue'\r
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
const showStyling = ref(true)\r
const formData = ref({\r
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
    <button style="margin-bottom: 1rem" @click="showStyling = !showStyling">\r
      Toggle Custom Styling\r
    </button>\r
\r
    <BlitzForm\r
      v-model="formData"\r
      :class="showStyling ? 'raw-form-data-style' : ''"\r
      labelPosition="left"\r
      :schema="schema"\r
      mode="raw"\r
      gridGap="0"\r
    />\r
  </div>\r
</template>\r
\r
<style lang="scss">\r
.raw-form-data-style {\r
  background: #f6f9fc;\r
  border-radius: 8px;\r
  padding: 1rem;\r
\r
  .blitz-field {\r
    border-bottom: 1px solid #d9e2f1;\r
    padding-top: 8px;\r
    padding-bottom: 8px;\r
    line-height: 24px;\r
  }\r
  .blitz-field__component {\r
    text-align: right;\r
  }\r
  ._title {\r
    font-weight: 600;\r
    border-bottom: none;\r
    padding: 0;\r
    line-height: 20px;\r
  }\r
}\r
</style>\r
`;export{n as default};
