export class Teacher{
  constructor(public _fname:string,
              public _lname:string,
              public _mail:string,
              public _password:string,
              public _level:string,
              public _subject:string){}


  get level(): string {
    return this._level;
  }

  set level(value: string) {
    this._level = value;
  }

  get fname(): string {
    return this._fname;
  }

  set fname(value: string) {
    this._fname = value;
  }

  get lname(): string {
    return this._lname;
  }

  set lname(value: string) {
    this._lname = value;
  }

  get mail(): string {
    return this._mail;
  }

  set mail(value: string) {
    this._mail = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get subject(): string {
    return this._subject;
  }

  set subject(value: string) {
    this._subject = value;
  }
}
