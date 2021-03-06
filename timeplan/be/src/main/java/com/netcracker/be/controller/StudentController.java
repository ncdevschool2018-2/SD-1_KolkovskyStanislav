package com.netcracker.be.controller;


import com.netcracker.be.entity.Group;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.StudentService;
import com.netcracker.be.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.HTMLDocument;
import java.util.ArrayList;
import java.util.HashMap;
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

    @RequestMapping(value = "/list",method = RequestMethod.GET)
    public  List<Student> showPage(@RequestParam(defaultValue = "0") int page){
        return  studentService.getStudentPage(page);
    }

    @RequestMapping(value = "/pages",method = RequestMethod.GET)
    public Integer getPages(){
        return studentService.getNumberPage();
    }

    @RequestMapping(value ="/email/{email}",method =RequestMethod.GET)
    public Student getStudentByEmail(@PathVariable(name="email")String email){
        return studentService.getStudentByEmail(email);
    }

    @RequestMapping(value ="/save" ,method = RequestMethod.POST)
    public Student addStudent(@RequestBody Student account) {
        return studentService.saveStudentAccount(account);
    }

    @RequestMapping(value = "/getall", method = RequestMethod.GET)
    public Iterable<Student> getAllStudents(){
        Iterable<Student> students = studentService.getAllStudents();
        return students;
    }

    @RequestMapping(value="/getall/{id}",method = RequestMethod.GET)
    public Iterable<Student> getStudentsByGroupId(@PathVariable(name ="id")Long id){
        Iterable<Student> students = studentService.getAllStudentsByGroupId(id);
        return  students;
    }

    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Student> deleteStudent(@PathVariable(name ="id") Long id){
        studentService.deleteStudent(id);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value = "/notgroup",method = RequestMethod.GET)
    public Iterable<Student> getStudentsNotGroup(){
        return studentService.getAllStudentsNotGroup();
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



    @RequestMapping(value = "/group/remove/{id}",method = RequestMethod.GET)
    public Student removeStudent(@PathVariable(name="id")Long id){
        return studentService.removeGroup(id);
    }

    @RequestMapping(value="/addinggroup", method = RequestMethod.POST)
    public Iterable<Student> addingStudentsInGroup(@RequestBody HashMap<Long, List<Student>> hashMap){
        if(hashMap != null){
            return studentService.addStudentInGroup(hashMap);
        }else{
            return null;
        }
    }


    @RequestMapping(value = "/getbylname/{lname}", method = RequestMethod.GET)
    public List<Student> getByLnameStudent(@PathVariable(name ="lname") String lname){
        return studentService.getStudentByLname(lname);
    }
}
