export declare type Lang = {
    archive: string;
    delete: string;
    cancel: string;
    edit: string;
    save: string;
    requiredField: string;
    formValidationError: string;
    [key: string]: string;
};
export declare type Mode = 'edit' | 'readonly' | 'disabled' | 'raw';
export declare type FormContext = {
    formData: Record<string, any>;
    formDataFlat: Record<string, any>;
    formMode: Mode;
    mode: Mode;
    updateField: (payload: {
        id: string;
        value: any;
    }) => void;
    lang: Lang;
    /** Only available in BlitzTable & BlitzListForm */
    rowData?: Record<string, any>;
    /** Only available in BlitzTable & BlitzListForm */
    deleteRow?: () => void;
    /** Only available in BlitzTable & BlitzListForm */
    rowIndex?: number;
    [key: string]: any;
};
export declare type DynamicProp<T> = T | ((val: any, formContext: FormContext) => T);
/** Extracts the payload out of a DynamicProp<T> */
declare type ExtractPayload<T> = T extends (val: any, formContext: FormContext) => infer R ? R : T;
/** Use on eg. `BlitzFieldProps` to get the same type but with all DynamicProps evaluated */
export declare type EvaluateDynamicProps<T> = {
    [K in keyof T]: ExtractPayload<T[K]>;
};
export declare type ShowErrorsOn = 'interaction' | 'save' | 'save-focus' | 'never' | 'always';
/**
 * the 'origin' param explains the reason `@update:modelValue` was emitted from a field:
 * - `undefined` regular field input — no special reason
 * - `'default'`  was because of the provided `defaultValue` in the schema
 * - `'cancel'` the reason `@update:modelValue` was emitted from a field was because the user clicked "cancel" in the BlitzForm
 */
export declare type UpdateModelValueOrigin = 'default' | 'cancel' | undefined;
export {};
