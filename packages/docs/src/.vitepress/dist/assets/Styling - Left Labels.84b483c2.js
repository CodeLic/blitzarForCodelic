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
const showStyling = ref(true)\r
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
    <button style="margin-bottom: 1rem" @click="showStyling = !showStyling">\r
      Toggle Custom Styling\r
    </button>\r
\r
    <BlitzForm\r
      v-model="formData"\r
      :class="showStyling ? 'left-labels-example' : ''"\r
      labelPosition="left"\r
      :schema="schema"\r
    />\r
  </div>\r
</template>\r
\r
<style lang="scss">\r
.left-labels-example {\r
  /** Either set a minimum or fixed width like so: */\r
  .blitz-field__label,\r
  .blitz-field__sub-label {\r
    width: 150px;\r
  }\r
\r
  /** OR set the width of the columns like so: */\r
  .blitz-field {\r
    grid-template-columns: 150px 1fr;\r
  }\r
}\r
</style>\r
`;export{n as default};
