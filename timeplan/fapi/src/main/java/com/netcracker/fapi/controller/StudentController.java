package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.CustomPage;
import com.netcracker.fapi.model.Student;
import com.netcracker.fapi.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/api/st")
public class StudentController {

    @Autowired
    private StudentService studentService;


    @RequestMapping(value="/list/{page}",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Student>> getStudentPage(@PathVariable(name="page") String page){
       return ResponseEntity.ok(studentService.getStudentPage(Integer.valueOf(page)));
    }

    @RequestMapping(value="/pages",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Integer> getPages(){
        return ResponseEntity.ok(studentService.getPages());
    }

    @RequestMapping(value = "/createst",method = RequestMethod.POST)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Student> addStudent(@RequestBody Student student){
        if(student != null){
            student.setRole("STUDENT");
            return ResponseEntity.ok(studentService.saveStudentAccount(student));
        }
        return null;
    }

    @RequestMapping(value="/email/{email}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN') or hasRole('STUDENT')")
    public ResponseEntity<Student> getStudentByEmail(@PathVariable(name="email")String email){
        return ResponseEntity.ok(studentService.getStudentByEmail(email));
    }

    @RequestMapping(value="/getst",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Student>> getAllStudents(){
        return ResponseEntity.ok(studentService.getAllStudent());
    }

    @RequestMapping(value = "/delete/{id}",method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteStudent(@PathVariable String id){
        studentService.deleteStudentAccount(Long.valueOf(id));
    }


    @RequestMapping(value = "/notgroup",method =RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Student>> getAllStudentsNotGroup(){
        return ResponseEntity.ok(studentService.getAllStudentsNotGroup());
    }

    @RequestMapping(value = "/getst/{id}", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Student>> getStudentsByGroupId(@PathVariable(name="id")String id){
        return ResponseEntity.ok(studentService.getStudentByGroupId(Long.valueOf(id)));
    }


    @RequestMapping(value="/gp/remove/{id}",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Student> removeGroup(@PathVariable(name="id")String id){
        return ResponseEntity.ok(studentService.removeGroup(Long.valueOf(id)));
    }

    @RequestMapping(value="/adding_group/{idgroup}",method = RequestMethod.POST)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Student>> addingStudentInGroup(@PathVariable(name="idgroup")String idgroup,@RequestBody Student[] students){
        if(students != null){
            return ResponseEntity.ok(studentService.addingInGroup(Long.valueOf(idgroup),students));
        }
        return null;
    }
}
