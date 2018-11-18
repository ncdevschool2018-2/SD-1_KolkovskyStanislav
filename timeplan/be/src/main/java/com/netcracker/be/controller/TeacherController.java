package com.netcracker.be.controller;


import com.netcracker.be.entity.Teacher;
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
    public Teacher addTeacher(@RequestBody Teacher teacher){
        return  teacherService.saveTeacherAccount(teacher);
    }

    @RequestMapping(value = "/getall", method = RequestMethod.GET)
    public Iterable<Teacher> getAllTeachers(){
        return teacherService.getAllTeachers();
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Teacher> deleteTeacher(@PathVariable(name = "id") Long id){
        teacherService.deleteTeacher(id);
        return ResponseEntity.noContent().build();
    }


    //Test code baby!

    @RequestMapping(value="/create",method = RequestMethod.GET)
    public Teacher createTeacher(@RequestParam(name = "fname", required = false, defaultValue = "Teacher") String fname,
                                 @RequestParam(name = "lname", required = false, defaultValue =  "Teacher") String lname,
                                 @RequestParam(name = "email", required = false, defaultValue = "Student@gmail.com") String email,
                                 @RequestParam(name = "password", required = false, defaultValue = "password") String password,
                                 @RequestParam(name = "level", required = false, defaultValue = "dcotor") String level){

        Teacher teacher = new Teacher();
        teacher.setFname(fname);
        teacher.setLname(lname);
        teacher.setEmail(email);
        teacher.setPassword(password);
        teacher.setLevel(level);

        return teacherService.saveTeacherAccount(teacher);
    }
}
