export class Subject{

  public _idteacher:number;
  public _name:string;

  constructor(){}


  set idteacher(value: number) {
    this._idteacher = value;
  }

  get idteacher(): number {
    return this._idteacher;
  }
}
