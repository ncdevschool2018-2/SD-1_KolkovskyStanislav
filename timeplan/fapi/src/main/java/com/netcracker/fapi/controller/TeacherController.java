package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Student;
import com.netcracker.fapi.model.Teacher;
import com.netcracker.fapi.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tr")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    //pagination
    @RequestMapping(value="/list/{page}",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Teacher>> getStudentPage(@PathVariable(name="page") String page){
        return ResponseEntity.ok(teacherService.getTeacherPage(Integer.valueOf(page)));
    }
    @RequestMapping(value="/pages",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Integer> getPages(){
        return ResponseEntity.ok(teacherService.getPages());
    }



    @RequestMapping(value="/email/{email}",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN') or hasRole('TEACHER')")
    public ResponseEntity<Teacher> getTeacherByEmail(@PathVariable(name = "email") String email ){
        return ResponseEntity.ok(teacherService.getTeacherByEmail(email));
    }


    @RequestMapping(value = "/createtr",method = RequestMethod.POST)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher){
        if(teacher != null){
            teacher.setRole("TEACHER");
            return  ResponseEntity.ok(teacherService.saveTeacherAccount(teacher));
        }
        else
            return null;
    }

    @RequestMapping(value = "/gettr",method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<Teacher>> getAllTeachers(){
        return ResponseEntity.ok(teacherService.getAllTeachers());
    }


    @RequestMapping(value="/delete/{id}" , method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteTeacher(@PathVariable String id){
        teacherService.deleteTeacherAccount(Long.valueOf(id));
    }

    @RequestMapping(value="/get/{idsubject}", method = RequestMethod.GET)
    public ResponseEntity<List<Teacher>> getTeacherByIdSubject(@PathVariable String idsubject){
        return  ResponseEntity.ok(teacherService.getTeacherByIdSubject(Long.valueOf(idsubject)));
    }
}
