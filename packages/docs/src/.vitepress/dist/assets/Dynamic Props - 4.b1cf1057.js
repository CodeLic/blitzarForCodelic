var r=`<script setup>\r
import { ref } from 'vue'\r
\r
const carData = [\r
  { year: '2015', make: 'Audi', model: 'A3', trim: '2.0' },\r
  { year: '2015', make: 'Audi', model: 'A3', trim: '1.8' },\r
  { year: '2015', make: 'Audi', model: 'A6', trim: '2.5' },\r
  { year: '2015', make: 'Audi', model: 'A6', trim: '3.0' },\r
  { year: '2015', make: 'BMW', model: 'M3', trim: 'b2.0' },\r
  { year: '2015', make: 'BMW', model: 'M3', trim: 'b1.8' },\r
  { year: '2015', make: 'BMW', model: 'M5', trim: 'b2.5' },\r
  { year: '2015', make: 'BMW', model: 'M5', trim: 'b3.0' },\r
  { year: '2016', make: 'Chevy', model: 'Impala', trim: 'c2.0' },\r
  { year: '2016', make: 'Chevy', model: 'Impala', trim: 'c1.8' },\r
  { year: '2016', make: 'Chevy', model: 'Malibu', trim: 'c2.5' },\r
  { year: '2016', make: 'Chevy', model: 'Malibu', trim: 'c3.0' },\r
  { year: '2016', make: 'Dodge', model: 'RAM', trim: 'd2.0' },\r
  { year: '2016', make: 'Dodge', model: 'RAM', trim: 'd1.8' },\r
  { year: '2016', make: 'Dodge', model: 'Challanger', trim: 'd2.5' },\r
  { year: '2016', make: 'Dodge', model: 'Challanger', trim: 'd3.0' },\r
]\r
\r
const uniqueValues = (array) => ['', ...new Set(array)]\r
\r
const clearFields = (fieldIds, updateField) => {\r
  fieldIds.forEach((id) => updateField({ id, value: '' }))\r
}\r
\r
const schema = [\r
  {\r
    id: 'year',\r
    label: 'Year',\r
    component: 'select',\r
    events: {\r
      // clear fields right from input to prevent invalid data\r
      'update:modelValue': (val, { updateField }) =>\r
        clearFields(['make', 'model', 'trim'], updateField),\r
    },\r
    // component props:\r
    slot: uniqueValues(carData.map((d) => d.year)).map((value) => ({\r
      component: 'option',\r
      value,\r
      slot: value,\r
    })),\r
  },\r
  {\r
    id: 'make',\r
    label: 'Make',\r
    component: 'select',\r
    dynamicProps: ['slot'],\r
    events: {\r
      // clear fields right from input to prevent invalid data\r
      'update:modelValue': (val, { updateField }) => clearFields(['model', 'trim'], updateField),\r
    },\r
    // component props:\r
    slot: (val, { formData }) => {\r
      const { year } = formData || {}\r
      const makes = carData.filter((car) => car.year === year).map((d) => d.make)\r
      return uniqueValues(makes).map((value) => ({ component: 'option', value, slot: value }))\r
    },\r
  },\r
  {\r
    id: 'model',\r
    label: 'Model',\r
    component: 'select',\r
    dynamicProps: ['slot'],\r
    events: {\r
      // clear fields right from input to prevent invalid data\r
      'update:modelValue': (val, { updateField }) => clearFields(['trim'], updateField),\r
    },\r
    // component props:\r
    slot: (val, { formData }) => {\r
      const { year, make } = formData || {}\r
      const models = carData\r
        .filter((car) => car.year === year && car.make === make)\r
        .map((d) => d.model)\r
      return uniqueValues(models).map((value) => ({ component: 'option', value, slot: value }))\r
    },\r
  },\r
  {\r
    id: 'trim',\r
    label: 'Trim',\r
    component: 'select',\r
    dynamicProps: ['slot'],\r
    // component props:\r
    slot: (val, { formData }) => {\r
      const { year, make, model } = formData || {}\r
      const trims = carData\r
        .filter((car) => car.year === year && car.make === make && car.model === model)\r
        .map((d) => d.trim)\r
      return uniqueValues(trims).map((value) => ({ component: 'option', value, slot: value }))\r
    },\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm v-model="formData" :schema="schema" :columnCount="4" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{r as default};
