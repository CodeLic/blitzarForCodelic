import { SearchablePropIds, ParseValueDic, SortState, FiltersState } from '@blitzar/types';
export declare function shouldFilterRows(filtersState: FiltersState): boolean;
/**
 * @returns a function that can be plugged into `.sort()`
 */
export declare function sortFactory(sortStateArr: SortState, parseValueDic?: ParseValueDic): (a: any, b: any) => number;
export declare function isRowFilterHit(payload: {
    filtersState: FiltersState;
    row: {
        rowIndex: number;
        rowData: Record<string, any>;
        rowDataFlat: Record<string, any>;
    };
    parseValueDic: ParseValueDic;
}): boolean;
/**
 * Search method that also takes into account transformations needed
 */
export declare function isRowSearchHit(payload: {
    searchStr: string;
    row: {
        rowIndex: number;
        rowData: Record<string, any>;
        rowDataFlat: Record<string, any>;
    };
    searchablePropIds: SearchablePropIds;
    parseValueDic: ParseValueDic;
}): boolean;
