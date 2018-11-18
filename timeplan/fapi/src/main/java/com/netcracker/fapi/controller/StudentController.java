package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Student;
import com.netcracker.fapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/st")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        if(student != null){
            return ResponseEntity.ok(studentService.saveStudentAccount(student));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<Student>> getAllStudents(){
        return ResponseEntity.ok(studentService.getAllStudent());
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void deleteStudent(@PathVariable String id){
        studentService.deleteStudentAccount(Long.valueOf(id));
    }


    @RequestMapping(path = "/notgroup",method =RequestMethod.GET)
    public ResponseEntity<List<Student>> getAllStudentsNotGroup(){
        return ResponseEntity.ok(studentService.getAllStudentsNotGroup());
    }

}
