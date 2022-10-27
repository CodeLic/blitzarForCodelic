import { PropType } from 'vue';
import { O } from 'ts-toolbelt';
import { BlitzFieldProps, BlitzFieldPropsEvaluated } from './BlitzFieldProps';
import { Mode } from './core';
import { FiltersState, FilterValue, SortState } from './table';
import { ExternalProps } from './VueExternalProps';
export declare type BlitzColumnProps = {
    /**
     * @default true
     */
    sortable?: boolean;
};
export declare type BlitzColumn = BlitzFieldProps & BlitzColumnProps;
export declare type FilterOption = {
    /**
     * Defaults to the value stringified
     */
    label?: string;
    /**
     * The value representing the what needs to be filtered for
     */
    value: FilterValue;
    /**
     * - `'===' | '!=='`
     *   - This will show the filter as checkboxes
     *   - Checking or unchecking filters in/out the value provided
     *
     * DO NOT USE '<' or '>', these are deprecated!!
     *
     * @default '==='
     */
    op?: '===' | '!==' | '<' | '>';
};
export declare type FilterOptionAdvanced = {
    /**
     * The compare function to be executed to know wether a row is included or not.
     */
    compareFn: (userInput: any, cellValue: any, rowData: Record<string, any>) => boolean;
} & O.Compulsory<BlitzFieldPropsEvaluated, 'component'>;
export declare type FilterOptionAuto = {
    detectValues: true;
};
export declare type BlitzFilterOptions = {
    [fieldId in string]: (FilterOption | FilterOptionAuto | FilterOptionAdvanced)[];
};
export declare type Checkbox = O.Assign<FilterOption, [{
    op: '===' | '!==';
}]>;
/** @deprecated */
export declare type Range = O.Assign<FilterOption, [{
    op: '>' | '<';
    type: 'number' | 'date' | 'text';
}]>;
export declare function isAuto(o: FilterOption | FilterOptionAuto | FilterOptionAdvanced): o is FilterOptionAuto;
export declare function isAdvanced(o: FilterOption | FilterOptionAuto | FilterOptionAdvanced): o is FilterOptionAdvanced;
export declare function isCheckbox(o: FilterOption | FilterOptionAuto | FilterOptionAdvanced): o is Checkbox;
export declare function isRange(o: FilterOption | FilterOptionAuto | FilterOptionAdvanced): o is Range;
export declare const blitzTableProps: {
    /**
     * The schema for the columns you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    readonly schemaColumns: {
        readonly type: PropType<BlitzColumn[]>;
        readonly default: undefined;
    };
    /**
     * The schema for the grid cards you want to generate. (BlitzForm schema format)
     * @example [{ id: 'nameFirst', label: 'First Name', component: 'input' }, { id: 'nameLast', label: 'Last Name', component: 'input' }]
     * @category column
     */
    readonly schemaGrid: {
        readonly type: PropType<BlitzColumn[]>;
        readonly default: undefined;
    };
    /**
     * Rows of data to display. Use `rows` instead of the QTables `data`. Renamed for clarity.
     * @example [{ nameFirst: 'Eleanor', nameLast: 'Shellstrop' }, { nameFirst: 'Chidi', nameLast: 'Anagonye' }]
     * @category model
     */
    readonly rows: {
        readonly type: PropType<Record<string, any>[]>;
        readonly required: true;
    };
    /**
     * Defaults to `false` (table-view) if `schemaColumns` is provided
     * Defaults to `true` (grid-view) if `schemaGrid` is provided (and no `schemaColumns`)
     */
    readonly isGrid: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    /**
     * The BlitzForm options you want to use for the grid cards. Eg. You can pass `{ actionButtons: [] }` here to include some action buttons on each grid card.
     *
     * Please note:
     * - The `schema` for the grid cards should be set via the `schemaGrid` prop instead of passing it here as `schema`.
     * - The BlitzForm used for each grid card will automatically get the row data.
     * - See the documentation of BlitzForm for more information on the props you can set.
     * @category column
     */
    readonly gridBlitzFormOptions: {
        readonly type: PropType<Record<string, any>>;
        readonly default: () => Record<string, any>;
    };
    /**
     * MUST be used with `v-model:selectedRows="mySelection"`
     */
    readonly selectedRows: {
        readonly type: PropType<Record<string, any>[]>;
        readonly default: () => Record<string, any>[];
    };
    /**
     * By default the rows show just the raw data without showing field components. If you set `mode: 'edit'` your entire table will show the actual (editable) component as per your schema.
     */
    readonly mode: {
        readonly type: PropType<Mode>;
        readonly default: "raw";
    };
    /**
     * Can be used with v-model:filtersState
     * @example
     * ```html
     * <BlitzTable v-model:filtersState="filtersState" />
     * ```
     */
    readonly filtersState: {
        readonly type: PropType<FiltersState>;
        readonly default: () => FiltersState;
    };
    /**
     * Can be used with v-model:sortState
     * @example
     * ```html
     * <BlitzTable v-model:sortState="sortState" />
     * ```
     */
    readonly sortState: {
        readonly type: PropType<SortState>;
        readonly default: () => SortState;
    };
    /**
     * Can be used with v-model:rowsPerPage
     * @example
     * ```html
     * <BlitzTable v-model:rowsPerPage="rowsPerPage" />
     * ```
     */
    readonly rowsPerPage: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    /**
     * Can be used with v-model:pageNr
     * @example
     * ```html
     * <BlitzTable v-model:pageNr="pageNr" />
     * ```
     */
    readonly pageNr: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    /**
     * Can be used with v-model:searchValue
     * @example
     * ```html
     * <BlitzTable v-model:searchValue="searchValue" />
     * ```
     */
    readonly searchValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    /**
     * A field as per BlitzField syntax.
     *
     * - It must have a default slot, in which the table title will be passed
     * - Will receive `.blitz-table--title` as class
     *
     * TODO: add @example
     */
    readonly titleField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    /**
     * An input field as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a `string` as `modelValue`
     * - Will receive `.blitz-table--search` as class
     *
     * TODO: add @example
     */
    readonly searchField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    /**
     * A special field that shows checkboxes as per BlitzField syntax.
     *
     * - It must be compatible with `v-model` and accept a `FiltersState` as `modelValue`
     * - Will receive `.blitz-table--filters` as class
     *
     * TODO: add @example
     */
    readonly filtersField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
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
    readonly gridToggleField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
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
    readonly rowsPerPageField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly shownRowsInfoField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly paginationField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly thField: {
        readonly type: PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly lang: {
        readonly type: PropType<Record<string, string>>;
        readonly default: () => Record<string, string>;
    };
};
export declare type BlitzTableProps = ExternalProps<typeof blitzTableProps>;
