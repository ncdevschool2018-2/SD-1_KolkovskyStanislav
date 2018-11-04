package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.StudentModel;
import com.netcracker.fapi.model.TeacherModel;
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


    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<TeacherModel> addTeacher(@RequestBody TeacherModel teacherModel){
        if(teacherModel != null)
            return  ResponseEntity.ok(teacherService.saveTeacherAccount(teacherModel));
        else
            return null;
    }

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<TeacherModel>> getAllTeachers(){
        return ResponseEntity.ok(teacherService.getAllTeachers());
    }


    @RequestMapping(value="/{id}" , method = RequestMethod.DELETE)
    public void deleteTeacher(@PathVariable String id){
        teacherService.deleteTeacherAccount(Long.valueOf(id));
    }

}
