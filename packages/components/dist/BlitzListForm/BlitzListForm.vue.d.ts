import { PropType } from 'vue';
import type { BlitzFieldProps, SchemaField, UpdateModelValueOrigin } from '@blitzar/types';
/**
With BlitzListForm you can pass a `schema` just like a BlitzForm. The difference is that BlitzListForm is more like a (as the name says) _**list**_ form. 😃

The `schema` you specify is shown as a single row. New rows are added automatically on user input.
 */
declare const _default: import("vue").DefineComponent<{
    /**
     * @category model
     */
    modelValue: {
        type: PropType<any[]>;
        default: () => never[];
    };
    /**
     * This is the information on the columns you want to be shown. An array of objects just like a BlitzForm.
     * @example
     * ```js
     * [{ label: 'Amount', id: 'amount', component: 'input', type: 'number', style: 'color: white' }, { label: 'Currency', id: 'curr', component: 'select', slot: [{ component: 'option', value: '', slot: 'Select one', disabled: true }, { component: 'option', value: 'usd', slot: 'USD' }], style: 'color: white' }]
     * ```
     * @category content
     */
    schema: {
        type: PropType<SchemaField[]>;
        default: () => {
            component: string;
        }[];
    };
    /**
     * A list of prop (attribute) names to be passed on to each single BlitzField generated in the list form.
     *
     * This is useful when you want to use Dynamic Props in the schema of the mine form but need information from the top level BlitzForm.
     * @example ['formData', 'mode', 'myCustomProp']
     * @category content
     */
    attrsToPass: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Allows to limit the max amount of rows.
     * @category content
     */
    maxRows: {
        type: NumberConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    readonly: {
        type: BooleanConstructor;
        default: undefined;
    };
}, unknown, unknown, {
    /**
     * This is the value with an empty row concatinated to it.
     */
    cValue: {
        get(): any;
        set(val: any): void;
    };
    listFormAttrsToPass(): Record<string, any>;
    cSchema(): BlitzFieldProps[];
    schemaLabelsAndAttrs(): Record<string, any>[];
    gridTemplateColumnsCalculated(): string;
}, {
    getPropOrAttrOrParentProp(propKey: string): any;
    deleteRow(rowIndex: number): void;
    setSubFieldValue({ id, value: newValue, rowIndex }: {
        id: string | undefined;
        value: any;
        rowIndex: number;
    }, origin?: UpdateModelValueOrigin): void;
    onDeleteKey(rowIndex: number): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    /**
     * @type {(payload: any) => boolean}
     */
    'update:modelValue': null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * @category model
     */
    modelValue: {
        type: PropType<any[]>;
        default: () => never[];
    };
    /**
     * This is the information on the columns you want to be shown. An array of objects just like a BlitzForm.
     * @example
     * ```js
     * [{ label: 'Amount', id: 'amount', component: 'input', type: 'number', style: 'color: white' }, { label: 'Currency', id: 'curr', component: 'select', slot: [{ component: 'option', value: '', slot: 'Select one', disabled: true }, { component: 'option', value: 'usd', slot: 'USD' }], style: 'color: white' }]
     * ```
     * @category content
     */
    schema: {
        type: PropType<SchemaField[]>;
        default: () => {
            component: string;
        }[];
    };
    /**
     * A list of prop (attribute) names to be passed on to each single BlitzField generated in the list form.
     *
     * This is useful when you want to use Dynamic Props in the schema of the mine form but need information from the top level BlitzForm.
     * @example ['formData', 'mode', 'myCustomProp']
     * @category content
     */
    attrsToPass: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Allows to limit the max amount of rows.
     * @category content
     */
    maxRows: {
        type: NumberConstructor;
        default: undefined;
    };
    disabled: {
        type: BooleanConstructor;
        default: undefined;
    };
    readonly: {
        type: BooleanConstructor;
        default: undefined;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    readonly: boolean;
    modelValue: any[];
    disabled: boolean;
    schema: SchemaField[];
    attrsToPass: string[];
    maxRows: number;
}>;
export default _default;
