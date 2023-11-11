/* tslint:disable */
/* eslint-disable */
/**
*/
export class Counter {
  free(): void;
/**
* @returns {Counter}
*/
  static new(): Counter;
/**
* @returns {number}
*/
  get_value(): number;
/**
*/
  increment(): void;
/**
*/
  decrement(): void;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_counter_free: (a: number) => void;
  readonly counter_new: () => number;
  readonly counter_get_value: (a: number) => number;
  readonly counter_increment: (a: number) => void;
  readonly counter_decrement: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
