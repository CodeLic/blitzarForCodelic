import type { UpdateModelValueOrigin, Lang } from '@blitzar/types';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: import("vue").PropType<string>;
        readonly default: undefined;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly parseValue: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => any>;
        readonly default: undefined;
    };
    readonly parseInput: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => any>;
        readonly default: undefined;
    };
    readonly component: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly slots: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<{
            label?: string | Record<string, any> | Record<string, any>[] | undefined;
            default?: string | Record<string, any> | Record<string, any>[] | undefined;
        }>>;
        readonly default: undefined;
    };
    readonly lang: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<Partial<Lang>>>;
        readonly default: () => {
            archive: string;
            delete: string;
            cancel: string;
            edit: string;
            save: string;
            requiredField: string;
            formValidationError: string;
        };
    };
    readonly label: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string>>;
        readonly default: undefined;
    };
    readonly subLabel: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string>>;
        readonly default: undefined;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<import("@blitzar/types").Mode>>;
        readonly default: "edit";
        readonly validator: (prop: any) => true;
    };
    readonly events: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<Record<string, (event: any, formContext: import("@blitzar/types").FormContext) => any>>>;
        readonly default: () => {};
    };
    readonly required: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "required">>;
        readonly default: undefined;
    };
    readonly dynamicProps: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => string[];
    };
    readonly internalLabels: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | undefined>>;
        readonly default: undefined;
    };
    readonly internalErrors: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | undefined>>;
        readonly default: undefined;
    };
    /**
     * This event enables the field to be usable with `v-model="value"`
     * @property {*} payload the updated value
     * @property {UpdateModelValueOrigin} origin the cause of the `update:modelValue` event:
     * - `'default'` means that the event was emitted when the form was mounted and all fields have initialised their default values.
     * - `update:modelValue` events from user input won't have an origin.
     */
    readonly showErrorsOn: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<import("@blitzar/types").ShowErrorsOn>>;
        readonly default: "interaction";
    };
    readonly showCondition: {
        /**
         * Validates a field
         * @param focusIfError — Wether or not it should focus the field with an error. Defaults to `false`
         * @returns the result of the error validation
         */
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean>>;
        readonly default: true;
    };
    readonly readonly: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "readonly">>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "disabled">>;
        readonly default: undefined;
    };
    readonly error: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | null>>;
        readonly default: undefined;
    };
    readonly labelPosition: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<"top" | "left">>;
        readonly default: "top";
        readonly validator: (prop: any) => true;
    };
    readonly fieldStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly fieldClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly componentStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly componentClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly labelStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly labelClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly formData: {
        readonly type: import("vue").PropType<Record<string, any> | Record<string, any>[]>;
        readonly default: undefined;
    };
    readonly formDataFlat: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: undefined;
    };
    readonly formId: {
        readonly type: import("vue").PropType<string>;
        readonly default: undefined;
    };
    readonly formMode: {
        readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
        readonly default: undefined;
        readonly validator: (prop: any) => never;
    };
    readonly updateField: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => void>;
        readonly default: undefined;
    };
    readonly rowIndex: {
        readonly type: import("vue").PropType<number>;
        readonly default: undefined;
    };
    readonly rowData: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: undefined;
    };
    readonly deleteRow: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: undefined;
    };
}, unknown, {
    innerValue: any;
    justMounted: boolean;
    isDirty: boolean;
    /**
     * Only relevant when `showErrorsOn: 'save'`
     */
    showingErrorBeforeSave: boolean;
}, {
    cValue: {
        get(): any;
        set(val: any, ...otherArguments: any[]): void;
    };
    dynamicPropsEvaluated(): {
        [x: string]: any;
    };
    defaultSlotCalculated(): any;
    usesInternalLabels(): boolean;
    langCalculated(): Lang;
    errorCalculated(): null | string;
    eventsCalculated(): {
        [x: string]: any;
    };
    propsAndAttrsToPass(): {
        [x: string]: any;
    };
    labelUsedHere(): string | undefined;
    subLabelHtmlUsedHere(): string | null;
    parsedFieldValue(): any;
}, {
    evalPropOrAttr(propOrAttr: any): any;
    event(eventName: 'update:modelValue', payload: any, origin?: UpdateModelValueOrigin): void;
    evaluateError(): null | string;
    /**
     * Validates a field
     * @param focusIfError — Wether or not it should focus the field with an error. Defaults to `false`
     * @returns the result of the error validation
     */
    validate(focusIfError?: boolean | undefined): null | string;
    /**
     * Resets internal values
     */
    resetDirtyAndErrors(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:modelValue': (payload: any, origin?: UpdateModelValueOrigin) => boolean;
    /** HTML5 event from the top level div */
    click: null;
    /** HTML5 event from the top level div */
    dblclick: null;
    /** HTML5 event from the top level div */
    mousedown: null;
    /** HTML5 event from the top level div */
    mouseup: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly id: {
        readonly type: import("vue").PropType<string>;
        readonly default: undefined;
    };
    readonly defaultValue: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly parseValue: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => any>;
        readonly default: undefined;
    };
    readonly parseInput: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => any>;
        readonly default: undefined;
    };
    readonly component: {
        readonly type: import("vue").PropType<any>;
        readonly default: undefined;
    };
    readonly slots: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<{
            label?: string | Record<string, any> | Record<string, any>[] | undefined;
            default?: string | Record<string, any> | Record<string, any>[] | undefined;
        }>>;
        readonly default: undefined;
    };
    readonly lang: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<Partial<Lang>>>;
        readonly default: () => {
            archive: string;
            delete: string;
            cancel: string;
            edit: string;
            save: string;
            requiredField: string;
            formValidationError: string;
        };
    };
    readonly label: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string>>;
        readonly default: undefined;
    };
    readonly subLabel: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string>>;
        readonly default: undefined;
    };
    readonly mode: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<import("@blitzar/types").Mode>>;
        readonly default: "edit";
        readonly validator: (prop: any) => true;
    };
    readonly events: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<Record<string, (event: any, formContext: import("@blitzar/types").FormContext) => any>>>;
        readonly default: () => {};
    };
    readonly required: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "required">>;
        readonly default: undefined;
    };
    readonly dynamicProps: {
        readonly type: import("vue").PropType<string[]>;
        readonly default: () => string[];
    };
    readonly internalLabels: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | undefined>>;
        readonly default: undefined;
    };
    readonly internalErrors: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | undefined>>;
        readonly default: undefined;
    };
    /**
     * This event enables the field to be usable with `v-model="value"`
     * @property {*} payload the updated value
     * @property {UpdateModelValueOrigin} origin the cause of the `update:modelValue` event:
     * - `'default'` means that the event was emitted when the form was mounted and all fields have initialised their default values.
     * - `update:modelValue` events from user input won't have an origin.
     */
    readonly showErrorsOn: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<import("@blitzar/types").ShowErrorsOn>>;
        readonly default: "interaction";
    };
    readonly showCondition: {
        /**
         * Validates a field
         * @param focusIfError — Wether or not it should focus the field with an error. Defaults to `false`
         * @returns the result of the error validation
         */
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean>>;
        readonly default: true;
    };
    readonly readonly: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "readonly">>;
        readonly default: undefined;
    };
    readonly disabled: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<boolean | "disabled">>;
        readonly default: undefined;
    };
    readonly error: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | null>>;
        readonly default: undefined;
    };
    readonly labelPosition: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<"top" | "left">>;
        readonly default: "top";
        readonly validator: (prop: any) => true;
    };
    readonly fieldStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly fieldClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly componentStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly componentClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly labelStyle: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly labelClasses: {
        readonly type: import("vue").PropType<import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>>;
        readonly default: undefined;
    };
    readonly formData: {
        readonly type: import("vue").PropType<Record<string, any> | Record<string, any>[]>;
        readonly default: undefined;
    };
    readonly formDataFlat: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: undefined;
    };
    readonly formId: {
        readonly type: import("vue").PropType<string>;
        readonly default: undefined;
    };
    readonly formMode: {
        readonly type: import("vue").PropType<import("@blitzar/types").Mode>;
        readonly default: undefined;
        readonly validator: (prop: any) => never;
    };
    readonly updateField: {
        readonly type: import("vue").PropType<(val: any, formContext: import("@blitzar/types").FormContext) => void>;
        readonly default: undefined;
    };
    readonly rowIndex: {
        readonly type: import("vue").PropType<number>;
        readonly default: undefined;
    };
    readonly rowData: {
        readonly type: import("vue").PropType<Record<string, any>>;
        readonly default: undefined;
    };
    readonly deleteRow: {
        readonly type: import("vue").PropType<() => void>;
        readonly default: undefined;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: any, origin?: UpdateModelValueOrigin) => any) | undefined;
}, {
    readonly readonly: import("@blitzar/types").DynamicProp<boolean | "readonly">;
    readonly label: import("@blitzar/types").DynamicProp<string>;
    readonly required: import("@blitzar/types").DynamicProp<boolean | "required">;
    readonly component: any;
    readonly events: import("@blitzar/types").DynamicProp<Record<string, (event: any, formContext: import("@blitzar/types").FormContext) => any>>;
    readonly slots: import("@blitzar/types").DynamicProp<{
        label?: string | Record<string, any> | Record<string, any>[] | undefined;
        default?: string | Record<string, any> | Record<string, any>[] | undefined;
    }>;
    readonly lang: import("@blitzar/types").DynamicProp<Partial<Lang>>;
    readonly mode: import("@blitzar/types").DynamicProp<import("@blitzar/types").Mode>;
    readonly modelValue: any;
    readonly id: string;
    readonly defaultValue: any;
    readonly parseValue: (val: any, formContext: import("@blitzar/types").FormContext) => any;
    readonly parseInput: (val: any, formContext: import("@blitzar/types").FormContext) => any;
    readonly subLabel: import("@blitzar/types").DynamicProp<string>;
    readonly dynamicProps: string[];
    readonly internalLabels: import("@blitzar/types").DynamicProp<boolean | undefined>;
    readonly internalErrors: import("@blitzar/types").DynamicProp<boolean | undefined>;
    readonly showErrorsOn: import("@blitzar/types").DynamicProp<import("@blitzar/types").ShowErrorsOn>;
    readonly showCondition: import("@blitzar/types").DynamicProp<boolean>;
    readonly disabled: import("@blitzar/types").DynamicProp<boolean | "disabled">;
    readonly error: import("@blitzar/types").DynamicProp<string | null>;
    readonly labelPosition: import("@blitzar/types").DynamicProp<"top" | "left">;
    readonly fieldStyle: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly fieldClasses: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly componentStyle: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly componentClasses: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly labelStyle: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly labelClasses: import("@blitzar/types").DynamicProp<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
    readonly formData: Record<string, any> | Record<string, any>[];
    readonly formDataFlat: Record<string, any>;
    readonly formId: string;
    readonly formMode: import("@blitzar/types").Mode;
    readonly updateField: (val: any, formContext: import("@blitzar/types").FormContext) => void;
    readonly rowIndex: number;
    readonly rowData: Record<string, any>;
    readonly deleteRow: () => void;
}>;
export default _default;
