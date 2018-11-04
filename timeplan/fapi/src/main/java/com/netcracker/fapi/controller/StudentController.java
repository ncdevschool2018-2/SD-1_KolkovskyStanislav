package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.StudentModel;
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
    public ResponseEntity<StudentModel> addStudent(@RequestBody StudentModel studentModel){
        if(studentModel != null){
            return ResponseEntity.ok(studentService.saveStudentAccount(studentModel));
        }
        return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<StudentModel>> getAllStudents(){
        return ResponseEntity.ok(studentService.getAllStudent());
    }


    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    public void deleteStudent(@PathVariable String id){
        studentService.deleteStudentAccount(Long.valueOf(id));
    }

}
