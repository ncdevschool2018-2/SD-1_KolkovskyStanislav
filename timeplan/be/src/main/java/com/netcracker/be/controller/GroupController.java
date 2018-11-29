package com.netcracker.be.controller;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Student;
import com.netcracker.be.entity.Subject;
import com.netcracker.be.service.GroupService;
import com.netcracker.be.service.StudentService;
import com.netcracker.be.service.SubjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    private GroupService groupService;
    private StudentService studentService;
    private SubjectService subjectService;

    @Autowired
    public GroupController (GroupService service, StudentService studentService, SubjectService subjectService){
        this.groupService = service;
        this.studentService = studentService;
        this.subjectService = subjectService;
    }

    @RequestMapping(value="/create",method = RequestMethod.POST)
    public Group createGroup(@RequestBody HashMap<String, List<Student>> hashMap) {

        Group group = new Group();
        List<Student> studentList = new ArrayList<>();

        //get data from Hashmap
        for(Map.Entry<String, List<Student>> entry : hashMap.entrySet()){
            group.setName(entry.getKey());
            studentList = entry.getValue();
        }

        Group group1 = groupService.createGroup(group);
        for(Student student: studentList){
            student.setGroup(group1);
        }

        studentService.saveAllStudents(studentList);
        return group1;
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


    @RequestMapping(value="/adding_subkects", method = RequestMethod.GET)
    public Group addSubject(@PathVariable(name="id")Long id,
                            @PathVariable(name="idsub")Long idsub){
        Iterable<Group> groupIterable = groupService.getGroups();
        Iterable<Subject> subjectIterable = subjectService.getSubjects();

        Iterator<Group> groupIterator = groupIterable.iterator();
        Iterator<Subject> subjectIterator = subjectIterable.iterator();

        Group group = new Group();
        Subject subject = new Subject();

        while(groupIterator.hasNext()){
            group = groupIterator.next();
            if(group.getId().equals(id)){
                break;
            }
        }

        while(subjectIterator.hasNext()){
            subject = subjectIterator.next();
            if(subject.getIdsubjects().equals(idsub)){
                break;
            }
        }

        group.addSubject(subject);
        return groupService.createGroup(group);
    }


    @RequestMapping(value="/addsubjects",method = RequestMethod.POST)
    public Group addSubjects(@RequestBody HashMap<Long,List<Subject>> hashMap){
        Long idgroup = null;
        List<Subject> subjectList = new ArrayList<>();

        //get data from Hashmap
        for(Map.Entry<Long, List<Subject>> entry : hashMap.entrySet()){
            idgroup = entry.getKey();
            subjectList = entry.getValue();
        }

        Optional<Group> groupOptional = groupService.getGroupById(idgroup);
        Group group = groupOptional.isPresent() ? groupOptional.get() : new Group();
        if(group.getSubjects().isEmpty()){
            group.setSubjects(subjectList);
        }else{
            group.addSubjects(subjectList);
        }
        return groupService.createGroup(group);
    }

    @RequestMapping(value="/remove/{idgroup}/{idsub}", method = RequestMethod.GET)
    public ResponseEntity<Group> removeSubjectFromGroup(@PathVariable(name = "idgroup") Long idgroup,
                                                        @PathVariable(name = "idsub") Long idsub){
        Optional<Group> groupOptional = groupService.getGroupById(idgroup);
        Group group = groupOptional.isPresent() ? groupOptional.get() : new Group();
        Subject subject = subjectService.getSubject(idsub).get();
        group.removeSubject(subject);
        groupService.createGroup(group);
        return ResponseEntity.noContent().build();
    }
}
