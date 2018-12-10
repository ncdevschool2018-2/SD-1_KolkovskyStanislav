package com.netcracker.be.controller;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Student;
import com.netcracker.be.entity.Subject;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.StudentService;
import com.netcracker.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    private GroupService groupService;
    private StudentService studentService;
    private SubjectService subjectService;

    @Autowired
    public GroupController (GroupService service, StudentService studentService, SubjectService subjectService){
        this.groupService = service;
        this.studentService = studentService;
        this.subjectService = subjectService;
    }

    @RequestMapping(value="/create",method = RequestMethod.POST)
    public Group createGroup(@RequestBody HashMap<String, List<Student>> hashMap) {


        if(!hashMap.equals(null)){
            return groupService.createGroup(hashMap);
        }
        else{
            return null;
        }

    }

    @RequestMapping(value="/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Group>deleteGroup(@PathVariable(name ="id") String id){
        groupService.deleteById(Long.valueOf(id));
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/getgroups", method = RequestMethod.GET)
    public Iterable<Group> getGroups(){
       return groupService.getGroups();
    }



    @RequestMapping(value="/addsubjects",method = RequestMethod.POST)
    public Group addSubjects(@RequestBody HashMap<Long,List<Subject>> hashMap){

        if(!hashMap.equals(null)){
            return groupService.addSubjectsIntoGroup(hashMap);
        }else{
            return null;
        }

    }

    @RequestMapping(value="/remove/{idgroup}/{idsub}", method = RequestMethod.GET)
    public ResponseEntity<Group> removeSubjectFromGroup(@PathVariable(name = "idgroup") Long idgroup,
                                                        @PathVariable(name = "idsub") Long idsub){
        groupService.removeSubjectFromGroup(idgroup,idsub);
        return ResponseEntity.noContent().build();
    }
}
