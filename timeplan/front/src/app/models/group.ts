import {Student} from "./student";
import {Subject} from "./subject";

export class Group{

   id:number;
   name:string;
   student_list:Student[] = [];
   subject_list:Subject[] = [];

   constructor(){}
}
