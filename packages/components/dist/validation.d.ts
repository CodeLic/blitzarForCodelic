import type { BlitzFieldProps, FormContext, Lang, SchemaField } from '@blitzar/types';
export declare function createRequiredErrorFn(requiredFieldErrorMsg: string): (payload: any) => null | string;
/**
 * @typedef ValidationResultForm
 * @type {{ [fieldId: string]: null | string }}
 */
/**
 * Validates a field data based on its blueprint
 */
export declare function validateFieldPerSchema(payload: any, blueprint: BlitzFieldProps, context: FormContext): null | string;
/**
 * Validates a form data based on its schema
 */
export declare function validateFormPerSchema(formData: Record<string, any>, schema: SchemaField[], lang: Lang): {
    [fieldId in string]: ReturnType<typeof validateFieldPerSchema>;
};
