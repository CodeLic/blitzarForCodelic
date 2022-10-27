var n=`<script setup>\r
import { ref } from 'vue'\r
\r
const schema = [\r
  {\r
    id: 'name',\r
    span: 1,\r
    component: 'input',\r
    label: 'Superhero name',\r
    subLabel: 'Think of something cool.',\r
    required: true,\r
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
  {\r
    id: 'stamina',\r
    span: 2,\r
    component: 'input',\r
    type: 'range',\r
    label: 'Stamina',\r
    subLabel: (value) => \`value: \${value}\`,\r
    dynamicProps: ['subLabel'],\r
    parseInput: (val) => Number(val),\r
    defaultValue: 50,\r
    min: 0,\r
    max: 100,\r
  },\r
  {\r
    id: 'power',\r
    span: 1,\r
    component: 'input',\r
    label: 'Power',\r
    subLabel: 'Fill in a number. (this will get formatted as a number in the formData)',\r
    parseInput: (val) => Number(val),\r
    type: 'number',\r
  },\r
  {\r
    id: 'roleModel',\r
    span: 1,\r
    component: 'select',\r
    label: 'Role model',\r
    subLabel: 'Who do you look up to?',\r
    slot: [\r
      { component: 'option', value: '', slot: 'Select one', disabled: true },\r
      { component: 'option', value: 'captain-america', slot: 'Steve Rogers/Captain America' },\r
      { component: 'option', value: 'iron-man', slot: 'Tony Stark/Iron Man' },\r
      { component: 'option', value: 'thor-odinson', slot: 'Thor Odinson' },\r
      { component: 'option', value: 'the-hulk', slot: 'Bruce Banner/The Hulk' },\r
      { component: 'option', value: 'black-widow', slot: 'Natasha Romanoff/Black Widow' },\r
      { component: 'option', value: 'hawkeye', slot: 'Clint Barton/Hawkeye' },\r
      { component: 'option', value: 'quicksilver', slot: 'Pietro Maximoff/Quicksilver' },\r
      { component: 'option', value: 'scarlet-witch', slot: 'Wanda Maximoff/Scarlet Witch' },\r
      { component: 'option', value: 'the-vision', slot: 'The Vision' },\r
      { component: 'option', value: 'war-machine', slot: 'James Rhodes/War Machine' },\r
      { component: 'option', value: 'falcon', slot: 'Sam Wilson/Falcon' },\r
      { component: 'option', value: 'the-winter-soldier', slot: 'Bucky Barnes/The Winter Soldier' },\r
      { component: 'option', value: 'black-panther', slot: "T'Challa/Black Panther" },\r
      { component: 'option', value: 'doctor-strange', slot: 'Stephen Strange/Doctor Strange' },\r
      { component: 'option', value: 'spider-man', slot: 'Peter Parker/Spider-Man' },\r
      { component: 'option', value: 'ant-man', slot: 'Scott Lang/Ant-Man (Giant-Man)' },\r
      { component: 'option', value: 'wasp', slot: 'Hope van Dyne/Wasp' },\r
      { component: 'option', value: 'captain-marvel', slot: 'Carol Danvers/Captain Marvel' },\r
      { component: 'option', value: 'star-lord', slot: 'Peter Quill/Star-Lord' },\r
      { component: 'option', value: 'gamora', slot: 'Gamora' },\r
      { component: 'option', value: 'drax-the-destroyer', slot: 'Drax the Destroyer' },\r
      { component: 'option', value: 'rocket-raccoon', slot: 'Rocket (Raccoon)' },\r
      { component: 'option', value: 'groot', slot: '(Baby, Teenage) Groot' },\r
      { component: 'option', value: 'mantis', slot: 'Mantis' },\r
      { component: 'option', value: 'daredevil', slot: 'Matthew Murdock/Daredevil' },\r
      { component: 'option', value: 'jessica-jones', slot: 'Jessica Jones (Jewel)' },\r
      { component: 'option', value: 'luke-cage', slot: 'Carl Lucas/Luke Cage (Power Man)' },\r
      { component: 'option', value: 'iron-fist', slot: 'Danny Rand/Iron Fist' },\r
      { component: 'option', value: 'the-punisher', slot: 'Frank Castle/The Punisher' },\r
    ],\r
  },\r
  {\r
    id: 'powerUps',\r
    span: 1,\r
    // See more info in the Use Custom Components chapter\r
    component: 'BlitzForm',\r
    label: 'Choose some power-ups',\r
    columnCount: 3,\r
    schema: [\r
      {\r
        id: 'iso-8',\r
        component: 'input',\r
        type: 'checkbox',\r
        label: 'Magic crystal',\r
        labelStyle: 'font-size: 0.8em',\r
      },\r
      {\r
        id: 'hp-potion',\r
        component: 'input',\r
        type: 'checkbox',\r
        label: 'Health potion',\r
        labelStyle: 'font-size: 0.8em',\r
      },\r
      {\r
        id: 'energy-potion',\r
        component: 'input',\r
        type: 'checkbox',\r
        label: 'Energy drink',\r
        labelStyle: 'font-size: 0.8em',\r
      },\r
    ],\r
  },\r
  { span: 1 },\r
  {\r
    id: 'consent',\r
    component: 'input',\r
    type: 'checkbox',\r
    span: 1,\r
    label: 'Do you agree with our terms?',\r
    rules: [(val) => val || 'You must accept our terms'],\r
    defaultValue: false,\r
  },\r
  {\r
    id: 'submissionDate',\r
    span: 1,\r
    component: 'input',\r
    type: 'date',\r
    label: 'Date of submission',\r
  },\r
]\r
\r
const formData = ref({})\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzForm v-model="formData" :schema="schema" :columnCount="2" />\r
\r
    <CodeBlock :content="\`// formData\\n\${JSON.stringify(formData, undefined, 2)}\`" />\r
  </div>\r
</template>\r
`;export{n as default};
