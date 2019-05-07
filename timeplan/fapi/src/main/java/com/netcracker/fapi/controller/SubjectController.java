package com.netcracker.fapi.controller;


import com.netcracker.fapi.model.Subject;
import com.netcracker.fapi.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {

    @Autowired
    private SubjectService subjectService;

    @RequestMapping(value="/getsb",method = RequestMethod.GET)
    public ResponseEntity<List<Subject>> getSubjects(){
        return ResponseEntity.ok(subjectService.getSubjects());
    }

    @RequestMapping(value = "/createsb",method = RequestMethod.POST)
    public ResponseEntity<Subject> createSubject(@RequestBody Subject subject){
        if(subject != null)
            return ResponseEntity.ok(subjectService.createSubject(subject));
        else
            return  null;
    }

    @RequestMapping(value="/get/{idgroup}", method = RequestMethod.GET)
    public ResponseEntity<List<Subject>> getSubjectsByIdGroup(@PathVariable(name="idgroup") String idgroup){
        return ResponseEntity.ok(subjectService.getSubjectIdGroup(Long.valueOf(idgroup)));
    }

    @RequestMapping(value = "/delete/{id}",method = RequestMethod.DELETE)
    public void deleteSubject(@PathVariable String id){
        subjectService.deleteSubject(Long.valueOf(id));
    }

    @RequestMapping(value = "/get/not_attached/{idgroup}",method=RequestMethod.GET)
    public ResponseEntity<List<Subject>> getSubjectsNotAttachedByGroup(@PathVariable(name="idgroup") String idgroup){
        return ResponseEntity.ok(subjectService.getSubjectsNotAttachedByGroup(Long.valueOf(idgroup)));
    }
}
