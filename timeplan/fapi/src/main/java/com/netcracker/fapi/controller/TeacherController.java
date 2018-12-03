package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Teacher;
import com.netcracker.fapi.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tr")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @RequestMapping(value = "/createtr",method = RequestMethod.POST)
    public ResponseEntity<Teacher> addTeacher(@RequestBody Teacher teacher){
        if(teacher != null)
            return  ResponseEntity.ok(teacherService.saveTeacherAccount(teacher));
        else
            return null;
    }

    @RequestMapping(value = "/gettr",method = RequestMethod.GET)
    public ResponseEntity<List<Teacher>> getAllTeachers(){
        return ResponseEntity.ok(teacherService.getAllTeachers());
    }


    @RequestMapping(value="/delete/{id}" , method = RequestMethod.DELETE)
    public void deleteTeacher(@PathVariable String id){
        teacherService.deleteTeacherAccount(Long.valueOf(id));
    }

    @RequestMapping(value="/get/{idsubject}", method = RequestMethod.GET)
    public ResponseEntity<List<Teacher>> getTeacherByIdSubject(@PathVariable String idsubject){
        return  ResponseEntity.ok(teacherService.getTeacherByIdSubject(Long.valueOf(idsubject)));
    }
}
