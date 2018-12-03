import {Group} from "./group";
import {Teacher} from "./teacher";
import {Subject} from "./subject";

export class Task{
  id:number;
  day:number;
  time:number;
  group:Group;
  subject:Subject;
  teacher:Teacher;
}
