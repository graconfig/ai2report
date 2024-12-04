// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';

export class zui_zye9009_001 extends cds.Service {
}
export default zui_zye9009_001

export function _ZI_ZYE9009_001Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZI_ZYE9009_001 extends Base {
    declare projectid?: __.Key<string>
    declare projecttype?: __.Key<string>
    declare message?: string
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZI_ZYE9009_001>;
    declare static readonly elements: __.ElementsOf<ZI_ZYE9009_001>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ZI_ZYE9009_001 extends _ZI_ZYE9009_001Aspect(__.Entity) {}
Object.defineProperty(ZI_ZYE9009_001, 'name', { value: 'zui_zye9009_001.ZI_ZYE9009_001' })
Object.defineProperty(ZI_ZYE9009_001, 'is_singular', { value: true })
export class ZI_ZYE9009_001_ extends Array<ZI_ZYE9009_001> {$count?: number}
Object.defineProperty(ZI_ZYE9009_001_, 'name', { value: 'zui_zye9009_001.ZI_ZYE9009_001' })
