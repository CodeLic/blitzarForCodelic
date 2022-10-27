import type { BlitzFieldProps, UpdateModelValueOrigin, BlitzColumn, FiltersState, SortState } from '@blitzar/types';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            readonly lang: Record<string, string>;
            readonly mode: import("@blitzar/types").Mode;
            readonly filtersState: FiltersState;
            readonly schemaColumns: BlitzColumn[];
            readonly schemaGrid: BlitzColumn[];
            readonly isGrid: boolean;
            readonly gridBlitzFormOptions: Record<string, any>;
            readonly selectedRows: Record<string, any>[];
            readonly sortState: SortState;
            readonly rowsPerPage: number;
            readonly pageNr: number;
            readonly searchValue: string;
            readonly titleField: BlitzFieldProps;
            readonly searchField: BlitzFieldProps;
            readonly filtersField: BlitzFieldProps;
            readonly gridToggleField: BlitzFieldProps;
            readonly rowsPerPageField: BlitzFieldProps;
            readonly shownRowsInfoField: BlitzFieldProps;
            readonly paginationField: BlitzFieldProps;
            readonly thField: BlitzFieldProps;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            readonly schemaColumns: {
                readonly type: import("vue").PropType<BlitzColumn[]>;
                readonly default: undefined;
            };
            readonly schemaGrid: {
                readonly type: import("vue").PropType<BlitzColumn[]>;
                readonly default: undefined;
            };
            readonly rows: {
                readonly type: import("vue").PropType<Record<string, any>[]>;
                readonly required: true;
            };
            readonly isGrid: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly gridBlitzFormOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => Record<string, any>;
            };
            readonly selectedRows: {
                readonly type: import("vue").PropType<Record<string, any>[]>;
                readonly default: () => Record<string, any>[];
            };
            readonly mode: {
                readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
                readonly default: "raw";
            };
            readonly filtersState: {
                readonly type: import("vue").PropType<FiltersState>;
                readonly default: () => FiltersState;
            };
            readonly sortState: {
                readonly type: import("vue").PropType<SortState>;
                readonly default: () => SortState;
            };
            readonly rowsPerPage: {
                readonly type: NumberConstructor;
                readonly default: 10;
            };
            readonly pageNr: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly searchValue: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly titleField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly searchField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly filtersField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly gridToggleField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly rowsPerPageField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly shownRowsInfoField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly paginationField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly thField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly lang: {
                readonly type: import("vue").PropType<Record<string, string>>;
                readonly default: () => Record<string, string>;
            };
        }>> & {
            "onUpdate:sortState"?: ((payload: SortState) => any) | undefined;
            "onUpdate:filtersState"?: ((payload: FiltersState) => any) | undefined;
            "onUpdate:rowsPerPage"?: ((payload: number) => any) | undefined;
            "onUpdate:pageNr"?: ((payload: number) => any) | undefined;
            "onUpdate:searchValue"?: ((payload: string) => any) | undefined;
            onRowClick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
            onRowDblclick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
            onCellClick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
            onCellDblclick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
            onUpdateCell?: ((payload: {
                rowId: string;
                colId: string;
                value: any;
                origin?: UpdateModelValueOrigin;
            }) => any) | undefined;
            onRowDeleted?: ((rowIndex: number) => any) | undefined;
            "onUpdate:rows"?: ((payload: Record<string, any>[]) => any) | undefined;
            "onUpdate:isGrid"?: ((payload: boolean) => any) | undefined;
            "onUpdate:selectedRows"?: ((payload: Record<string, any>[]) => any) | undefined;
            "onUpdate:currentRowIndices"?: ((payload: number[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "lang" | "mode" | "filtersState" | "schemaColumns" | "schemaGrid" | "isGrid" | "gridBlitzFormOptions" | "selectedRows" | "sortState" | "rowsPerPage" | "pageNr" | "searchValue" | "titleField" | "searchField" | "filtersField" | "gridToggleField" | "rowsPerPageField" | "shownRowsInfoField" | "paginationField" | "thField">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: "update:filtersState", payload: FiltersState) => void) & ((event: "update:sortState", payload: SortState) => void) & ((event: "update:rowsPerPage", payload: number) => void) & ((event: "update:pageNr", payload: number) => void) & ((event: "update:searchValue", payload: string) => void) & ((event: "rowClick", payload: MouseEvent, rowData: Record<string, any>) => void) & ((event: "rowDblclick", payload: MouseEvent, rowData: Record<string, any>) => void) & ((event: "cellClick", payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void) & ((event: "cellDblclick", payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void) & ((event: "updateCell", payload: {
            rowId: string;
            colId: string;
            value: any;
            origin?: UpdateModelValueOrigin;
        }) => void) & ((event: "rowDeleted", rowIndex: number) => void) & ((event: "update:rows", payload: Record<string, any>[]) => void) & ((event: "update:isGrid", payload: boolean) => void) & ((event: "update:selectedRows", payload: Record<string, any>[]) => void) & ((event: "update:currentRowIndices", payload: number[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            readonly schemaColumns: {
                readonly type: import("vue").PropType<BlitzColumn[]>;
                readonly default: undefined;
            };
            readonly schemaGrid: {
                readonly type: import("vue").PropType<BlitzColumn[]>;
                readonly default: undefined;
            };
            readonly rows: {
                readonly type: import("vue").PropType<Record<string, any>[]>;
                readonly required: true;
            };
            readonly isGrid: {
                readonly type: BooleanConstructor;
                readonly default: undefined;
            };
            readonly gridBlitzFormOptions: {
                readonly type: import("vue").PropType<Record<string, any>>;
                readonly default: () => Record<string, any>;
            };
            readonly selectedRows: {
                readonly type: import("vue").PropType<Record<string, any>[]>;
                readonly default: () => Record<string, any>[];
            };
            readonly mode: {
                readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
                readonly default: "raw";
            };
            readonly filtersState: {
                readonly type: import("vue").PropType<FiltersState>;
                readonly default: () => FiltersState;
            };
            readonly sortState: {
                readonly type: import("vue").PropType<SortState>;
                readonly default: () => SortState;
            };
            readonly rowsPerPage: {
                readonly type: NumberConstructor;
                readonly default: 10;
            };
            readonly pageNr: {
                readonly type: NumberConstructor;
                readonly default: 1;
            };
            readonly searchValue: {
                readonly type: StringConstructor;
                readonly default: "";
            };
            readonly titleField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly searchField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly filtersField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly gridToggleField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly rowsPerPageField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly shownRowsInfoField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly paginationField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly thField: {
                readonly type: import("vue").PropType<BlitzFieldProps>;
                readonly default: undefined;
            };
            readonly lang: {
                readonly type: import("vue").PropType<Record<string, string>>;
                readonly default: () => Record<string, string>;
            };
        }>> & {
            "onUpdate:sortState"?: ((payload: SortState) => any) | undefined;
            "onUpdate:filtersState"?: ((payload: FiltersState) => any) | undefined;
            "onUpdate:rowsPerPage"?: ((payload: number) => any) | undefined;
            "onUpdate:pageNr"?: ((payload: number) => any) | undefined;
            "onUpdate:searchValue"?: ((payload: string) => any) | undefined;
            onRowClick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
            onRowDblclick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
            onCellClick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
            onCellDblclick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
            onUpdateCell?: ((payload: {
                rowId: string;
                colId: string;
                value: any;
                origin?: UpdateModelValueOrigin;
            }) => any) | undefined;
            onRowDeleted?: ((rowIndex: number) => any) | undefined;
            "onUpdate:rows"?: ((payload: Record<string, any>[]) => any) | undefined;
            "onUpdate:isGrid"?: ((payload: boolean) => any) | undefined;
            "onUpdate:selectedRows"?: ((payload: Record<string, any>[]) => any) | undefined;
            "onUpdate:currentRowIndices"?: ((payload: number[]) => any) | undefined;
        }, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            rowClick: (payload: MouseEvent, rowData: Record<string, any>) => void;
        } & {
            rowDblclick: (payload: MouseEvent, rowData: Record<string, any>) => void;
        } & {
            cellClick: (payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void;
        } & {
            cellDblclick: (payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void;
        } & {
            updateCell: (payload: {
                rowId: string;
                colId: string;
                value: any;
                origin?: UpdateModelValueOrigin;
            }) => void;
        } & {
            rowDeleted: (rowIndex: number) => void;
        } & {
            "update:rows": (payload: Record<string, any>[]) => void;
        } & {
            "update:isGrid": (payload: boolean) => void;
        } & {
            "update:selectedRows": (payload: Record<string, any>[]) => void;
        } & {
            "update:filtersState": (payload: FiltersState) => void;
        } & {
            "update:sortState": (payload: SortState) => void;
        } & {
            "update:rowsPerPage": (payload: number) => void;
        } & {
            "update:pageNr": (payload: number) => void;
        } & {
            "update:searchValue": (payload: string) => void;
        } & {
            "update:currentRowIndices": (payload: number[]) => void;
        }, string, {
            readonly lang: Record<string, string>;
            readonly mode: import("@blitzar/types").Mode;
            readonly filtersState: FiltersState;
            readonly schemaColumns: BlitzColumn[];
            readonly schemaGrid: BlitzColumn[];
            readonly isGrid: boolean;
            readonly gridBlitzFormOptions: Record<string, any>;
            readonly selectedRows: Record<string, any>[];
            readonly sortState: SortState;
            readonly rowsPerPage: number;
            readonly pageNr: number;
            readonly searchValue: string;
            readonly titleField: BlitzFieldProps;
            readonly searchField: BlitzFieldProps;
            readonly filtersField: BlitzFieldProps;
            readonly gridToggleField: BlitzFieldProps;
            readonly rowsPerPageField: BlitzFieldProps;
            readonly shownRowsInfoField: BlitzFieldProps;
            readonly paginationField: BlitzFieldProps;
            readonly thField: BlitzFieldProps;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        readonly schemaColumns: {
            readonly type: import("vue").PropType<BlitzColumn[]>;
            readonly default: undefined;
        };
        readonly schemaGrid: {
            readonly type: import("vue").PropType<BlitzColumn[]>;
            readonly default: undefined;
        };
        readonly rows: {
            readonly type: import("vue").PropType<Record<string, any>[]>;
            readonly required: true;
        };
        readonly isGrid: {
            readonly type: BooleanConstructor;
            readonly default: undefined;
        };
        readonly gridBlitzFormOptions: {
            readonly type: import("vue").PropType<Record<string, any>>;
            readonly default: () => Record<string, any>;
        };
        readonly selectedRows: {
            readonly type: import("vue").PropType<Record<string, any>[]>;
            readonly default: () => Record<string, any>[];
        };
        readonly mode: {
            readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
            readonly default: "raw";
        };
        readonly filtersState: {
            readonly type: import("vue").PropType<FiltersState>;
            readonly default: () => FiltersState;
        };
        readonly sortState: {
            readonly type: import("vue").PropType<SortState>;
            readonly default: () => SortState;
        };
        readonly rowsPerPage: {
            readonly type: NumberConstructor;
            readonly default: 10;
        };
        readonly pageNr: {
            readonly type: NumberConstructor;
            readonly default: 1;
        };
        readonly searchValue: {
            readonly type: StringConstructor;
            readonly default: "";
        };
        readonly titleField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly searchField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly filtersField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly gridToggleField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly rowsPerPageField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly shownRowsInfoField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly paginationField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly thField: {
            readonly type: import("vue").PropType<BlitzFieldProps>;
            readonly default: undefined;
        };
        readonly lang: {
            readonly type: import("vue").PropType<Record<string, string>>;
            readonly default: () => Record<string, string>;
        };
    }>> & {
        "onUpdate:sortState"?: ((payload: SortState) => any) | undefined;
        "onUpdate:filtersState"?: ((payload: FiltersState) => any) | undefined;
        "onUpdate:rowsPerPage"?: ((payload: number) => any) | undefined;
        "onUpdate:pageNr"?: ((payload: number) => any) | undefined;
        "onUpdate:searchValue"?: ((payload: string) => any) | undefined;
        onRowClick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
        onRowDblclick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
        onCellClick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
        onCellDblclick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
        onUpdateCell?: ((payload: {
            rowId: string;
            colId: string;
            value: any;
            origin?: UpdateModelValueOrigin;
        }) => any) | undefined;
        onRowDeleted?: ((rowIndex: number) => any) | undefined;
        "onUpdate:rows"?: ((payload: Record<string, any>[]) => any) | undefined;
        "onUpdate:isGrid"?: ((payload: boolean) => any) | undefined;
        "onUpdate:selectedRows"?: ((payload: Record<string, any>[]) => any) | undefined;
        "onUpdate:currentRowIndices"?: ((payload: number[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<{}> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    readonly schemaColumns: {
        readonly type: import("vue").PropType<BlitzColumn[]>;
        readonly default: undefined;
    };
    readonly schemaGrid: {
        readonly type: import("vue").PropType<BlitzColumn[]>;
        readonly default: undefined;
    };
    readonly rows: {
        readonly type: import("vue").PropType<Record<string, any>[]>;
        readonly required: true;
    };
    readonly isGrid: {
        readonly type: BooleanConstructor;
        readonly default: undefined;
    };
    readonly gridBlitzFormOptions: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: () => Record<string, any>;
    };
    readonly selectedRows: {
        readonly type: import("vue").PropType<Record<string, any>[]>;
        readonly default: () => Record<string, any>[];
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
        readonly default: "raw";
    };
    readonly filtersState: {
        readonly type: import("vue").PropType<FiltersState>;
        readonly default: () => FiltersState;
    };
    readonly sortState: {
        readonly type: import("vue").PropType<SortState>;
        readonly default: () => SortState;
    };
    readonly rowsPerPage: {
        readonly type: NumberConstructor;
        readonly default: 10;
    };
    readonly pageNr: {
        readonly type: NumberConstructor;
        readonly default: 1;
    };
    readonly searchValue: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly titleField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly searchField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly filtersField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly gridToggleField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly rowsPerPageField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly shownRowsInfoField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly paginationField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly thField: {
        readonly type: import("vue").PropType<BlitzFieldProps>;
        readonly default: undefined;
    };
    readonly lang: {
        readonly type: import("vue").PropType<Record<string, string>>;
        readonly default: () => Record<string, string>;
    };
}>> & {
    "onUpdate:sortState"?: ((payload: SortState) => any) | undefined;
    "onUpdate:filtersState"?: ((payload: FiltersState) => any) | undefined;
    "onUpdate:rowsPerPage"?: ((payload: number) => any) | undefined;
    "onUpdate:pageNr"?: ((payload: number) => any) | undefined;
    "onUpdate:searchValue"?: ((payload: string) => any) | undefined;
    onRowClick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
    onRowDblclick?: ((payload: MouseEvent, rowData: Record<string, any>) => any) | undefined;
    onCellClick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
    onCellDblclick?: ((payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => any) | undefined;
    onUpdateCell?: ((payload: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => any) | undefined;
    onRowDeleted?: ((rowIndex: number) => any) | undefined;
    "onUpdate:rows"?: ((payload: Record<string, any>[]) => any) | undefined;
    "onUpdate:isGrid"?: ((payload: boolean) => any) | undefined;
    "onUpdate:selectedRows"?: ((payload: Record<string, any>[]) => any) | undefined;
    "onUpdate:currentRowIndices"?: ((payload: number[]) => any) | undefined;
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    rowClick: (payload: MouseEvent, rowData: Record<string, any>) => void;
} & {
    rowDblclick: (payload: MouseEvent, rowData: Record<string, any>) => void;
} & {
    cellClick: (payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void;
} & {
    cellDblclick: (payload: MouseEvent, rowData: Record<string, any>, colId?: string | undefined) => void;
} & {
    updateCell: (payload: {
        rowId: string;
        colId: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => void;
} & {
    rowDeleted: (rowIndex: number) => void;
} & {
    "update:rows": (payload: Record<string, any>[]) => void;
} & {
    "update:isGrid": (payload: boolean) => void;
} & {
    "update:selectedRows": (payload: Record<string, any>[]) => void;
} & {
    "update:filtersState": (payload: FiltersState) => void;
} & {
    "update:sortState": (payload: SortState) => void;
} & {
    "update:rowsPerPage": (payload: number) => void;
} & {
    "update:pageNr": (payload: number) => void;
} & {
    "update:searchValue": (payload: string) => void;
} & {
    "update:currentRowIndices": (payload: number[]) => void;
}, string, {
    readonly lang: Record<string, string>;
    readonly mode: import("@blitzar/types").Mode;
    readonly filtersState: FiltersState;
    readonly schemaColumns: BlitzColumn[];
    readonly schemaGrid: BlitzColumn[];
    readonly isGrid: boolean;
    readonly gridBlitzFormOptions: Record<string, any>;
    readonly selectedRows: Record<string, any>[];
    readonly sortState: SortState;
    readonly rowsPerPage: number;
    readonly pageNr: number;
    readonly searchValue: string;
    readonly titleField: BlitzFieldProps;
    readonly searchField: BlitzFieldProps;
    readonly filtersField: BlitzFieldProps;
    readonly gridToggleField: BlitzFieldProps;
    readonly rowsPerPageField: BlitzFieldProps;
    readonly shownRowsInfoField: BlitzFieldProps;
    readonly paginationField: BlitzFieldProps;
    readonly thField: BlitzFieldProps;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
    $slots: {
        default: (_: {}) => any;
        noDataFound: (_: {}) => any;
    };
});
export default _default;
