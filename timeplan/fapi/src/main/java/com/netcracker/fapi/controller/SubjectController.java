package com.netcracker.fapi.controller;


import com.netcracker.fapi.model.Subject;
import com.netcracker.fapi.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sb")
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

    @RequestMapping(value = "/delete/{id}",method = RequestMethod.DELETE)
    public void deleteSubject(@PathVariable String id){
        subjectService.deleteSubject(Long.valueOf(id));
    }
}
