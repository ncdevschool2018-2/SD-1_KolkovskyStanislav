package com.netcracker.be.controller;


import com.netcracker.be.service.StudentService;
import com.netcracker.be.entity.StudentModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    private StudentService studentService;

    @Autowired
    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public StudentModel addStudent(@RequestBody StudentModel account) {
        return studentService.saveStudentAccount(account);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<StudentModel> getAllStudents(){
        return studentService.getAllStudents();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<StudentModel> deleteStudent(@PathVariable(name ="id") Long id){
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public StudentModel updateStudent(@RequestBody StudentModel studentModel){
        return studentService.updateStudentAccount(studentModel);
    }
}
