// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';

export class zui_zye9012_001 extends cds.Service {
}
export default zui_zye9012_001

export function _SAP__MessageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class SAP__Message extends Base {
    code?: string
    message?: string
    target?: string | null
    additionalTargets?: Array<string>
    transition?: boolean
    numericSeverity?: number
    longtextUrl?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<SAP__Message>;
    declare static readonly elements: __.ElementsOf<SAP__Message>;
    declare static readonly actions: Record<never, never>;
  };
}
export class SAP__Message extends _SAP__MessageAspect(__.Entity) {}
Object.defineProperty(SAP__Message, 'name', { value: 'zui_zye9012_001.SAP__Message' })
Object.defineProperty(SAP__Message, 'is_singular', { value: true })

export function _I_DraftAdministrativeDataAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class I_DraftAdministrativeData extends Base {
    declare DraftUUID?: __.Key<string>
    declare DraftEntityType?: __.Key<string>
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreatedByUser?: string
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangedByUser?: string
    declare DraftAccessType?: string
    declare ProcessingStartDateTime?: __.CdsTimestamp | null
    declare InProcessByUser?: string
    declare DraftIsKeptByUser?: boolean
    declare EnqueueStartDateTime?: __.CdsTimestamp | null
    declare DraftIsCreatedByMe?: boolean
    declare DraftIsLastChangedByMe?: boolean
    declare DraftIsProcessedByMe?: boolean
    declare CreatedByUserDescription?: string
    declare LastChangedByUserDescription?: string
    declare InProcessByUserDescription?: string
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<I_DraftAdministrativeData>;
    declare static readonly elements: __.ElementsOf<I_DraftAdministrativeData>;
    declare static readonly actions: Record<never, never>;
  };
}
export class I_DraftAdministrativeData extends _I_DraftAdministrativeDataAspect(__.Entity) {}
Object.defineProperty(I_DraftAdministrativeData, 'name', { value: 'zui_zye9012_001.I_DraftAdministrativeData' })
Object.defineProperty(I_DraftAdministrativeData, 'is_singular', { value: true })
export class I_DraftAdministrativeData_ extends Array<I_DraftAdministrativeData> {$count?: number}
Object.defineProperty(I_DraftAdministrativeData_, 'name', { value: 'zui_zye9012_001.I_DraftAdministrativeData' })

