// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as __ from './../_';

export class zui_zye9001_001 extends cds.Service {
}
export default zui_zye9001_001

export function _ProjectCommonControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProjectCommonControl extends Base {
    ProjectType?: number
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<ProjectCommonControl>;
    declare static readonly elements: __.ElementsOf<ProjectCommonControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ProjectCommonControl extends _ProjectCommonControlAspect(__.Entity) {}
Object.defineProperty(ProjectCommonControl, 'name', { value: 'zui_zye9001_001.ProjectCommonControl' })
Object.defineProperty(ProjectCommonControl, 'is_singular', { value: true })

export function _ProjectCbAControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProjectCbAControl extends Base {
    _HeaderField?: boolean
    _ItemField?: boolean
    _ListField?: boolean
    _Selection?: boolean
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<ProjectCbAControl>;
    declare static readonly elements: __.ElementsOf<ProjectCbAControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ProjectCbAControl extends _ProjectCbAControlAspect(__.Entity) {}
Object.defineProperty(ProjectCbAControl, 'name', { value: 'zui_zye9001_001.ProjectCbAControl' })
Object.defineProperty(ProjectCbAControl, 'is_singular', { value: true })

export function _CDSSourceOperationControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CDSSourceOperationControl extends Base {
    activateCDS?: boolean
    genCDSSource?: boolean
    saveCDSSource?: boolean
    triggerValidateCDS?: boolean
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<CDSSourceOperationControl>;
    declare static readonly elements: __.ElementsOf<CDSSourceOperationControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class CDSSourceOperationControl extends _CDSSourceOperationControlAspect(__.Entity) {}
Object.defineProperty(CDSSourceOperationControl, 'name', { value: 'zui_zye9001_001.CDSSourceOperationControl' })
Object.defineProperty(CDSSourceOperationControl, 'is_singular', { value: true })

export function _ProjectOperationControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProjectOperationControl extends Base {
    Edit?: boolean
    generateService?: boolean
    requestCDSEntry?: boolean
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<ProjectOperationControl>;
    declare static readonly elements: __.ElementsOf<ProjectOperationControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ProjectOperationControl extends _ProjectOperationControlAspect(__.Entity) {}
Object.defineProperty(ProjectOperationControl, 'name', { value: 'zui_zye9001_001.ProjectOperationControl' })
Object.defineProperty(ProjectOperationControl, 'is_singular', { value: true })

export function _ProjectCommonOperationControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProjectCommonOperationControl extends Base {
    Edit?: boolean
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<ProjectCommonOperationControl>;
    declare static readonly elements: __.ElementsOf<ProjectCommonOperationControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ProjectCommonOperationControl extends _ProjectCommonOperationControlAspect(__.Entity) {}
Object.defineProperty(ProjectCommonOperationControl, 'name', { value: 'zui_zye9001_001.ProjectCommonOperationControl' })
Object.defineProperty(ProjectCommonOperationControl, 'is_singular', { value: true })

export function _EntityControlAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class EntityControl extends Base {
    Updatable?: boolean
    Deletable?: boolean
    static readonly kind: 'entity' | 'type' | 'aspect' = 'type';
    declare static readonly keys: __.KeysOf<EntityControl>;
    declare static readonly elements: __.ElementsOf<EntityControl>;
    declare static readonly actions: Record<never, never>;
  };
}
export class EntityControl extends _EntityControlAspect(__.Entity) {}
Object.defineProperty(EntityControl, 'name', { value: 'zui_zye9001_001.EntityControl' })
Object.defineProperty(EntityControl, 'is_singular', { value: true })

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
Object.defineProperty(SAP__Message, 'name', { value: 'zui_zye9001_001.SAP__Message' })
Object.defineProperty(SAP__Message, 'is_singular', { value: true })

export function _CDSSourceAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CDSSource extends Base {
    declare ProjectId?: __.Key<string>
    declare CDSType?: __.Key<string>
    declare TypeText?: string
    declare CDSName?: string
    declare CDSDescription?: string
    declare CDSSource?: string
    declare CDSGenerated?: string
    declare CDSStatusCrit?: number
    declare CDSStatusText?: string
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
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare __OperationControl_activateCDS?: boolean
    declare __OperationControl_genCDSSource?: boolean
    declare __OperationControl_saveCDSSource?: boolean
    declare __OperationControl_triggerValidateCDS?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<CDSSource> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_CDSType?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<Project> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CDSSource>;
    declare static readonly elements: __.ElementsOf<CDSSource>;
    declare static readonly actions: {
      saveCDSSource:  {
        // positional
        (): CDSSource
        // named
        ({}: Record<never, never>): CDSSource
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: CDSSource
        kind: 'action'
      }
      genCDSSource:  {
        // positional
        (): CDSSource
        // named
        ({}: Record<never, never>): CDSSource
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: CDSSource
        kind: 'action'
      }
      triggerValidateCDS:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
      activateCDS:  {
        // positional
        (): CDSSource
        // named
        ({}: Record<never, never>): CDSSource
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: CDSSource
        kind: 'action'
      }
    };
  };
}
export class CDSSource extends _CDSSourceAspect(__.Entity) {}
Object.defineProperty(CDSSource, 'name', { value: 'zui_zye9001_001.CDSSource' })
Object.defineProperty(CDSSource, 'is_singular', { value: true })
export class CDSSource_ extends Array<CDSSource> {$count?: number}
Object.defineProperty(CDSSource_, 'name', { value: 'zui_zye9001_001.CDSSource' })

export function _CDSTypeAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class CDSType extends Base {
    declare value_position?: __.Key<string>
    declare value_low?: string
    declare text?: string
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<CDSType>;
    declare static readonly elements: __.ElementsOf<CDSType>;
    declare static readonly actions: Record<never, never>;
  };
}
export class CDSType extends _CDSTypeAspect(__.Entity) {}
Object.defineProperty(CDSType, 'name', { value: 'zui_zye9001_001.CDSType' })
Object.defineProperty(CDSType, 'is_singular', { value: true })
export class CDSType_ extends Array<CDSType> {$count?: number}
Object.defineProperty(CDSType_, 'name', { value: 'zui_zye9001_001.CDSType' })

export function _HeaderFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class HeaderField extends Base {
    declare ProjectId?: __.Key<string>
    declare TabFdPos?: __.Key<string>
    declare DummyField1?: string
    declare ParamText?: string
    declare DummyField11?: string
    declare DummyField12?: string
    declare DummyField13?: string
    declare DummyField14?: string
    declare DummyField15?: string
    declare DummyField16?: string
    declare DummyField17?: string
    declare DummyField18?: string
    declare DummyField19?: string
    declare FieldType?: string
    declare DummyField21?: string
    declare DummyField22?: string
    declare DummyField23?: string
    declare DummyField24?: string
    declare DummyField25?: string
    declare DummyField26?: string
    declare DummyField67?: string
    declare Display?: string
    declare DummyField31?: string
    declare Enterable?: string
    declare DummyField41?: string
    declare Obligatory?: string
    declare DummyField51?: string
    declare ValueHelp?: string
    declare DummyField61?: string
    declare ToEntityText?: string
    declare DummyField71?: string
    declare DummyField72?: string
    declare DummyField73?: string
    declare DummyField74?: string
    declare DummyField75?: string
    declare ToEntity?: string
    declare DummyField81?: string
    declare DummyField82?: string
    declare DummyField83?: string
    declare DummyField84?: string
    declare DummyField85?: string
    declare ToFieldText?: string
    declare DummyField91?: string
    declare DummyField92?: string
    declare DummyField93?: string
    declare DummyField94?: string
    declare DummyField95?: string
    declare ToField?: string
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
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<HeaderField> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_TabFdPos?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<Project> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<HeaderField>;
    declare static readonly elements: __.ElementsOf<HeaderField>;
    declare static readonly actions: Record<never, never>;
  };
}
export class HeaderField extends _HeaderFieldAspect(__.Entity) {}
Object.defineProperty(HeaderField, 'name', { value: 'zui_zye9001_001.HeaderField' })
Object.defineProperty(HeaderField, 'is_singular', { value: true })
export class HeaderField_ extends Array<HeaderField> {$count?: number}
Object.defineProperty(HeaderField_, 'name', { value: 'zui_zye9001_001.HeaderField' })

export function _ItemFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ItemField extends Base {
    declare ProjectId?: __.Key<string>
    declare TabFdPos?: __.Key<string>
    declare DummyField1?: string
    declare ParamText?: string
    declare DummyField11?: string
    declare DummyField12?: string
    declare DummyField13?: string
    declare DummyField14?: string
    declare DummyField15?: string
    declare DummyField16?: string
    declare DummyField17?: string
    declare DummyField18?: string
    declare DummyField19?: string
    declare FieldType?: string
    declare DummyField21?: string
    declare DummyField22?: string
    declare DummyField23?: string
    declare DummyField24?: string
    declare DummyField25?: string
    declare DummyField26?: string
    declare DummyField67?: string
    declare Display?: string
    declare DummyField31?: string
    declare Enterable?: string
    declare DummyField41?: string
    declare Obligatory?: string
    declare DummyField51?: string
    declare ValueHelp?: string
    declare DummyField61?: string
    declare ToEntityText?: string
    declare DummyField71?: string
    declare DummyField72?: string
    declare DummyField73?: string
    declare DummyField74?: string
    declare DummyField75?: string
    declare ToEntity?: string
    declare DummyField81?: string
    declare DummyField82?: string
    declare DummyField83?: string
    declare DummyField84?: string
    declare DummyField85?: string
    declare ToFieldText?: string
    declare DummyField91?: string
    declare DummyField92?: string
    declare DummyField93?: string
    declare DummyField94?: string
    declare DummyField95?: string
    declare ToField?: string
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
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ItemField> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_TabFdPos?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<Project> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ItemField>;
    declare static readonly elements: __.ElementsOf<ItemField>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ItemField extends _ItemFieldAspect(__.Entity) {}
Object.defineProperty(ItemField, 'name', { value: 'zui_zye9001_001.ItemField' })
Object.defineProperty(ItemField, 'is_singular', { value: true })
export class ItemField_ extends Array<ItemField> {$count?: number}
Object.defineProperty(ItemField_, 'name', { value: 'zui_zye9001_001.ItemField' })

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
Object.defineProperty(I_DraftAdministrativeData, 'name', { value: 'zui_zye9001_001.I_DraftAdministrativeData' })
Object.defineProperty(I_DraftAdministrativeData, 'is_singular', { value: true })
export class I_DraftAdministrativeData_ extends Array<I_DraftAdministrativeData> {$count?: number}
Object.defineProperty(I_DraftAdministrativeData_, 'name', { value: 'zui_zye9001_001.I_DraftAdministrativeData' })

export function _ListFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ListField extends Base {
    declare ProjectId?: __.Key<string>
    declare TabFdPos?: __.Key<string>
    declare ParamText?: string
    declare FieldType?: string
    declare Display?: string
    declare Enterable?: string
    declare Obligatory?: string
    declare ValueHelp?: string
    declare ToEntityText?: string
    declare ToEntity?: string
    declare ToFieldText?: string
    declare ToField?: string
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
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ListField> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_TabFdPos?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<Project> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ListField>;
    declare static readonly elements: __.ElementsOf<ListField>;
    declare static readonly actions: Record<never, never>;
  };
}
export class ListField extends _ListFieldAspect(__.Entity) {}
Object.defineProperty(ListField, 'name', { value: 'zui_zye9001_001.ListField' })
Object.defineProperty(ListField, 'is_singular', { value: true })
export class ListField_ extends Array<ListField> {$count?: number}
Object.defineProperty(ListField_, 'name', { value: 'zui_zye9001_001.ListField' })

export function _LogAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Log extends Base {
    declare ProjectId?: __.Key<string>
    declare LogNumber?: __.Key<number>
    declare MessageType?: string
    declare Criticality?: number
    declare Message?: string
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<Log> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_LogNumber?: __.Key<number> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<ProjectCommon> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Log>;
    declare static readonly elements: __.ElementsOf<Log>;
    declare static readonly actions: Record<never, never>;
  };
}
export class Log extends _LogAspect(__.Entity) {}
Object.defineProperty(Log, 'name', { value: 'zui_zye9001_001.Log' })
Object.defineProperty(Log, 'is_singular', { value: true })
export class Log_ extends Array<Log> {$count?: number}
Object.defineProperty(Log_, 'name', { value: 'zui_zye9001_001.Log' })

