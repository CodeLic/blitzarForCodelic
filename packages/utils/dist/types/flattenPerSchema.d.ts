import { SchemaField } from '@blitzar/types';
/**
 * Flattens an object to be in line with a schema.
 */
export declare function flattenPerSchema(formData: Record<string, any>, schema: SchemaField[]): Record<string, any>;