export function _ZC_ZYE9012_001Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZC_ZYE9012_001 extends Base {
    declare CheckID?: __.Key<string>
    declare CreationDate?: __.CdsDate | null
    declare CreationTime?: __.CdsTime
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreationUser?: string
    declare CreationRicefId?: string
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangeTime?: __.CdsTime
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangeUser?: string
    declare LastChangeRicefId?: string
    declare LocinstLastChangeDateTime?: __.CdsTimestamp | null
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ZC_ZYE9012_001> | null
    declare SiblingEntity_CheckID?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _HeaderField?: __.Composition.of.many<ZC_ZYE9012_005_>
    declare _ItemField?: __.Composition.of.many<ZC_ZYE9012_006_>
    declare _ListField?: __.Composition.of.many<ZC_ZYE9012_004_>
    declare _Selection?: __.Composition.of.many<ZC_ZYE9012_003_>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZC_ZYE9012_001>;
    declare static readonly elements: __.ElementsOf<ZC_ZYE9012_001>;
    declare static readonly actions: {
      Edit:  {
        // positional
        (PreserveChanges: boolean): ZC_ZYE9012_001
        // named
        ({PreserveChanges}: {PreserveChanges: boolean}): ZC_ZYE9012_001
        // metadata (do not use)
        __parameters: {PreserveChanges: boolean}, __returns: ZC_ZYE9012_001
        kind: 'action'
      }
      Resume:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
      Discard:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
      Activate:  {
        // positional
        (): ZC_ZYE9012_001
        // named
        ({}: Record<never, never>): ZC_ZYE9012_001
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: ZC_ZYE9012_001
        kind: 'action'
      }
      Prepare:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
    };
  };
}
export class ZC_ZYE9012_001 extends _ZC_ZYE9012_001Aspect(__.Entity) {}
Object.defineProperty(ZC_ZYE9012_001, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_001' })
Object.defineProperty(ZC_ZYE9012_001, 'is_singular', { value: true })
export class ZC_ZYE9012_001_ extends Array<ZC_ZYE9012_001> {$count?: number}
Object.defineProperty(ZC_ZYE9012_001_, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_001' })

export function _ZC_ZYE9012_003Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZC_ZYE9012_003 extends Base {
    declare ItemCheckId?: __.Key<string>
    declare CheckId?: string
    declare TabFdPos?: string
    declare ToEntity?: string
    declare ToField?: string
    declare ReturnCode?: number
    declare ReturnMessage?: string
    declare CreationDate?: __.CdsDate | null
    declare CreationTime?: __.CdsTime
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreationUser?: string
    declare CreationRicefId?: string
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangeTime?: __.CdsTime
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangeUser?: string
    declare LastChangeRicefId?: string
    declare LocinstLastChangeDateTime?: __.CdsTimestamp | null
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ZC_ZYE9012_003> | null
    declare SiblingEntity_ItemCheckId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<ZC_ZYE9012_001> | null
    declare _Project_CheckID?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZC_ZYE9012_003>;
    declare static readonly elements: __.ElementsOf<ZC_ZYE9012_003>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ZC_ZYE9012_003 extends _ZC_ZYE9012_003Aspect(__.Entity) {}
Object.defineProperty(ZC_ZYE9012_003, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_003' })
Object.defineProperty(ZC_ZYE9012_003, 'is_singular', { value: true })
export class ZC_ZYE9012_003_ extends Array<ZC_ZYE9012_003> {$count?: number}
Object.defineProperty(ZC_ZYE9012_003_, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_003' })

export function _ZC_ZYE9012_004Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZC_ZYE9012_004 extends Base {
    declare ItemCheckId?: __.Key<string>
    declare CheckId?: string
    declare TabFdPos?: string
    declare ToEntity?: string
    declare ToField?: string
    declare ReturnCode?: number
    declare ReturnMessage?: string
    declare CreationDate?: __.CdsDate | null
    declare CreationTime?: __.CdsTime
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreationUser?: string
    declare CreationRicefId?: string
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangeTime?: __.CdsTime
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangeUser?: string
    declare LastChangeRicefId?: string
    declare LocinstLastChangeDateTime?: __.CdsTimestamp | null
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ZC_ZYE9012_004> | null
    declare SiblingEntity_ItemCheckId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<ZC_ZYE9012_001> | null
    declare _Project_CheckID?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZC_ZYE9012_004>;
    declare static readonly elements: __.ElementsOf<ZC_ZYE9012_004>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ZC_ZYE9012_004 extends _ZC_ZYE9012_004Aspect(__.Entity) {}
Object.defineProperty(ZC_ZYE9012_004, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_004' })
Object.defineProperty(ZC_ZYE9012_004, 'is_singular', { value: true })
export class ZC_ZYE9012_004_ extends Array<ZC_ZYE9012_004> {$count?: number}
Object.defineProperty(ZC_ZYE9012_004_, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_004' })

export function _ZC_ZYE9012_005Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZC_ZYE9012_005 extends Base {
    declare ItemCheckId?: __.Key<string>
    declare CheckId?: string
    declare TabFdPos?: string
    declare ToEntity?: string
    declare ToField?: string
    declare ReturnCode?: number
    declare ReturnMessage?: string
    declare CreationDate?: __.CdsDate | null
    declare CreationTime?: __.CdsTime
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreationUser?: string
    declare CreationRicefId?: string
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangeTime?: __.CdsTime
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangeUser?: string
    declare LastChangeRicefId?: string
    declare LocinstLastChangeDateTime?: __.CdsTimestamp | null
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ZC_ZYE9012_005> | null
    declare SiblingEntity_ItemCheckId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<ZC_ZYE9012_001> | null
    declare _Project_CheckID?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZC_ZYE9012_005>;
    declare static readonly elements: __.ElementsOf<ZC_ZYE9012_005>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ZC_ZYE9012_005 extends _ZC_ZYE9012_005Aspect(__.Entity) {}
Object.defineProperty(ZC_ZYE9012_005, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_005' })
Object.defineProperty(ZC_ZYE9012_005, 'is_singular', { value: true })
export class ZC_ZYE9012_005_ extends Array<ZC_ZYE9012_005> {$count?: number}
Object.defineProperty(ZC_ZYE9012_005_, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_005' })

export function _ZC_ZYE9012_006Aspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ZC_ZYE9012_006 extends Base {
    declare ItemCheckId?: __.Key<string>
    declare CheckId?: string
    declare TabFdPos?: string
    declare ToEntity?: string
    declare ToField?: string
    declare ReturnCode?: number
    declare ReturnMessage?: string
    declare CreationDate?: __.CdsDate | null
    declare CreationTime?: __.CdsTime
    declare CreationDateTime?: __.CdsTimestamp | null
    declare CreationUser?: string
    declare CreationRicefId?: string
    declare LastChangeDate?: __.CdsDate | null
    declare LastChangeTime?: __.CdsTime
    declare LastChangeDateTime?: __.CdsTimestamp | null
    declare LastChangeUser?: string
    declare LastChangeRicefId?: string
    declare LocinstLastChangeDateTime?: __.CdsTimestamp | null
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ZC_ZYE9012_006> | null
    declare SiblingEntity_ItemCheckId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<ZC_ZYE9012_001> | null
    declare _Project_CheckID?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ZC_ZYE9012_006>;
    declare static readonly elements: __.ElementsOf<ZC_ZYE9012_006>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ZC_ZYE9012_006 extends _ZC_ZYE9012_006Aspect(__.Entity) {}
Object.defineProperty(ZC_ZYE9012_006, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_006' })
Object.defineProperty(ZC_ZYE9012_006, 'is_singular', { value: true })
export class ZC_ZYE9012_006_ extends Array<ZC_ZYE9012_006> {$count?: number}
Object.defineProperty(ZC_ZYE9012_006_, 'name', { value: 'zui_zye9012_001.ZC_ZYE9012_006' })
