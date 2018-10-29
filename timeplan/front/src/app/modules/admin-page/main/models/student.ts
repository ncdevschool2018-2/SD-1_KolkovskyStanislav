export class Student{
  constructor(public _fname: string,
              public _lname:string,
              public _mail:string,
              public _password: string,
              ){

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

}
