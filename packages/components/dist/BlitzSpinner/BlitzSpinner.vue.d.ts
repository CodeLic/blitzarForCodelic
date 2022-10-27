/**
 * Color of the spinner can be applied via CSS.
 */
declare const _default: import("vue").DefineComponent<{
    /**
     * The size of the spinner
     * controls the width and height
     * e.g `xs, sm, md, lg, xl, 16, 24 etc`
     */
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    thickness: {
        type: NumberConstructor;
        default: number;
    };
}, unknown, unknown, {
    cSize(): string | number;
}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    /**
     * The size of the spinner
     * controls the width and height
     * e.g `xs, sm, md, lg, xl, 16, 24 etc`
     */
    size: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    thickness: {
        type: NumberConstructor;
        default: number;
    };
}>>, {
    size: string | number;
    thickness: number;
}>;
export default _default;
