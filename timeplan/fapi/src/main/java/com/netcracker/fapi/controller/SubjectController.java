package com.netcracker.fapi.controller;


import com.netcracker.fapi.model.SubjectModel;
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

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<SubjectModel>> getSubjects(){
        return ResponseEntity.ok(subjectService.getSubjects());
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<SubjectModel> createSubject(@RequestBody  SubjectModel subjectModel){
        if(subjectModel != null)
            return ResponseEntity.ok(subjectService.createSubject(subjectModel));
        else
            return  null;
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void deleteSubject(@PathVariable String id){
        subjectService.deleteSubject(Long.valueOf(id));
    }
}
