import { flattenObjectProps } from 'flatten-anything';
import { isFullString, isArray, isPlainObject, isDate, isNumber } from 'is-what';
import { commafy } from 'commafy-anything';

/**
 * Flattens an object to be in line with a schema.
 */
function flattenPerSchema(formData, schema) {
    const schemaNestedIds = schema
        .map((blueprint) => blueprint.id)
        .filter((id) => isFullString(id) && id.includes('.'));
    return flattenObjectProps(formData, schemaNestedIds);
}

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
function parseFieldValue(value, blueprint) {
    if (!blueprint)
        return value;
    const { options, multiple, suffix, prefix, slot, slots, component } = blueprint;
    const valueArray = !isArray(value) ? [value] : value;
    const newValue = valueArray.map((val) => {
        let newVal = val;
        // special handling for HTML5 'select' fields:
        const isHtml5SelectField = component === 'select' && (isArray(slot) || isArray(slots?.default));
        const selectOptions = isHtml5SelectField ? slot || slots?.default : options;
        if (isArray(selectOptions)) {
            if (isPlainObject(value)) {
                newVal = multiple
                    ? Object.values(value)
                        .filter((v) => v)
                        .join(', ')
                    : value.label;
            }
            else {
                if (isPlainObject(val)) {
                    newVal = val.label;
                }
                else {
                    const option = selectOptions.find((o) => o.value === val) || {};
                    newVal = option.label || option.slot || option.slots?.default || val;
                }
            }
        }
        if (isDate(value))
            newVal = value.toLocaleDateString();
        if (isNumber(value))
            newVal = commafy(newVal);
        if (suffix)
            newVal = `${newVal}${suffix}`;
        if (prefix)
            newVal = `${prefix}${newVal}`;
        return newVal;
    });
    return newValue.join(', ');
}

export { flattenPerSchema, parseFieldValue };
