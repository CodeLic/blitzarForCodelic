import { Ref } from 'vue';
import type { SearchablePropIds, ParseValueDic, SortState, BlitzTableProps, TableMeta, FiltersState, AnyRef } from '@blitzar/types';
declare type UseTableMetaPayload = {
    /**
     * You can pass an emit function if you want to know of the internal changes in the BlitzTable.
     *
     * This is purely for informative purposes, in case you don't need to know about these events you can pass an empty arrow function.
     */
    emit: {
        (e: 'update:filtersState', payload: FiltersState): void;
        (e: 'update:sortState', payload: SortState): void;
        (e: 'update:rowsPerPage', payload: number): void;
        (e: 'update:pageNr', payload: number): void;
        (e: 'update:searchValue', payload: string): void;
    };
    currentRowIndexes: Ref<number[]>;
    rows: AnyRef<BlitzTableProps['rows']>;
    lang: AnyRef<Record<string, string>>;
    sortState: SortState;
    filtersState: FiltersState;
    rowsPerPage: number;
    pageNr: number;
    searchValue: string;
    searchablePropIds: AnyRef<SearchablePropIds>;
    parseValueDic: AnyRef<ParseValueDic>;
};
/**
 * useTableMeta is the heart of the BlitzTable which takes care of its internal state via refs that represent the data, current page, filtered state, etc.
 * It also exposes a number of computed props with information on the table used throughout the table and default components.
 */
export declare function useTableMeta(payload: UseTableMetaPayload): TableMeta;
export declare function tableMetaExamplePayload(partial: Partial<UseTableMetaPayload>): UseTableMetaPayload;
export {};