export function _ProjectAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Project extends Base {
    declare ProjectId?: __.Key<string>
    declare Text?: string
    declare SrvdName?: string
    declare SrvdDescription?: string
    declare SrvbName?: string
    declare SrvbDescription?: string
    declare SrvdStatusCrit?: number
    declare SrvdGenerated?: string
    declare SrvdStatusText?: string
    declare DevClass?: string
    declare Trkorr?: string
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
    declare __CreateByAssociationControl__HeaderField?: boolean
    declare __CreateByAssociationControl__ItemField?: boolean
    declare __CreateByAssociationControl__ListField?: boolean
    declare __CreateByAssociationControl__Selection?: boolean
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare __OperationControl_Edit?: boolean
    declare __OperationControl_generateService?: boolean
    declare __OperationControl_requestCDSEntry?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<Project> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _CDSSource?: __.Composition.of.many<CDSSource_>
    declare _HeaderField?: __.Composition.of.many<HeaderField_>
    declare _ItemField?: __.Composition.of.many<ItemField_>
    declare _ListField?: __.Composition.of.many<ListField_>
    declare _Selection?: __.Composition.of.many<Selection_>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Project>;
    declare static readonly elements: __.ElementsOf<Project>;
    declare static readonly actions: {
      Edit:  {
        // positional
        (PreserveChanges: boolean): Project
        // named
        ({PreserveChanges}: {PreserveChanges: boolean}): Project
        // metadata (do not use)
        __parameters: {PreserveChanges: boolean}, __returns: Project
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
        (): Project
        // named
        ({}: Record<never, never>): Project
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: Project
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
      generateService:  {
        // positional
        (): Project
        // named
        ({}: Record<never, never>): Project
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: Project
        kind: 'action'
      }
      requestCDSEntry:  {
        // positional
        (): Project
        // named
        ({}: Record<never, never>): Project
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: Project
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
export class Project extends _ProjectAspect(__.Entity) {}
Object.defineProperty(Project, 'name', { value: 'zui_zye9001_001.Project' })
Object.defineProperty(Project, 'is_singular', { value: true })
export class Project_ extends Array<Project> {$count?: number}
Object.defineProperty(Project_, 'name', { value: 'zui_zye9001_001.Project' })

export function _ProjectCommonAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ProjectCommon extends Base {
    declare ProjectId?: __.Key<string>
    declare ProjectType?: string
    declare TypeText?: string
    declare Text?: string
    declare TableName?: string
    declare HasDraftEntity?: boolean
    declare DraftEntityCreationDateTime?: __.CdsTimestamp | null
    declare DraftEntityLastChangeDateTime?: __.CdsTimestamp | null
    declare HasActiveEntity?: boolean
    declare IsActiveEntity?: __.Key<boolean>
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare __FieldControl_ProjectType?: number
    declare __OperationControl_Edit?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<ProjectCommon> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Log?: __.Composition.of.many<Log_>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ProjectCommon>;
    declare static readonly elements: __.ElementsOf<ProjectCommon>;
    declare static readonly actions: {
      Edit:  {
        // positional
        (PreserveChanges: boolean): ProjectCommon
        // named
        ({PreserveChanges}: {PreserveChanges: boolean}): ProjectCommon
        // metadata (do not use)
        __parameters: {PreserveChanges: boolean}, __returns: ProjectCommon
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
        (): ProjectCommon
        // named
        ({}: Record<never, never>): ProjectCommon
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: ProjectCommon
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
export class ProjectCommon extends _ProjectCommonAspect(__.Entity) {}
Object.defineProperty(ProjectCommon, 'name', { value: 'zui_zye9001_001.ProjectCommon' })
Object.defineProperty(ProjectCommon, 'is_singular', { value: true })
export class ProjectCommon_ extends Array<ProjectCommon> {$count?: number}
Object.defineProperty(ProjectCommon_, 'name', { value: 'zui_zye9001_001.ProjectCommon' })

export function _SelectionAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Selection extends Base {
    declare ProjectId?: __.Key<string>
    declare TabFdPos?: __.Key<string>
    declare ParamText?: string
    declare FieldType?: string
    declare Display?: string
    declare Enterable?: string
    declare Obligatory?: string
    declare ValueHelp?: string
    declare ToEntityText?: string
    declare ToEntity?: string
    declare ToFieldText?: string
    declare ToField?: string
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
    declare __EntityControl_Updatable?: boolean
    declare __EntityControl_Deletable?: boolean
    declare SAP__Messages?: Array<SAP__Message>
    declare DraftAdministrativeData?: __.Association.to<I_DraftAdministrativeData> | null
    declare DraftAdministrativeData_DraftUUID?: __.Key<string> | null
    declare DraftAdministrativeData_DraftEntityType?: __.Key<string> | null
    declare SiblingEntity?: __.Association.to<Selection> | null
    declare SiblingEntity_ProjectId?: __.Key<string> | null
    declare SiblingEntity_TabFdPos?: __.Key<string> | null
    declare SiblingEntity_IsActiveEntity?: __.Key<boolean> | null
    declare _Project?: __.Association.to<Project> | null
    declare _Project_ProjectId?: __.Key<string> | null
    declare _Project_IsActiveEntity?: __.Key<boolean> | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Selection>;
    declare static readonly elements: __.ElementsOf<Selection>;
    declare static readonly actions: Record<never, never>;
  };
}
export class Selection extends _SelectionAspect(__.Entity) {}
Object.defineProperty(Selection, 'name', { value: 'zui_zye9001_001.Selection' })
Object.defineProperty(Selection, 'is_singular', { value: true })
export class Selection_ extends Array<Selection> {$count?: number}
Object.defineProperty(Selection_, 'name', { value: 'zui_zye9001_001.Selection' })
