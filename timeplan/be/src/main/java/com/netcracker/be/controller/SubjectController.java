package com.netcracker.be.controller;

import com.netcracker.be.entity.SubjectModel;
import com.netcracker.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {


    @Autowired
    private SubjectService subjectService;


    public SubjectController(SubjectService service){
        this.subjectService = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public SubjectModel createSubject(@RequestBody SubjectModel subjectModel) {
        return subjectService.createSubject(subjectModel);
    }

    @RequestMapping(value = "",method = RequestMethod.GET)
    public Iterable<SubjectModel> getSubjects(){
        return subjectService.getSubjects();
    }
}
