var r=`<script setup>\r
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
    subLabel: 'where the hero power is coming from',\r
  },\r
]\r
\r
const showStyling = ref(true)\r
const formData = {\r
  name: 'Peace of Cake',\r
  powerOrigin: 'self',\r
}\r
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
      :class="showStyling ? 'custom-labels-example' : ''"\r
      :schema="schema"\r
    />\r
  </div>\r
</template>\r
\r
<style lang="scss">\r
.custom-labels-example {\r
  .blitz-field {\r
    display: grid;\r
    grid-template-columns: 1fr 1fr;\r
    grid-template-areas:\r
      'component label'\r
      'sub-label sub-label';\r
  }\r
  .blitz-field__label {\r
    grid-area: label;\r
  }\r
  .blitz-field__sub-label {\r
    grid-area: sub-label;\r
  }\r
  .blitz-field__component {\r
    grid-area: component;\r
  }\r
  /** overwrite position for the title label: */\r
  ._title .blitz-field__label {\r
    grid-column: 1 / -1;\r
    font-weight: 600;\r
  }\r
}\r
</style>\r
`;export{r as default};
