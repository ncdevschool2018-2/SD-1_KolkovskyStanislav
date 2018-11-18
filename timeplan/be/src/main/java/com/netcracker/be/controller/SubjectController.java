package com.netcracker.be.controller;

import com.netcracker.be.entity.Subject;
import com.netcracker.be.entity.Teacher;
import com.netcracker.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/subject")
public class SubjectController {


    @Autowired
    private SubjectService subjectService;


    public SubjectController(SubjectService service){
        this.subjectService = service;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Subject createSubject(@RequestBody Subject subject) {
        return subjectService.createSubject(subject);
    }

    @RequestMapping(value = "",method = RequestMethod.GET)
    public Iterable<Subject> getSubjects(){
        return subjectService.getSubjects();
    }


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Subject> deleteSubject(@PathVariable(name = "id") Long id){
        subjectService.deleteSubject(id);
        return  ResponseEntity.noContent().build();
    }


    //Testing this method
    @RequestMapping(value="/create", method = RequestMethod.GET)
    public Subject addSubject(){

        Subject subject = new Subject();
        subject.setName("Математика");

        List<Teacher> teacherList = new ArrayList<>();

        Teacher teacher = new Teacher();
        teacher.setFname("fname");
        teacher.setLname("lname");
        teacher.setEmail("email");
        teacher.setPassword("password");
        teacher.setLevel("level");
        teacher.setSubject(subject);

        teacherList.add(teacher);

        subject.setTeacherList(teacherList);
        return subjectService.createSubject(subject);

    }
}
