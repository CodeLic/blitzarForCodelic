import { WritableComputedRef } from 'vue';
export declare function propToWriteableComputed<T>(prop: T, setCallback: (newVal: T, oldVal: T) => void): WritableComputedRef<T>;
