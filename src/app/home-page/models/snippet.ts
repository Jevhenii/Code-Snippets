import {Languages} from './temp.lenguages.enum';

export class Snippet {
  private _title: string;
  private _descr: string;
  private _code: string;
  private _lang: Languages;

  constructor(title: string, lang: Languages, descr: string, code: string) {
    this._title = title;
    this._descr = descr;
    this._code = code;
    this._lang = lang;
  }
  get title(): string {
    return this._title;
  }
  get descr(): string {
    return this._descr;
  }
  get code(): string {
    return this._code;
  }
  get lang(): Languages {
    return this._lang;
  }
}
