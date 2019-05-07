package com.netcracker.be.controller;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Subject;
import com.netcracker.be.entity.Teacher;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    private GroupService groupService;
    private SubjectService subjectService;

    @Autowired
    public SubjectController(SubjectService subjectService, GroupService groupService){
        this.subjectService = subjectService;
        this.groupService = groupService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Subject createSubject(@RequestBody Subject subject) {
        return subjectService.createSubject(subject);
    }

    @RequestMapping(value = "",method = RequestMethod.GET)
    public Iterable<Subject> getSubjects(){
        Iterable<Subject> subjectIterable = subjectService.getSubjects();
        return  subjectIterable;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Subject> deleteSubject(@PathVariable(name = "id") Long id){
        subjectService.deleteSubject(id);
        return  ResponseEntity.noContent().build();
    }

//    //Testing this method
//    @RequestMapping(value="/create/{name}", method = RequestMethod.GET)
//    public Subject addSubject(@RequestParam(name = "name", required = false, defaultValue = "Subject_name") String name){
//        Subject subject = new Subject();
//        subject.setName(name);
//        return subjectService.createSubject(subject);
//    }

    @RequestMapping(value="/get/{idgroup}",method = RequestMethod.GET)
    public Iterable<Subject> getSubjectsByGroup(@PathVariable(name="idgroup")Long id){
        Optional<Group> groupOptional = groupService.getGroupById(id);
        Group group = new Group();
        if(groupOptional.isPresent()){
            group = groupOptional.get();
            return group.getSubjects();
        }else{
            return new ArrayList<Subject>();
        }
    }

    @RequestMapping(value="/get/not_attached/{idgroup}",method = RequestMethod.GET)
    public Iterable<Subject> getSubjectsNotAttachedByGroup(@PathVariable(name="idgroup") Long idgroup){
        return subjectService.getSubjectsNotAttachedByGroup(idgroup);
    }

}
