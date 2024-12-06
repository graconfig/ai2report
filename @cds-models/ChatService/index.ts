// This is an automatically generated file. Please do not change its contents manually!
import cds from '@sap/cds'
import * as _ from './..';
import * as __ from './../_';

export class ChatService extends cds.Service {
  declare newChat: typeof newChat
}
export default ChatService

export function _ChatAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Chat extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare title?: string | null
    declare records?: __.Composition.of.many<Records>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Chat>;
    declare static readonly elements: __.ElementsOf<Chat>;
    declare static readonly actions: {
      newRecord:  {
        // positional
        (content: string | null): Records
        // named
        ({content}: {content?: string | null}): Records
        // metadata (do not use)
        __parameters: {content?: string | null}, __returns: Records
        kind: 'action'
      }
    };
  };
}
/** Represents a chat session containing multiple messages. */
export class Chat extends _ChatAspect(__.Entity) {}
Object.defineProperty(Chat, 'name', { value: 'ChatService.Chats' })
Object.defineProperty(Chat, 'is_singular', { value: true })
/** Represents a chat session containing multiple messages. */
export class Chats extends Array<Chat> {$count?: number}
Object.defineProperty(Chats, 'name', { value: 'ChatService.Chats' })

export function _RecordAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Record extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare chat?: __.Association.to<Chat> | null
    declare chat_ID?: __.Key<string> | null
    declare role?: string | null
    declare prompt?: string | null
    declare content?: string | null
    declare isAdopted?: boolean | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Record>;
    declare static readonly elements: __.ElementsOf<Record>;
    declare static readonly actions: {
      adopt:  {
        // positional
        (): Reports
        // named
        ({}: Record<never, never>): Reports
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: Reports
        kind: 'action'
      }
    };
  };
}
/** Represents a record in a chat. */
export class Record extends _RecordAspect(__.Entity) {}
Object.defineProperty(Record, 'name', { value: 'ChatService.Records' })
Object.defineProperty(Record, 'is_singular', { value: true })
/** Represents a record in a chat. */
export class Records extends Array<Record> {$count?: number}
Object.defineProperty(Records, 'name', { value: 'ChatService.Records' })

export function _ReportAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Report extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare record?: __.Association.to<Record> | null
    declare record_ID?: __.Key<string> | null
    declare isProgramGenerated?: boolean | null
    declare isPCLGenerated?: boolean | null
    declare ProjectId?: string | null
    declare Text?: string | null
    declare DevClass?: string | null
    declare TrKorr?: string | null
    declare jsonPCL?: string | null
    declare fields?: __.Composition.of.many<ReportFields>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Report>;
    declare static readonly elements: __.ElementsOf<Report>;
    declare static readonly actions: {
      generateProgram:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
      generatePCL:  {
        // positional
        (): any
        // named
        ({}: Record<never, never>): any
        // metadata (do not use)
        __parameters: Record<never, never>, __returns: any
        kind: 'action'
      }
      verify:  {
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
/** Represents a report generated for a message. */
export class Report extends _ReportAspect(__.Entity) {static drafts: __.DraftOf<Report>}
Object.defineProperty(Report, 'name', { value: 'ChatService.Reports' })
Object.defineProperty(Report, 'is_singular', { value: true })
/** Represents a report generated for a message. */
export class Reports extends Array<Report> {static drafts: __.DraftsOf<Report>
$count?: number}
Object.defineProperty(Reports, 'name', { value: 'ChatService.Reports' })

export function _ReportFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ReportField extends Base {
    declare ID?: __.Key<string>
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare report?: __.Association.to<Report> | null
    declare report_ID?: __.Key<string> | null
    declare category?: string | null
    declare TabFdPos?: number | null
    declare ParamText?: string | null
    declare FieldType?: string | null
    declare Display?: string | null
    declare Enterable?: string | null
    declare Obligatory?: string | null
    declare ValueHelp?: string | null
    declare ToEntityText?: string | null
    declare ToEntity?: string | null
    declare ToFieldText?: string | null
    declare ToField?: string | null
    declare Seq?: number | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ReportField>;
    declare static readonly elements: __.ElementsOf<ReportField>;
    declare static readonly actions: Record<never, never>;
  };
}
/** Represents a field within a report, providing metadata and behavior settings. */
export class ReportField extends _ReportFieldAspect(__.Entity) {static drafts: __.DraftOf<ReportField>}
Object.defineProperty(ReportField, 'name', { value: 'ChatService.ReportFields' })
Object.defineProperty(ReportField, 'is_singular', { value: true })
/** Represents a field within a report, providing metadata and behavior settings. */
export class ReportFields extends Array<ReportField> {static drafts: __.DraftsOf<ReportField>
$count?: number}
Object.defineProperty(ReportFields, 'name', { value: 'ChatService.ReportFields' })

export function _ParameterAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Parameter extends Base {
    declare createdAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare createdBy?: _.User | null
    declare modifiedAt?: __.CdsTimestamp | null
    /** Canonical user ID */
    declare modifiedBy?: _.User | null
    declare name?: __.Key<string>
    declare value?: string | null
    declare description?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Parameter>;
    declare static readonly elements: __.ElementsOf<Parameter>;
    declare static readonly actions: Record<never, never>;
  };
}
/** Represents a parameter with a key-value pair and its description. */
export class Parameter extends _ParameterAspect(__.Entity) {static drafts: __.DraftOf<Parameter>}
Object.defineProperty(Parameter, 'name', { value: 'ChatService.Parameters' })
Object.defineProperty(Parameter, 'is_singular', { value: true })
/** Represents a parameter with a key-value pair and its description. */
export class Parameters extends Array<Parameter> {static drafts: __.DraftsOf<Parameter>
$count?: number}
Object.defineProperty(Parameters, 'name', { value: 'ChatService.Parameters' })

export function _SingleCheckAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class SingleCheck extends Base {
    declare check?: __.Key<string>
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<SingleCheck>;
    declare static readonly elements: __.ElementsOf<SingleCheck>;
    declare static readonly actions: Record<never, never>;
  };
}
export class SingleCheck extends _SingleCheckAspect(__.Entity) {}
Object.defineProperty(SingleCheck, 'name', { value: 'ChatService.SingleCheck' })
Object.defineProperty(SingleCheck, 'is_singular', { value: true })
export class SingleCheck_ extends Array<SingleCheck> {$count?: number}
Object.defineProperty(SingleCheck_, 'name', { value: 'ChatService.SingleCheck' })


export declare const newChat:  {
  // positional
  (): Promise<Chat | null> | Chat | null
  // named
  ({}: Record<never, never>): Promise<Chat | null> | Chat | null
  // metadata (do not use)
  __parameters: Record<never, never>, __returns: Promise<Chat | null> | Chat | null
  kind: 'action'
}