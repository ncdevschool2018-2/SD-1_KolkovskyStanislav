import {Student} from "./student";

export class Group{
  constructor(public _name_group:string, public list_students?:Student[]){}


  get name_group(): string {
    return this._name_group;
  }
}
