import { ExtractPropTypes, ExtractDefaultPropTypes, Ref, ComputedRef } from 'vue';
import { O } from 'ts-toolbelt';
export declare type ExternalProps<T extends Record<string | number | symbol, any>> = O.Optional<ExtractPropTypes<T>, keyof ExtractDefaultPropTypes<T>>;
export declare type AnyRef<T> = Ref<T> | ComputedRef<T>;
