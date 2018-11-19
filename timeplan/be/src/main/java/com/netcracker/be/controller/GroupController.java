package com.netcracker.be.controller;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Student;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    private GroupService groupService;
    private StudentService studentService;

    @Autowired
    public GroupController (GroupService service, StudentService studentService){
        this.groupService = service;
        this.studentService = studentService;
    }

    @RequestMapping(method = RequestMethod.POST)
    public Group addStudent(@RequestBody Group group) {

        return groupService.createGroup(group);
    }

    @RequestMapping(value="/delete/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Group>deleteGroup(@PathVariable(name ="id") String id){
        groupService.deleteById(Long.valueOf(id));
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(value="/creategroup", method = RequestMethod.GET)
    public Group createGroup(){

        Group group = new Group();
        List<Student> studentList = new ArrayList<Student>();
        Student student = new Student();
        group.setName("group");

        student.setFname("kolia");
        student.setLname("kolia");
        student.setEmail("email");
        student.setPassword("password");
        student.setGroup(group);
        studentList.add(student);
        group.setStudents(studentList);

        return  groupService.createGroup(group);
    }

    @RequestMapping(value = "/getgroups", method = RequestMethod.GET)
    public Iterable<Group> getGroups(){
        Iterable<Group> groups = groupService.getGroups();
//        Iterator<Group> groupIterator = groups.iterator();
//        while(groupIterator.hasNext()){
//            System.out.println(groupIterator.next().getStudents());
//        }
        return groups;
    }
}
