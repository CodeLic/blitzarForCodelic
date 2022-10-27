import { PropType } from 'vue';
declare type BlitzHOption = {
    component: string;
    slot: any;
    events?: Record<string, (...args: any[]) => any>;
    class: string | Record<string, any> | (string | Record<string, any>)[];
    style: string | Record<string, any> | (string | Record<string, any>)[];
    [key: string]: any;
};
/**
 * I'm still thinking about the best syntax for BlitzH
 */
declare const BlitzH: import("vue").DefineComponent<{
    options: {
        type: PropType<string | BlitzHOption | (string | BlitzHOption)[]>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    options: {
        type: PropType<string | BlitzHOption | (string | BlitzHOption)[]>;
        required: true;
    };
}>>, {}>;
export default BlitzH;
