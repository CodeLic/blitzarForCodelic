import { PropType } from 'vue';
import { isFullString } from 'is-what';
import type { BlitzFieldProps, Lang, Mode, SchemaField, ShowErrorsOn, UpdateModelValueOrigin } from '@blitzar/types';
/**
Here you can find all the information on the available props & events of BlitzForm.

If any of the documentation is unclear, feel free to [open an issue](https://github.com/cycraft/blitzar/issues) to ask for clarification!
 */
declare const _default: import("vue").DefineComponent<{
    /**
     * An object with the data of the entire form. The object keys are the ids of the fields passed in the `schema`.
     *
     * To be used with `:modelValue` or `v-model`.
     * @example { name: '' }
     * @category model
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    /**
     * A manually set `id` of the BlitzForm. This prop is accessible in the `context` (as `formId`) of any Dynamic Prop and event.
     *
     * Read more on Dynamic Props in its dedicated page.
     * @category model
     */
    id: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * This is the heart of your BlitzForm. It's the schema that defines what fields will be generated.
     *
     * The possible props you can pass are:
     * - BlitzField props (see BlitzField API Card in the documentation)
     * - any props of the actual component you define
     * @example
     * ```js
     * [{id: 'name', label: 'Name', component: 'input', style: 'color: white'}, {id: 'age', label: 'Age', component: 'input', type: 'number', style: 'color: white'}]
     * ```
     * @category model
     */
    schema: {
        type: PropType<SchemaField[]>;
        required: true;
    };
    /**
     * Buttons on top of the form that control the `mode` of the form. The possible pre-made buttons are:
     * - `'edit'` — a button which puts the form in 'edit' mode & does `emit('edit')`
     * - `'cancel'` — a button which puts the form in 'readonly' mode & does `emit('cancel')`
     * - `'save'` — a button which puts the form in 'edit' mode & does `emit('save', {newData, oldData})`
     * - `'delete'` — a red button which does `emit('delete')`
     * - `'archive'` — a red button which does `emit('archive')`
     *
     * You can also pass custom buttons with the same schema to generate forms.
     *
     * See the documentation on Action Buttons for more info.
     * @example
     * ```js
     * ['delete', 'cancel', 'edit', 'save']
     * ```
     * @example
     * ```js
     * [{component: 'button', type: 'button', slot: 'log', events: {click: console.log}}]
     * ```
     * @category content
     */
    actionButtons: {
        type: PropType<(Record<string, any> | "archive" | "delete" | "cancel" | "edit" | "save")[]>;
        default: () => never[];
    };
    /**
     * You can overwrite the schema used for the default action buttons for edit, cancel, save, delete & archive.
     * @example
     * ```js
     * {'save': {push: true}, 'delete': {color: 'secondary'}}
     * ```
     * @category content
     */
    actionButtonDefaults: {
        type: PropType<{
            edit?: Record<string, any> | undefined;
            cancel?: Record<string, any> | undefined;
            save?: Record<string, any> | undefined;
            delete?: Record<string, any> | undefined;
            archive?: Record<string, any> | undefined;
        }>;
        default: () => {};
    };
    /**
     * The position of the action buttons.
     * @category content
     */
    actionButtonsPosition: {
        type: PropType<"top" | "left" | "bottom" | "right">;
        default: string;
        validator: (prop: 'top' | 'bottom' | 'right' | 'left') => boolean;
    };
    /**
     * The amount of columns the form should have. Each field can set a specific 'span' to be able to span multiple columns.
     * @category style
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The size of the gap between each field in the form.
     * @category style
     */
    gridGap: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The text used in the UI for the action buttons and some error messages.
     * @example
     * ```js
     * { cancel: 'キャンセル', edit: '編集', save: '保存' }
     * ```
     * @category content
     */
    lang: {
        type: PropType<Partial<Lang>>;
        default: () => {
            archive: string;
            delete: string;
            cancel: string;
            edit: string;
            save: string;
            requiredField: string;
            formValidationError: string;
        };
    };
    /**
     * The mode represents how fields are rendered
     * - `'edit'` — (default) show editable fields based on the schema
     * - `'readonly'` — show each field with `readonly: true`
     * - `'disabled'` — show each field with `disabled: true`
     * - `'raw'` — used to show raw data of your form (for select components, it will show the data label instead of its value)
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category state
     */
    mode: {
        type: PropType<Mode>;
        default: string;
        validator: (prop: Mode) => boolean;
    };
    /**
     * The position of the label in comparison to the field.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    labelPosition: {
        type: PropType<"top" | "left">;
        default: string;
        validator: (prop: 'top' | 'left') => boolean;
    };
    /**
     * Custom styling to be applied to the label of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example 'font-weight: 200;'
     * @category style
     */
    labelStyle: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
        default: null;
    };
    /**
     * Custom classes to be applied to the label of BlitzField. Applied like so `:class="labelClasses"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example ['text-h6']
     * @category style
     */
    labelClasses: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
        default: null;
    };
    /**
     * An array with prop names that should be treated as Dynamic Props when passed a function.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    dynamicProps: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Set to `true` if the component will take care of showing the `label` and `subLabel`. Both of these props will be passed to the component and not shown in BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalLabels: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    /**
     * Set to true if the component has its own error handling. This makes sure it passes on props like `error` and does nothing with them in the BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalErrors: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    /**
     * - 'interaction' — evaluates & shows errors on every interaction or keystroke
     * - 'save' — only evaluates & shows errors when clicking 'save'
     * - 'save-focus' — only evaluates & shows errors when clicking 'save', then focuses the first field with an error
     * - 'never' — never evaluate or show errors
     * - 'always' — always evaluate and show errors, even without user interaction
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    showErrorsOn: {
        type: PropType<ShowErrorsOn>;
        default: string;
        validator: (prop: ShowErrorsOn) => boolean;
    };
    /**
     * The component that should be used to generate the form. Defaults to a div. You can pass the name of a native HTML5 element or Vue component that is globally registered. You can also import the Vue file and directly pass the imported object, just like you would when you add it to a Vue file's components prop.
     * @example 'form'
     * @example 'tr'
     * @example 'MyFormWrapper'
     */
    formComponent: {
        type: PropType<any>;
        default: string;
    };
}, unknown, {
    innerLang: Lang;
    innerMode: Mode;
    formId: string | undefined;
    edited: boolean;
    editedFields: string[];
    formDataFlat: Record<string, any>;
    formDataFlatBackups: Record<string, any>[];
    formErrorMsg: string | null;
}, {
    formData(): Record<string, any>;
    cMode: {
        get(): Mode;
        set(val: Mode): void;
    };
    schemaOverwritableDefaults(): Record<string, any>;
    schemaForcedDefaults(): Record<string, any>;
    cSchema(): BlitzFieldProps[];
    actionButtonsMap(): {
        edit: Record<string, any> | undefined;
        cancel: Record<string, any> | undefined;
        save: Record<string, any> | undefined;
        delete: Record<string, any> | undefined;
        archive: Record<string, any> | undefined;
    };
    actionButtonsSchema(): Record<string, any>[];
    dataBackup(): Record<string, any>;
    dataEdited(): Record<string, any>;
}, {
    isFullString: typeof isFullString;
    event(eventName: 'update:mode' | 'updateField' | 'update:modelValue' | 'edit' | 'cancel' | 'save' | 'delete' | 'archive', payload?: any, origin?: UpdateModelValueOrigin): void;
    updateField({ id, value, origin, }: {
        id: string | undefined;
        value: any;
        origin?: UpdateModelValueOrigin;
    }): void;
    resetState(): void;
    restoreBackup(): void;
    tapCancel(): void;
    /**
     * Validate all fields for potential errors
     * @param focusIfError Wether or not it should focus the field with an error. Defaults to `false`
     * @returns The result of the first field it finds with an error, or `null` if no errors were found.
     */
    validate(focusIfError?: undefined | boolean): null | string;
    tapEdit(): void;
    tapSave(): void;
    tapDelete(): void;
    tapArchive(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    'update:mode': (payload: Mode) => boolean;
    updateField: (payload: {
        id: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => boolean;
    'update:modelValue': (payload: Record<string, any>, origin?: UpdateModelValueOrigin) => boolean;
    edit: () => true;
    cancel: () => true;
    save: (payload: {
        newData: Record<string, any>;
        oldData: Record<string, any>;
        formData: Record<string, any>;
    }) => boolean;
    delete: () => true;
    archive: () => true;
    /** HTML5 event from the top level component */
    click: null;
    /** HTML5 event from the top level component */
    dblclick: null;
    /** HTML5 event from the top level component */
    mousedown: null;
    /** HTML5 event from the top level component */
    mouseup: null;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * An object with the data of the entire form. The object keys are the ids of the fields passed in the `schema`.
     *
     * To be used with `:modelValue` or `v-model`.
     * @example { name: '' }
     * @category model
     */
    modelValue: {
        type: PropType<Record<string, any>>;
        default: () => {};
    };
    /**
     * A manually set `id` of the BlitzForm. This prop is accessible in the `context` (as `formId`) of any Dynamic Prop and event.
     *
     * Read more on Dynamic Props in its dedicated page.
     * @category model
     */
    id: {
        type: StringConstructor;
        default: undefined;
    };
    /**
     * This is the heart of your BlitzForm. It's the schema that defines what fields will be generated.
     *
     * The possible props you can pass are:
     * - BlitzField props (see BlitzField API Card in the documentation)
     * - any props of the actual component you define
     * @example
     * ```js
     * [{id: 'name', label: 'Name', component: 'input', style: 'color: white'}, {id: 'age', label: 'Age', component: 'input', type: 'number', style: 'color: white'}]
     * ```
     * @category model
     */
    schema: {
        type: PropType<SchemaField[]>;
        required: true;
    };
    /**
     * Buttons on top of the form that control the `mode` of the form. The possible pre-made buttons are:
     * - `'edit'` — a button which puts the form in 'edit' mode & does `emit('edit')`
     * - `'cancel'` — a button which puts the form in 'readonly' mode & does `emit('cancel')`
     * - `'save'` — a button which puts the form in 'edit' mode & does `emit('save', {newData, oldData})`
     * - `'delete'` — a red button which does `emit('delete')`
     * - `'archive'` — a red button which does `emit('archive')`
     *
     * You can also pass custom buttons with the same schema to generate forms.
     *
     * See the documentation on Action Buttons for more info.
     * @example
     * ```js
     * ['delete', 'cancel', 'edit', 'save']
     * ```
     * @example
     * ```js
     * [{component: 'button', type: 'button', slot: 'log', events: {click: console.log}}]
     * ```
     * @category content
     */
    actionButtons: {
        type: PropType<(Record<string, any> | "archive" | "delete" | "cancel" | "edit" | "save")[]>;
        default: () => never[];
    };
    /**
     * You can overwrite the schema used for the default action buttons for edit, cancel, save, delete & archive.
     * @example
     * ```js
     * {'save': {push: true}, 'delete': {color: 'secondary'}}
     * ```
     * @category content
     */
    actionButtonDefaults: {
        type: PropType<{
            edit?: Record<string, any> | undefined;
            cancel?: Record<string, any> | undefined;
            save?: Record<string, any> | undefined;
            delete?: Record<string, any> | undefined;
            archive?: Record<string, any> | undefined;
        }>;
        default: () => {};
    };
    /**
     * The position of the action buttons.
     * @category content
     */
    actionButtonsPosition: {
        type: PropType<"top" | "left" | "bottom" | "right">;
        default: string;
        validator: (prop: 'top' | 'bottom' | 'right' | 'left') => boolean;
    };
    /**
     * The amount of columns the form should have. Each field can set a specific 'span' to be able to span multiple columns.
     * @category style
     */
    columnCount: {
        type: NumberConstructor;
        default: number;
    };
    /**
     * The size of the gap between each field in the form.
     * @category style
     */
    gridGap: {
        type: StringConstructor;
        default: string;
    };
    /**
     * The text used in the UI for the action buttons and some error messages.
     * @example
     * ```js
     * { cancel: 'キャンセル', edit: '編集', save: '保存' }
     * ```
     * @category content
     */
    lang: {
        type: PropType<Partial<Lang>>;
        default: () => {
            archive: string;
            delete: string;
            cancel: string;
            edit: string;
            save: string;
            requiredField: string;
            formValidationError: string;
        };
    };
    /**
     * The mode represents how fields are rendered
     * - `'edit'` — (default) show editable fields based on the schema
     * - `'readonly'` — show each field with `readonly: true`
     * - `'disabled'` — show each field with `disabled: true`
     * - `'raw'` — used to show raw data of your form (for select components, it will show the data label instead of its value)
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category state
     */
    mode: {
        type: PropType<Mode>;
        default: string;
        validator: (prop: Mode) => boolean;
    };
    /**
     * The position of the label in comparison to the field.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category style
     */
    labelPosition: {
        type: PropType<"top" | "left">;
        default: string;
        validator: (prop: 'top' | 'left') => boolean;
    };
    /**
     * Custom styling to be applied to the label of BlitzField. Applied like so `:style="componentStyle"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example 'font-weight: 200;'
     * @category style
     */
    labelStyle: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
        default: null;
    };
    /**
     * Custom classes to be applied to the label of BlitzField. Applied like so `:class="labelClasses"`. Can be an Dynamic Prop.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @example ['text-h6']
     * @category style
     */
    labelClasses: {
        type: PropType<string | Record<string, boolean> | (string | Record<string, boolean>)[]>;
        default: null;
    };
    /**
     * An array with prop names that should be treated as Dynamic Props when passed a function.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    dynamicProps: {
        type: PropType<string[]>;
        default: () => string[];
    };
    /**
     * Set to `true` if the component will take care of showing the `label` and `subLabel`. Both of these props will be passed to the component and not shown in BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalLabels: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    /**
     * Set to true if the component has its own error handling. This makes sure it passes on props like `error` and does nothing with them in the BlitzField.
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    internalErrors: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    /**
     * - 'interaction' — evaluates & shows errors on every interaction or keystroke
     * - 'save' — only evaluates & shows errors when clicking 'save'
     * - 'save-focus' — only evaluates & shows errors when clicking 'save', then focuses the first field with an error
     * - 'never' — never evaluate or show errors
     * - 'always' — always evaluate and show errors, even without user interaction
     *
     * This prop can be set on a BlitzField or on a BlitzForm (in which case it's applied to all fields).
     * @category behavior
     */
    showErrorsOn: {
        type: PropType<ShowErrorsOn>;
        default: string;
        validator: (prop: ShowErrorsOn) => boolean;
    };
    /**
     * The component that should be used to generate the form. Defaults to a div. You can pass the name of a native HTML5 element or Vue component that is globally registered. You can also import the Vue file and directly pass the imported object, just like you would when you add it to a Vue file's components prop.
     * @example 'form'
     * @example 'tr'
     * @example 'MyFormWrapper'
     */
    formComponent: {
        type: PropType<any>;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onDblclick?: ((...args: any[]) => any) | undefined;
    onMousedown?: ((...args: any[]) => any) | undefined;
    onMouseup?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((payload: Record<string, any>, origin?: UpdateModelValueOrigin) => any) | undefined;
    onArchive?: (() => any) | undefined;
    onDelete?: (() => any) | undefined;
    onCancel?: (() => any) | undefined;
    onEdit?: (() => any) | undefined;
    onSave?: ((payload: {
        newData: Record<string, any>;
        oldData: Record<string, any>;
        formData: Record<string, any>;
    }) => any) | undefined;
    onUpdateField?: ((payload: {
        id: string;
        value: any;
        origin?: UpdateModelValueOrigin;
    }) => any) | undefined;
    "onUpdate:mode"?: ((payload: Mode) => any) | undefined;
}, {
    lang: Partial<Lang>;
    mode: Mode;
    modelValue: Record<string, any>;
    id: string;
    dynamicProps: string[];
    internalLabels: boolean | undefined;
    internalErrors: boolean | undefined;
    showErrorsOn: ShowErrorsOn;
    labelPosition: "top" | "left";
    labelStyle: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    labelClasses: string | Record<string, boolean> | (string | Record<string, boolean>)[];
    actionButtons: (Record<string, any> | "archive" | "delete" | "cancel" | "edit" | "save")[];
    actionButtonDefaults: {
        edit?: Record<string, any> | undefined;
        cancel?: Record<string, any> | undefined;
        save?: Record<string, any> | undefined;
        delete?: Record<string, any> | undefined;
        archive?: Record<string, any> | undefined;
    };
    actionButtonsPosition: "top" | "left" | "bottom" | "right";
    columnCount: number;
    gridGap: string;
    formComponent: any;
}>;
export default _default;
