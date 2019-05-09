package com.netcracker.be.controller;


import com.netcracker.be.entity.Subject;
import com.netcracker.be.entity.Teacher;
import com.netcracker.be.service.SubjectService;
import com.netcracker.be.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

    private TeacherService teacherService;
    private SubjectService subjectService;

    @Autowired
    public TeacherController(TeacherService teacherService, SubjectService subjectService) {
        this.teacherService = teacherService;
        this.subjectService = subjectService;
    }

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public  List<Teacher> showPage(@RequestParam(defaultValue = "0") int page){
        return  teacherService.getTeacherPage(page);
    }

    @RequestMapping(value = "/pages",method = RequestMethod.GET)
    public Integer getPages(){
        return teacherService.getNumberPage();
    }

    @RequestMapping(value = "/email/{email}",method = RequestMethod.GET)
    public Teacher getTeacherByEmail(@PathVariable(name ="email") String email){
        return teacherService.getTeacherByEmail(email);
    }

    @RequestMapping(method = RequestMethod.POST)
    public Teacher addTeacher(@RequestBody Teacher teacher){
        Teacher newTeacher = teacherService.saveTeacherAccount(teacher);
        return  newTeacher;
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


    @RequestMapping(value="/addingsubject/{id}/{idsub}", method = RequestMethod.GET)
    public Teacher addingSubject(@PathVariable(name="id") Long id,
                                 @PathVariable(name="idsub") Long idsub){

        Iterable<Teacher> teacherIterable = teacherService.getAllTeachers();
        Iterable<Subject> subjectIterable = subjectService.getSubjects();
        Iterator<Teacher> teacherIterator = teacherIterable.iterator();
        Iterator<Subject> subjectIterator = subjectIterable.iterator();


        Teacher teacher = new Teacher();

        List<Teacher> teacherList = new ArrayList<>();
        List<Subject> subjectList = new ArrayList<>();

        while(subjectIterator.hasNext()){
            subjectList.add(subjectIterator.next());
        }

        while(teacherIterator.hasNext()){
            teacherList.add(teacherIterator.next());
        }



        for(int i = 0; i < teacherList.size(); i++){
            if(teacherList.get(i).getIdteacher().equals(id)){
                teacher = teacherList.get(i);
                break;
            }
        }

        for(int i = 0; i < subjectList.size(); i++){
            if(subjectList.get(i).getIdsubject().equals(idsub)){
                teacher.addSubject(subjectList.get(i));
                break;
            }
        }
        return teacherService.saveTeacherAccount(teacher);

    }



    @RequestMapping(value="/get/{idsubject}", method = RequestMethod.GET)
    public Iterable<Teacher> getTeacherByIdSubject(@PathVariable(name ="idsubject") Long id){
        if(id != null){
            return teacherService.getTeacherByIdSubject(id);
        }else{
            return null;
        }
    }
}
