var r=`<script setup>\r
import { markRaw } from 'vue'\r
import { BlitzGridToggle } from 'blitzar'\r
import 'blitzar/dist/style.css'\r
\r
const blitzGridToggle = markRaw(BlitzGridToggle)\r
\r
const schemaColumns = [\r
  { id: 'firstName', label: 'First Name' },\r
  { id: 'lastName', label: 'Last Name' },\r
  { id: 'company', label: 'Company' },\r
  { id: 'birthdate', label: 'Birthdate' },\r
  { id: 'balance', label: 'Balance', parseValue: (val) => val.toLocaleString() },\r
]\r
\r
const schemaGrid = [\r
  { id: 'company', label: 'Company', span: true },\r
  { id: 'firstName', label: 'First Name', span: 1 },\r
  { id: 'lastName', label: 'Last Name', span: 1 },\r
]\r
\r
const rows = [\r
  {\r
    balance: 93683,\r
    birthdate: '1946-07-22',\r
    firstName: 'Harper',\r
    lastName: 'Nolan',\r
    company: 'Tortor At Risus LLC',\r
  },\r
  { balance: 69632, birthdate: '1945-11-27', firstName: 'Whoopi', lastName: 'David', company: 'Ipsum Institute' }, // prettier-ignore\r
  { balance: 75903, birthdate: '1955-10-01', firstName: 'Peter', lastName: 'Mendez', company: 'Curabitur Dictum LLC' }, // prettier-ignore\r
  { balance: 53509, birthdate: '1977-06-21', firstName: 'Harrison', lastName: 'Miller', company: 'Enim Etiam Imperdiet Industries' }, // prettier-ignore\r
  { balance: 93450, birthdate: '2017-11-27', firstName: 'Wendy', lastName: 'Strong', company: 'Ac PC' }, // prettier-ignore\r
  { balance: 64590, birthdate: '1975-12-10', firstName: 'Kyla', lastName: 'Dalton', company: 'Urna Nec Luctus PC' }, // prettier-ignore\r
  { balance: 72444, birthdate: '2001-07-31', firstName: 'Aimee', lastName: 'Stephens', company: 'Tempus Incorporated' }, // prettier-ignore\r
  { balance: 99856, birthdate: '1972-01-28', firstName: 'Phelan', lastName: 'Jennings', company: 'Consectetuer Adipiscing Elit LLP' }, // prettier-ignore\r
  { balance: 83325, birthdate: '1966-11-17', firstName: 'Xena', lastName: 'Emerson', company: 'Mollis Foundation' }, // prettier-ignore\r
  { balance: 50981, birthdate: '1995-07-26', firstName: 'Althea', lastName: 'Mcdaniel', company: 'Non Foundation' }, // prettier-ignore\r
  { balance: 97869, birthdate: '1945-10-01', firstName: 'Shad', lastName: 'Beard', company: 'Mollis Incorporated' }, // prettier-ignore\r
]\r
<\/script>\r
\r
<template>\r
  <div>\r
    <BlitzTable\r
      :schemaColumns="schemaColumns"\r
      :schemaGrid="schemaGrid"\r
      :rows="rows"\r
      :gridToggleField="{ component: blitzGridToggle }"\r
      :gridBlitzFormOptions="{ columnCount: 2 }"\r
    />\r
  </div>\r
</template>\r
\r
<style scoped>\r
:deep(.blitz-table--grid-card) {\r
  border: thin solid #dfe2e5;\r
}\r
:deep(.blitz-table--grid-card .blitz-field__label) {\r
  font-weight: 200;\r
}\r
</style>\r
`;export{r as default};
