package com.netcracker.be.controller;


import com.netcracker.be.entity.StudentModel;
import com.netcracker.be.entity.TeacherModel;
import com.netcracker.be.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    private TeacherService teacherService;

    @Autowired
    public TeacherController(TeacherService teacherService) {
        this.teacherService = teacherService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public TeacherModel addTeacher(@RequestBody TeacherModel teacherModel){
        return  teacherService.saveTeacherAccount(teacherModel);
    }

    @RequestMapping(value = "", method = RequestMethod.GET)
    public Iterable<TeacherModel> getAllTeachers(){
        return teacherService.getAllTeachers();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<TeacherModel> deleteTeacher(@PathVariable(name = "id") Long id){
        teacherService.deleteTeacher(id);
        return ResponseEntity.noContent().build();
    }
}
