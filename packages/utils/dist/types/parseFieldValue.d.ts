import { BlitzFieldPropsEvaluated } from '@blitzar/types';
/**
 * takes a value and returns the parsed value based on a BlitzField blueprint provided.
 *
 * @param value any value. In our example blueprint `1` should be returned as `'one'`
 * @param blueprint a blueprint like eg.
 *     - `{options: [{value: 1, label: 'one'}]}` out of which the "label" will be retrieved.
 *     - Besides `options` you can also have `prefix` and `suffix`.
 *     - When `Date` and the value is a `Date` type, it will be printed as toLocaleDateString().
 *     - When `number` it will receive thousand separators and always returns the number as `string` !!
 * @returns the parsed value
 */
export declare function parseFieldValue(value: any, blueprint: BlitzFieldPropsEvaluated): string;
