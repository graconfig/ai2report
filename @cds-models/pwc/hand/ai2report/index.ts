// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../..';
import * as __ from './../../../_';

export function _ChatAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Chat extends _._cuidAspect(_._managedAspect(Base)) {
    declare title?: string | null
    declare records?: __.Composition.of.many<Records>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Chat> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Chat>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
/** Represents a chat session containing multiple messages. */
export class Chat extends _ChatAspect(__.Entity) {}
Object.defineProperty(Chat, 'name', { value: 'pwc.hand.ai2report.Chats' })
Object.defineProperty(Chat, 'is_singular', { value: true })
/** Represents a chat session containing multiple messages. */
export class Chats extends Array<Chat> {$count?: number}
Object.defineProperty(Chats, 'name', { value: 'pwc.hand.ai2report.Chats' })

export function _RecordAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Record extends _._cuidAspect(_._managedAspect(Base)) {
    declare chat?: __.Association.to<Chat> | null
    declare chat_ID?: __.Key<string> | null
    declare role?: string | null
    declare prompt?: string | null
    declare content?: string | null
    declare isAdopted?: boolean | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Record> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Record>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
/** Represents a record in a chat. */
export class Record extends _RecordAspect(__.Entity) {}
Object.defineProperty(Record, 'name', { value: 'pwc.hand.ai2report.Records' })
Object.defineProperty(Record, 'is_singular', { value: true })
/** Represents a record in a chat. */
export class Records extends Array<Record> {$count?: number}
Object.defineProperty(Records, 'name', { value: 'pwc.hand.ai2report.Records' })

export function _ReportAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Report extends _._cuidAspect(_._managedAspect(Base)) {
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
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Report> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Report>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
/** Represents a report generated for a message. */
export class Report extends _ReportAspect(__.Entity) {}
Object.defineProperty(Report, 'name', { value: 'pwc.hand.ai2report.Reports' })
Object.defineProperty(Report, 'is_singular', { value: true })
/** Represents a report generated for a message. */
export class Reports extends Array<Report> {$count?: number}
Object.defineProperty(Reports, 'name', { value: 'pwc.hand.ai2report.Reports' })

export function _ReportFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ReportField extends _._cuidAspect(_._managedAspect(Base)) {
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
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ReportField> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<ReportField>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
/** Represents a field within a report, providing metadata and behavior settings. */
export class ReportField extends _ReportFieldAspect(__.Entity) {}
Object.defineProperty(ReportField, 'name', { value: 'pwc.hand.ai2report.ReportFields' })
Object.defineProperty(ReportField, 'is_singular', { value: true })
/** Represents a field within a report, providing metadata and behavior settings. */
export class ReportFields extends Array<ReportField> {$count?: number}
Object.defineProperty(ReportFields, 'name', { value: 'pwc.hand.ai2report.ReportFields' })

export function _ParameterAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Parameter extends _._managedAspect(Base) {
    declare name?: __.Key<string>
    declare value?: string | null
    declare description?: string | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Parameter>;
    declare static readonly elements: __.ElementsOf<Parameter>;
    declare static readonly actions: typeof _.managed.actions & Record<never, never>;
  };
}
/** Represents a parameter with a key-value pair and its description. */
export class Parameter extends _ParameterAspect(__.Entity) {}
Object.defineProperty(Parameter, 'name', { value: 'pwc.hand.ai2report.Parameters' })
Object.defineProperty(Parameter, 'is_singular', { value: true })
/** Represents a parameter with a key-value pair and its description. */
export class Parameters extends Array<Parameter> {$count?: number}
Object.defineProperty(Parameters, 'name', { value: 'pwc.hand.ai2report.Parameters' })

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
Object.defineProperty(SingleCheck, 'name', { value: 'pwc.hand.ai2report.SingleCheck' })
Object.defineProperty(SingleCheck, 'is_singular', { value: true })
export class SingleCheck_ extends Array<SingleCheck> {$count?: number}
Object.defineProperty(SingleCheck_, 'name', { value: 'pwc.hand.ai2report.SingleCheck' })
