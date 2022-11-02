import { PropType } from 'vue'
import { O } from 'ts-toolbelt'
import { BlitzFieldProps, BlitzFieldPropsEvaluated } from './BlitzFieldProps'
import { Mode } from './core'
import { FiltersState, FilterValue, SortState } from './table'
import { ExternalProps } from './VueExternalProps'

export type BlitzColumnProps = {
  /**
   * @default true
   */
  sortable?: boolean
}

export type BlitzColumn = BlitzFieldProps & BlitzColumnProps

export type FilterOption = {
  /**
   * Defaults to the value stringified
   */
  label?: string
  /**
   * The value representing the what needs to be filtered for
   */
  value: FilterValue
  /**
   * - `'===' | '!=='`
   *   - This will show the filter as checkboxes
   *   - Checking or unchecking filters in/out the value provided
   *
   * DO NOT USE '<' or '>', these are deprecated!!
   *
   * @default '==='
   */
  op?: '===' | '!==' | '<' | '>'
}

export type FilterOptionAdvanced = {
  /**
   * The compare function to be executed to know wether a row is included or not.
   */
  compareFn: (userInput: any, cellValue: any, rowData: Record<string, any>) => boolean
} & O.Compulsory<BlitzFieldPropsEvaluated, 'component'>

export type FilterOptionAuto = {
  detectValues: true
}

export type BlitzFilterOptions = {
  [fieldId in string]: (FilterOption | FilterOptionAuto | FilterOptionAdvanced)[]
}

export type Checkbox = O.Assign<FilterOption, [{ op: '===' | '!==' }]>
/** @deprecated */
export type Range = O.Assign<FilterOption, [{ op: '>' | '<'; type: 'number' | 'date' | 'text' }]>

export function isAuto(
  o: FilterOption | FilterOptionAuto | FilterOptionAdvanced
): o is FilterOptionAuto {
  return 'detectValues' in o && o.detectValues === true
}
export function isAdvanced(
  o: FilterOption | FilterOptionAuto | FilterOptionAdvanced
): o is FilterOptionAdvanced {
  return 'component' in o
}
export function isCheckbox(
  o: FilterOption | FilterOptionAuto | FilterOptionAdvanced
): o is Checkbox {
  return !isAuto(o) && !isAdvanced(o) && (!o.op || o.op === '===' || o.op === '!==')
}
export function isRange(o: FilterOption | FilterOptionAuto | FilterOptionAdvanced): o is Range {
  return !isAuto(o) && !isAdvanced(o) && (o.op === '>' || o.op === '<')
}

export const blitzTableProps = {
  /**
   * The schema for the columns you want to generate. (BlitzForm schema format)
   * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
   * @category column
   */
  schemaColumns: { type: Array as PropType<BlitzColumn[]>, default: undefined },
  /**
   * The schema for the grid cards you want to generate. (BlitzForm schema format)
   * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
   * @category column
   */
  schemaGrid: { type: Array as PropType<BlitzColumn[]>, default: undefined },
  /**
   * Rows of data to display. Use `rows` instead of the QTables `data`. Renamed for clarity.
   * @example [{ nameFirst: 'Eleanor', nameLast: 'Shellstrop' }, { nameFirst: 'Chidi', nameLast: 'Anagonye' }]
   * @category model
   */
  rows: { type: Array as PropType<Record<string, any>[]>, required: true },
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
    type: Object as PropType<Record<string, any>>,
    default: (): Record<string, any> => ({}),
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
    type: Array as PropType<Record<string, any>[]>,
    default: (): Record<string, any>[] => [],
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
  mode: { type: String as PropType<Mode>, default: 'raw' },
  /**
   * Can be used with v-model:filtersState
   * @example
   * ```html
   * <BlitzTable v-model:filtersState="filtersState" />
   * ```
   */
  filtersState: { type: Object as PropType<FiltersState>, default: (): FiltersState => ({}) },
  /**
   * Can be used with v-model:sortState
   * @example
   * ```html
   * <BlitzTable v-model:sortState="sortState" />
   * ```
   */
  sortState: { type: Array as PropType<SortState>, default: (): SortState => [] },
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
  titleField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  /**
   * An input field as per BlitzField syntax.
   *
   * - It must be compatible with `v-model` and accept a `string` as `modelValue`
   * - Will receive `.blitz-table--search` as class
   *
   * TODO: add @example
   */
  searchField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  /**
   * A special field that shows checkboxes as per BlitzField syntax.
   *
   * - It must be compatible with `v-model` and accept a `FiltersState` as `modelValue`
   * - Will receive `.blitz-table--filters` as class
   *
   * TODO: add @example
   */
  filtersField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
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
  gridToggleField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
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
  rowsPerPageField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  shownRowsInfoField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  paginationField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  thField: { type: Object as PropType<BlitzFieldProps>, default: undefined },
  lang: {
    type: Object as PropType<Record<string, string>>,
    default: (): Record<string, string> => ({}),
  },
  isEnableHighlight: { type: Boolean, default: undefined },
} as const

export type BlitzTableProps = ExternalProps<typeof blitzTableProps>
