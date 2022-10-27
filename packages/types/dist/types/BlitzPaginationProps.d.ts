import { PropType } from 'vue';
import { TableMeta } from './table';
import { ExternalProps } from './VueExternalProps';
export declare const blitzPaginationProps: {
    /**
     * Represents the current open page
     */
    readonly modelValue: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    /**
     * The total page count for the currently filtered pages based on the `rowsPerPage`
     */
    readonly pageCount: {
        readonly type: NumberConstructor;
        readonly required: true;
    };
    /**
     * BlitzTable will pass the TableMeta which represents the heart of the table state. You can use this freely in your component.
     *
     * TODO: Add information on how to mock the TableMeta prop for development.
     */
    readonly tableMeta: {
        readonly type: PropType<TableMeta>;
        readonly default: undefined;
    };
};
export declare type BlitzPaginationProps = ExternalProps<typeof blitzPaginationProps>;
