package com.netcracker.be.controller;


import com.netcracker.be.entity.Group;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.StudentService;
import com.netcracker.be.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.HTMLDocument;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {

    private StudentService studentService;
    private GroupService groupService;

    @Autowired
    public StudentController(StudentService studentService, GroupService groupService){
        this.studentService = studentService;
        this.groupService = groupService;
    }

    @RequestMapping(value ="/save" ,method = RequestMethod.POST)
    public Student addStudent(@RequestBody Student account) {
        return studentService.saveStudentAccount(account);
    }

    @RequestMapping(value = "/getall", method = RequestMethod.GET)
    public Iterable<Student> getAllStudents(){

        Iterable<Student> students = studentService.getAllStudents();
//        Iterable<Student> parse_student;
//        Iterator<Student> studentIterator = students.iterator();
//        List<Student> studentList = new ArrayList<>();
//
//        while(studentIterator.hasNext()){
//            studentList.add(studentIterator.next());
//        }
//
//        for(int i = 0; i < studentList.size(); i++){
//            System.out.println(studentList.get(i).getGroup() + "  " +
//                    studentList.get(i).getGroup().getName());
//        }


        return students;
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Student> deleteStudent(@PathVariable(name ="id") Long id){
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/notgroup",method = RequestMethod.GET)
    public Iterable<Student> getStudentsNotGroup(){
        return studentService.getAllStudentsNotGroup();
    }


    //test connection
    @RequestMapping(value ="/create" ,method = RequestMethod.GET)
    public Student createStudent(@RequestParam(name = "fname", required = false, defaultValue = "Student") String fname,
                                 @RequestParam(name = "lname", required = false, defaultValue =  "Student") String lname,
                                 @RequestParam(name = "email", required = false, defaultValue = "Student@gmail.com") String email,
                                 @RequestParam(name = "password", required = false, defaultValue = "password") String password) {

        Student student = new Student();
        student.setFname(fname);
        student.setLname(lname);
        student.setEmail(email);
        student.setPassword(password);
        return studentService.saveStudentAccount(student);
    }

    @RequestMapping(value="/addingroup/{id}/{idgroup}",method = RequestMethod.GET)
    public Student addingGroup(@PathVariable(name ="id") Long id,
                               @PathVariable(name ="idgroup") Long idgroup){
        Iterable<Student> students = studentService.getAllStudents();
        Iterator<Student> iterator = students.iterator();
        Iterable<Group> groups = groupService.getGroups();
        Iterator<Group> groupIterator = groups.iterator();


        List<Group> groupList = new ArrayList<>();
        List<Student> studentList = new ArrayList<>();
        while(iterator.hasNext()){
            studentList.add(iterator.next());
        }

        while(groupIterator.hasNext()){
            groupList.add(groupIterator.next());
        }

        Student student = new Student();

        for(int i = 0; i < studentList.size(); i++){
            if(studentList.get(i).getIdstudent().equals(id)){
                student = studentList.get(i);
                break;
            }
        }

        for(int i = 0;  i < groupList.size(); i++){
            if(groupList.get(i).getId().equals(idgroup)){
                student.setGroup(groupList.get(i));
                break;
            }
        }

        return  studentService.saveStudentAccount(student);
    }


}
