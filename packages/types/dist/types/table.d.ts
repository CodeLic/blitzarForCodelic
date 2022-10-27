import { ComputedRef, WritableComputedRef } from 'vue';
import { FormContext } from './core';
import { AnyRef } from './VueExternalProps';
export declare const ROW_SELECTION_ID: "BLITZ-TABLE-ROW-SELECTION";
/**
 * The compare function to be executed to know wether a row is included or not.
 */
export declare type CompareFn = (userInput: any, cellValue: any, rowData: Record<string, any>) => boolean;
/**
 * The possible values that can be filtered on
 */
export declare type FilterValue = string | number | boolean | null | undefined | Date | typeof Date | typeof Number;
export declare type FilterInfo = {
    in?: Set<FilterValue>;
    'not-in'?: Set<FilterValue>;
    /** @deprecated */
    '>'?: FilterValue;
    /** @deprecated */
    '<'?: FilterValue;
    custom?: Map<CompareFn, any>;
};
export declare function getFilterEntries(info: FilterInfo): (['in', Set<FilterValue> | undefined] | ['not-in', Set<FilterValue> | undefined] | ['>', FilterValue] | ['<', FilterValue] | ['custom', Map<CompareFn, any> | undefined])[];
/**
 * Represents a filter to apply to a table.
 *
 * @example
 * ```js
 * // filter all with gender 'female'
 * {
 *   gender: {
 *     'in': ['female'],
 *     'not-in': ['male', 'other', null],
 *   }
 * }
 * ```
 * @example
 * ```js
 * // filter all rows with a balance between 100 and 200
 * {
 *   balance: {
 *     custom: new Map<[
 *       [(userInput, cellVal) => userInput > cellVal, 100],
 *       [(userInput, cellVal) => userInput < cellVal, 200],
 *     ]>
 *   }
 * }
 * ```
 */
export declare type FiltersState = {
    [fieldId in string]: FilterInfo;
};
export declare type SortState = {
    id: string;
    direction: 'asc' | 'desc';
}[];
export declare type TableMeta = {
    /**
     * The original BlitzTable rows as passed to BlitzTable. Non-sorted/filtered/searched.
     */
    rows: AnyRef<Record<string, unknown>[]>;
    /**
     * The BlitzTable lang object from the props. Defaults to an empty object.
     */
    lang: AnyRef<Record<string, string>>;
    /**
     * The sort state
     */
    sortState: WritableComputedRef<SortState>;
    /**
     * The filters state
     */
    filtersState: WritableComputedRef<FiltersState>;
    /**
     * The user input in the search field
     */
    searchValue: WritableComputedRef<string>;
    /**
     * The amount of rows per page you want to show
     */
    rowsPerPage: WritableComputedRef<number>;
    /**
     * The number of the current page in pagination
     */
    pageNr: WritableComputedRef<number>;
    /**
     * The visible row indexes of the current page
     */
    pageRowIndexes: ComputedRef<number[]>;
    /**
     * The total number of rows, not filtered data
     */
    totalRowCount: ComputedRef<number>;
    /**
     * The number of rows for the current filtered data
     */
    rowCount: ComputedRef<number>;
    /**
     * The number of pagination pages for the current filtered data
     */
    pageCount: ComputedRef<number>;
    /**
     * The item "from" of paginated items for the current filtered/sorted data
     */
    fromIndex: ComputedRef<number>;
    /**
     * The item "to" of paginated items for the current filtered/sorted data
     */
    toIndex: ComputedRef<number>;
};
export declare type SearchablePropIds = string[];
/**
 * `parseValue` dic per column ID. Only used for sorting.
 */
export declare type ParseValueDic = {
    [id in string]: (cellValue: any, context: FormContext) => any;
};
