// This is an automatically generated file. Please do not change its contents manually!
import * as _ from './../../..';
import * as __ from './../../../_';

export function _ChatAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Chat extends _._cuidAspect(_._managedAspect(Base)) {
    declare ChatName?: string | null
    declare ReportName?: string | null
    declare SessionID?: string | null
    declare Messages?: __.Composition.of.many<Message_>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Chat> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Chat>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
export class Chat extends _ChatAspect(__.Entity) {}
Object.defineProperty(Chat, 'name', { value: 'ai.report.chat.Chat' })
Object.defineProperty(Chat, 'is_singular', { value: true })
export class Chat_ extends Array<Chat> {$count?: number}
Object.defineProperty(Chat_, 'name', { value: 'ai.report.chat.Chat' })

export function _MessageAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Message extends _._cuidAspect(_._managedAspect(Base)) {
    declare UUIDChat?: string | null
    declare Comment?: string | null
    /** Canonical user ID */
    declare Sender?: _.User | null
    declare IsAdopted?: boolean | null
    declare chat?: __.Association.to<Chat> | null
    declare chat_ID?: __.Key<string> | null
    declare Reports?: __.Composition.of.many<Report_>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Message> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Message>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
export class Message extends _MessageAspect(__.Entity) {}
Object.defineProperty(Message, 'name', { value: 'ai.report.chat.Message' })
Object.defineProperty(Message, 'is_singular', { value: true })
export class Message_ extends Array<Message> {$count?: number}
Object.defineProperty(Message_, 'name', { value: 'ai.report.chat.Message' })

export function _ReportAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Report extends _._cuidAspect(_._managedAspect(Base)) {
    declare UUIDMessage?: string | null
    declare ProgramGenerated?: boolean | null
    declare PCLGenerated?: boolean | null
    declare DevClass?: string | null
    declare TrKorr?: string | null
    declare JSONPCL?: string | null
    declare Message?: __.Association.to<Message> | null
    declare Message_ID?: __.Key<string> | null
    declare ReportFields?: __.Composition.of.many<ReportField_>
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Report> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<Report>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
export class Report extends _ReportAspect(__.Entity) {}
Object.defineProperty(Report, 'name', { value: 'ai.report.chat.Report' })
Object.defineProperty(Report, 'is_singular', { value: true })
export class Report_ extends Array<Report> {$count?: number}
Object.defineProperty(Report_, 'name', { value: 'ai.report.chat.Report' })

export function _ReportFieldAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class ReportField extends _._cuidAspect(_._managedAspect(Base)) {
    declare UUIDReport?: string | null
    declare Category?: boolean | null
    declare TabFdPos?: boolean | null
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
    declare Report?: __.Association.to<Report> | null
    declare Report_ID?: __.Key<string> | null
    static override readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<ReportField> & typeof _.cuid.keys;
    declare static readonly elements: __.ElementsOf<ReportField>;
    declare static readonly actions: typeof _.managed.actions & typeof _.cuid.actions & Record<never, never>;
  };
}
export class ReportField extends _ReportFieldAspect(__.Entity) {}
Object.defineProperty(ReportField, 'name', { value: 'ai.report.chat.ReportField' })
Object.defineProperty(ReportField, 'is_singular', { value: true })
export class ReportField_ extends Array<ReportField> {$count?: number}
Object.defineProperty(ReportField_, 'name', { value: 'ai.report.chat.ReportField' })

export function _ParameterAspect<TBase extends new (...args: any[]) => object>(Base: TBase) {
  return class Parameter extends Base {
    declare name?: __.Key<string>
    declare Value?: string | null
    declare Description?: string | null
    static readonly kind: 'entity' | 'type' | 'aspect' = 'entity';
    declare static readonly keys: __.KeysOf<Parameter>;
    declare static readonly elements: __.ElementsOf<Parameter>;
    declare static readonly actions: Record<never, never>;
  };
}
export class Parameter extends _ParameterAspect(__.Entity) {}
Object.defineProperty(Parameter, 'name', { value: 'ai.report.chat.Parameter' })
Object.defineProperty(Parameter, 'is_singular', { value: true })
export class Parameter_ extends Array<Parameter> {$count?: number}
Object.defineProperty(Parameter_, 'name', { value: 'ai.report.chat.Parameter' })
