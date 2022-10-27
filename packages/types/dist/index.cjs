'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const blitzFieldProps = {
    /**
     * The value of the field. The BlitzForm `formData` is an object with the value of each field and the id for key.
     * @category model
     */
    modelValue: { type: null, default: undefined },
    /**
     * An `id` is required for the BlitzForm to be able to know which fields have which value.
     *
     * A string with dot notation will become a nested field in the `formData`.
     * @category model
     */
    id: { type: String, default: undefined },
    /**
     * A default value to be used when the `modelValue` is `undefined`.
     *
     * You can also pass a function that will receive two params you can work with: `(formData, context)`
     * - `formData` is the `modelValue` object of your BlitzForm. This will be undefined when BlitzField is used as stand-alone (without BlitzForm) unless you manually pass it.
     * - `context` is either your BlitzForm or BlitzField context with many usefull props. See the documentation on Dynamic Props for more info.
     * @example
     * ```js
     * // default to an string (just pass it directly)
     * defaultValue: 'Hello'
     * ```
     * @example
     * ```js
     * // default to an array (just like Vue props)
     * defaultValue: () => []
     * ```
     * @example
     * ```js
     * // default to an object (just like Vue props)
     * defaultValue: () => ({})
     * ```
     * @example
     * ```js
     * // default to a Function (you must pass a function that returns your function)
     * defaultValue: () => () => {}
     * ```
     * @category model
     */
    defaultValue: {
        type: undefined,
        default: undefined,
    },
    /**
     * A function that modifies a value before it is used in the actual component. (see `parseInput` for the reverse)
     * @example
     * ```js
     * val => val && val.split(' ').map(str => !str ? '' : `${str[0].toUpperCase()}${str.slice(1)}`).join(' ')
     * ```
     * @example
     * ```js
     * val => Number(val)
     * ```
     * @example
     * ```js
     * val => Date(val)
     * ```
     * @category model
     */
    parseValue: {
        type: Function,
        default: undefined,
    },
    /**
     * A function that modifies a value after user input but before the value is emitted. (see `parseValue` for the reverse)
     * @example
     * ```js
     * val => (val || '').toLowerCase()
     * ```
     * @example
     * ```js
     * val => val.toISOString()
     * ```
     * @category model
     */
    parseInput: {
        type: Function,
        default: undefined,
    },
    /**
     * The component to be used for the field. Is mounted via `<component :is="component" />`. You can pass the name of a native HTML5 element or Vue component that is globally registered. You can also import the Vue file and directly pass the imported object, just like you would when you add it to a Vue file's components prop.
     * @example 'input'
     * @example 'MyCustomField'
     * @category content
     */
    component: {
        type: [String, Function, Object],
        default: undefined,
    },
    /**
     * An Object with keys for the slot names and an object for values. The object you pass to a slot is itself applied as a `<component is="" />`.
     *
     * The last example below shows how this is actually used under the hood.
     * @example
     * ```js
     * { label: { component: 'MyTooltip', tip: 'hi' } } }
     * ```
     * @example
     * ```js
     * <slot name="label"><component :is="slots.label.component" v-bind="slots.label" /></slot>
     * ```
     * @category content
     */
    slots: {
        type: [Object, Function],
        default: undefined,
    },
    /**
     * The text used in the UI for the action buttons and some error messages.
     *
     * The example shows how the error message for required fields is overwritten.
     * @example
     * ```js
     * { requiredField: `Don't forget this field!` }
     * ```
     * @category content
     */
    lang: {
        type: [Object, Function],
        // when changing the default, do it for both BlitzForm; BlitzField and lang.js
        /** @type () => Lang */
        default: () => ({
            archive: 'Archive',
            delete: 'Delete',
            cancel: 'Cancel',
            edit: 'Edit',
            save: 'Save',
            requiredField: 'Field is required',
            formValidationError: 'There are remaining errors.',
        }),
    },
    /**
     * The field label.
     * @example 'Your Name'
     * @category content
     */
    label: { type: [String, Function], default: undefined },
    /**
     * A smaller label for extra info.
     * @example 'first and last'
     * @category content
     */
    subLabel: {
        type: [String, Function],
        default: undefined,
    },
    /**
     * The mode represents how fields are rendered
     * - `'edit'` — (default) show editable fields based on the schema
     * - `'readonly'` — show each field with `readonly: true`
     * - `'disabled'` — show each field with `disabled: true`
     * - `'raw'` — used to show raw data of your form (for select components, it will show the data label instead of its value)
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category state
     */
    mode: {
        type: [String, Function],
        default: 'edit',
        validator: (prop) => typeof prop === 'function' ||
            ['edit', 'readonly', 'disabled', 'raw'].includes(prop),
    },
    /**
     * An Object with an event name as key and the handler function as value. The function you pass will receive the native event payload as first parameter and the BlitzField context (the component instance) as second: `($event, context) => {}`
     * @example
     * ```js
     * { click: (val, { formData }) => console.log(formData) }
     * ```
     * @category behavior
     */
    events: {
        type: [Object, Function],
        default: () => ({}),
    },
    /**
     * Whether or not the field is required or not. If a field is marked 'required' it will add a default rule like so: `[val => (val !== null && val !== undefined) || 'Field is required']`. The default message can be set in the `lang` prop as `requiredField`.
     * @category behavior
     */
    required: {
        type: [Boolean, Function],
        default: undefined,
    },
    /**
     * An array with prop names that should be treated as Dynamic Props when passed a function.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    dynamicProps: {
        type: Array,
        default: () => [
            'component',
            'showCondition',
            'error',
            'required',
            'label',
            'subLabel',
            'fieldStyle',
            'fieldClasses',
            'componentStyle',
            'componentClasses',
            'events',
            'lang',
        ],
    },
    /**
     * Set to `true` if the component will take care of showing the `label` and `subLabel`. Both of these props will be passed to the component and not shown in BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    internalLabels: {
        type: [Boolean, undefined],
        default: undefined,
    },
    /**
     * Set to true if the component has its own error handling. This makes sure it passes on props like `error` and does nothing with them in the BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalErrors: {
        type: [Boolean, undefined],
        default: undefined,
    },
    /**
     * - 'interaction' — evaluates & shows errors on every interaction or keystroke
     * - 'save' — only evaluates & shows errors when clicking 'save'
     * - 'save-focus' — only evaluates & shows errors when clicking 'save', then focuses the first field with an error
     * - 'never' — never evaluate or show errors
     * - 'always' — always evaluate and show errors, even without user interaction
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    showErrorsOn: {
        type: String,
        default: 'interaction',
    },
    /**
     * Setting to `false` will hide the field. When using as an Dynamic Prop it can used to conditionally hide fields based on the other `formData`.
     * @example
     * ```js
     * (val, { mode }) => (mode === 'edit')
     * ```
     * @example false
     * @category state
     */
    showCondition: {
        type: [Boolean, Function],
        default: true,
    },
    /**
     * `readonly` defaults to `true` on `mode: 'readonly'`
     * @category state
     */
    readonly: {
        type: [Boolean, Function, String, undefined],
        default: undefined,
    },
    /**
     * `disabled` defaults to `true` on `mode: 'disabled'`
     * @category state
     */
    disabled: {
        type: [Boolean, Function, String, undefined],
        default: undefined,
    },
    /**
     * Error can be passed a `string` which will be displayed below the field as an error message.
     *
     * Usually it's more useful to use as DynamicProp:
     * - pass a function that receives the value of the field as payload
     * - return `null` if there should be no error shown
     * - return a `string` with your error message if there should be an error
     *
     * @example
     * ```js
     * {
     *   dynamicProps: ['error'],
     *   error: (val) => Number(val) >= 18 ? null : 'You have to be over 18!'
     * }
     * ```
     */
    error: {
        type: [String, Function],
        default: undefined,
    },
    /**
     * The position of the label in comparison to the field.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    labelPosition: {
        type: [String, Function],
        default: 'top',
        validator: (prop) => typeof prop === 'function' || ['top', 'left'].includes(prop),
    },
    /**
     * Custom styling to be applied to the BlitzField. Applied like so `:style="fieldStyle"`. Can be an Dynamic Prop (this is why I opted to have a different name from `style`).
     *
     * In a BlitzForm schema you can also just write `style: '...'` and BlitzForm will pass that as fieldStyle for you, because "style" is not a valid prop name.
     * @example 'padding: 0.5em; color: white'
     * @category style
     */
    fieldStyle: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * Custom classes to be applied to the BlitzField. Applied like so `:class="fieldClasses"`. Can be an Dynamic Prop (this is why I opted to have a different name from `class`).
     *
     * In a BlitzForm schema you can also just write `class: '...'` and BlitzForm will pass that as `fieldClasses` for you, because "class" is not a valid prop name.
     * @example ['dark-theme']
     * @category style
     */
    fieldClasses: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * Custom styling to be applied to the inner component of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     * @example 'padding: 1em;'
     * @category style
     */
    componentStyle: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * Custom classes to be applied to the inner component of BlitzField. Applied like so `:class="componentClasses"`. Can be an Dynamic Prop.
     * @example ['dark-theme']
     * @category style
     */
    componentClasses: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * Custom styling to be applied to the label of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example 'font-weight: 200;'
     * @category style
     */
    labelStyle: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * Custom classes to be applied to the label of BlitzField. Applied like so `:class="labelClasses"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example ['text-h6']
     * @category style
     */
    labelClasses: {
        type: [Object, Array, String, Function],
        default: undefined,
    },
    /**
     * This is the *nested* data of all the fields inside a BlitzForm. (When using BlitzListForm as standalone, this is an array.)
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formData: {
        type: [Object, Array],
        default: undefined,
    },
    /**
     * This is the *flattened* data of all the fields inside a BlitzForm.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formDataFlat: { type: Object, default: undefined },
    /**
     * A manually set 'id' of the BlitzForm. This only exists if you passed an id directly to the BlitzForm.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formId: { type: String, default: undefined },
    /**
     * The `mode` of the BlitzForm. A BlitzField inherits the `mode` from the `BlitzForm` via its `mode` prop; however, if you had manually overwritten the mode to be something else, `formMode` can be used to check the current mode of the form. This can be useful inside an Dynamic Prop.
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    formMode: {
        type: String,
        default: undefined,
        validator: (prop) => ['edit', 'readonly', 'disabled', 'raw'].includes(prop),
    },
    /**
     * The `updateField` function of BlitzForm. Is passed so it can be used in events. Eg.: `events: { '@update:modelValue': (value, { updateField } => updateField({ id: 'otherField', value }))}`
     *
     * It's not something you can pass via the schema, but something that BlitzForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    updateField: {
        type: Function,
        default: undefined,
    },
    /**
     * (only present in BlitzTable & BlitzListForm!)
     * The current row index of this field.
     *
     * It's not something you can pass via the schema, but something that BlitzTable/BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    rowIndex: { type: Number, default: undefined },
    /**
     * (only present in BlitzTable & BlitzListForm!)
     * This is the *nested* data of all the fields of the row.
     *
     * It's not something you can pass via the schema, but something that BlitzTable/BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    rowData: { type: Object, default: undefined },
    /**
     * (only present in BlitzTable & BlitzListForm!)
     * This is a function that you can call to delete the row.
     *
     * It's not something you can pass via the schema, but something that BlitzTable/BlitzListForm will automatically pass to each of its fields so you can use it in Dynamic Props.
     * @category readonly
     */
    deleteRow: { type: Function, default: undefined },
};

const blitzPaginationProps = {
    /**
     * Represents the current open page
     */
    modelValue: { type: Number, required: true },
    /**
     * The total page count for the currently filtered pages based on the `rowsPerPage`
     */
    pageCount: { type: Number, required: true },
    /**
     * BlitzTable will pass the TableMeta which represents the heart of the table state. You can use this freely in your component.
     *
     * TODO: Add information on how to mock the TableMeta prop for development.
     */
    tableMeta: { type: Object, default: undefined },
};

function isAuto(o) {
    return 'detectValues' in o && o.detectValues === true;
}
function isAdvanced(o) {
    return 'component' in o;
}
function isCheckbox(o) {
    return !isAuto(o) && !isAdvanced(o) && (!o.op || o.op === '===' || o.op === '!==');
}
function isRange(o) {
    return !isAuto(o) && !isAdvanced(o) && (o.op === '>' || o.op === '<');
}
const blitzTableProps = {
    /**
     * The schema for the columns you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    schemaColumns: { type: Array, default: undefined },
    /**
     * The schema for the grid cards you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    schemaGrid: { type: Array, default: undefined },
    /**
     * Rows of data to display. Use `rows` instead of the QTables `data`. Renamed for clarity.
     * @example [{ nameFirst: 'Eleanor', nameLast: 'Shellstrop' }, { nameFirst: 'Chidi', nameLast: 'Anagonye' }]
     * @category model
     */
    rows: { type: Array, required: true },
    /**
     * Defaults to `false` (table-view) if `schemaColumns` is provided
     * Defaults to `true` (grid-view) if `schemaGrid` is provided (and no `schemaColumns`)
     */
    isGrid: { type: Boolean, default: undefined },
    /**
     * The BlitzForm options you want to use for the grid cards. Eg. You can pass `{ actionButtons: [] }` here to include some action buttons on each grid card.
     *
     * Please note:
     * - The `schema` for the grid cards should be set via the `schemaGrid` prop instead of passing it here as `schema`.
     * - The BlitzForm used for each grid card will automatically get the row data.
     * - See the documentation of BlitzForm for more information on the props you can set.
     * @category column
     */
    gridBlitzFormOptions: {
        type: Object,
        default: () => ({}),
    },
    // /**
    //  * Custom styling to be applied to each row. Applied like so `:style="rowStyle"`
    //  * @example 'padding: 1em;'
    //  * @category style
    //  */
    // rowStyle: { type: [Object, Array, String, Function] },
    // /**
    //  * Custom classes to be applied to each row. Applied like so `:class="rowClasses"`
    //  * @example ['dark-theme']
    //  * @category style
    //  */
    // rowClasses: { type: [Object, Array, String, Function] },
    // /**
    //  * An object that represents the checkbox when the table is in "selection" mode. You can tell BlitzTable to use a custom checkbox component instead of the default.
    //  * Defaults to a regular HTML5 checkbox.
    //  * @example { component: 'MyCheckbox', class: 'table-checkbox' }
    //  */
    // selectionComponentProps: {
    //   type: Object,
    //   default: () => ({
    //     component: 'input',
    //     type: 'checkbox',
    //   }),
    // },
    /**
     * MUST be used with `v-model:selectedRows="mySelection"`
     */
    selectedRows: {
        type: Array,
        default: () => [],
    },
    // /**
    //  * CSS classes to apply to the card (when in grid mode).
    //  * You can pass a function which will be evaluated just like an Dynamic Prop. The first param passed will be the entire row data. The second is `item` scoped slot object from a QTable.
    //  * @type {(rowData: Record<string, any>, gridCardProps: GridCardProps, BlitzTableContext: any) => string | Record<string, any> | (string | Record<string, any>)[]}
    //  * @example 'special-class'
    //  * @example :card-class="{ 'my-special-class': [Boolean condition] }"
    //  * @category inherited prop
    //  */
    // cardClass: { type: [Function, String, Array, Object] },
    // /**
    //  * CSS style to apply to the card (when in grid mode).
    //  * You can pass a function which will be evaluated just like an Dynamic Prop. The first param passed will be the entire row data. The second is `item` scoped slot object from a QTable.
    //  * @type {(rowData: Record<string, any>, gridCardProps: GridCardProps, BlitzTableContext: any) => string | Record<string, any> | (string | Record<string, any>)[]}
    //  * @example 'background-color: #fff'
    //  * @example :card-style="{ backgroundColor: '#fff' }"
    //  * @category inherited prop
    //  */
    // cardStyle: { type: [Function, String, Array, Object] },
    /**
     * By default the rows show just the raw data without showing field components. If you set `mode: 'edit'` your entire table will show the actual (editable) component as per your schema.
     */
    mode: { type: String, default: 'raw' },
    /**
     * Can be used with v-model:filtersState
     * @example
     * ```html
     * <BlitzTable v-model:filtersState="filtersState" />
     * ```
     */
    filtersState: { type: Object, default: () => ({}) },
    /**
     * Can be used with v-model:sortState
     * @example
     * ```html
     * <BlitzTable v-model:sortState="sortState" />
     * ```
     */
    sortState: { type: Array, default: () => [] },
    /**
     * Can be used with v-model:rowsPerPage
     * @example
     * ```html
     * <BlitzTable v-model:rowsPerPage="rowsPerPage" />
     * ```
     */
    rowsPerPage: { type: Number, default: 10 },
    /**
     * Can be used with v-model:pageNr
     * @example
     * ```html
     * <BlitzTable v-model:pageNr="pageNr" />
     * ```
     */
    pageNr: { type: Number, default: 1 },
    /**
     * Can be used with v-model:searchValue
     * @example
     * ```html
     * <BlitzTable v-model:searchValue="searchValue" />
     * ```
     */
    searchValue: { type: String, default: '' },
    /**
     * A field as per BlitzField syntax.
     *
     * - It must have a default slot, in which the table title will be passed
     * - Will receive `.blitz-table--title` as class
     *
     * TODO: add @example
     */
    titleField: { type: Object, default: undefined },
    /**
     * An input field as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a `string` as `modelValue`
     * - Will receive `.blitz-table--search` as class
     *
     * TODO: add @example
     */
    searchField: { type: Object, default: undefined },
    /**
     * A special field that shows checkboxes as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a `FiltersState` as `modelValue`
     * - Will receive `.blitz-table--filters` as class
     *
     * TODO: add @example
     */
    filtersField: { type: Object, default: undefined },
    /**
     * A toggle field as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a Boolean as `modelValue`:
     *   - `false` will be interpreted as the table view `isGrid: false` (the default)
     *   - `true` will be interpreted as the grid view `isGrid: true`
     * - Will receive `.blitz-table--grid-toggle` as class
     *
     * TODO: add @example
     */
    gridToggleField: { type: Object, default: undefined },
    /**
     * A select or input field as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a `number` as `modelValue`
     * - Will receive `.blitz-table--rows-per-page` as class
     *
     * The component you pass will also receive `tableMeta` as a prop (as with all BlitzTable fields).
     * You can import `TableMeta` type to work with it more easily in your component:
     *
     * @example
     * ```html
     * // Usage example
     * <script setup>
     * import { markRaw } from 'vue'
     * import { MyComponent } from '...'
     * </script>
     *
     * <template>
     *   <BlitzTable :rowsPerPageField="{ component: markRaw(MyComponent) }"
     * </template>
     * ```
     * @example
     * ```js
     * // When passing your own made component, you can use these props for the component:
     * import { PropType } from 'vue'
     * import { TableMeta } from 'blitzar'
     *
     * defineProps({
     *   modelValue: Number,
     *   tableMeta: Object as PropType<TableMeta>
     * })
     * // ...
     * ```
     */
    rowsPerPageField: { type: Object, default: undefined },
    shownRowsInfoField: { type: Object, default: undefined },
    paginationField: { type: Object, default: undefined },
    thField: { type: Object, default: undefined },
    lang: {
        type: Object,
        default: () => ({}),
    },
};

const ROW_SELECTION_ID = 'BLITZ-TABLE-ROW-SELECTION';
function getFilterEntries(info) {
    return Object.entries(info);
}

exports.ROW_SELECTION_ID = ROW_SELECTION_ID;
exports.blitzFieldProps = blitzFieldProps;
exports.blitzPaginationProps = blitzPaginationProps;
exports.blitzTableProps = blitzTableProps;
exports.getFilterEntries = getFilterEntries;
exports.isAdvanced = isAdvanced;
exports.isAuto = isAuto;
exports.isCheckbox = isCheckbox;
exports.isRange = isRange;
