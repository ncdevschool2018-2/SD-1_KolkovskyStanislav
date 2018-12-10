package com.netcracker.be.service;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Student;
import com.netcracker.be.entity.Subject;
import com.netcracker.be.repository.GroupRepository;
import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class GroupService {

    private GroupRepository groupRepository;
    private StudentRepository studentRepository;
    private SubjectRepository subjectRepository;

    @Autowired
    public GroupService(GroupRepository repository,StudentRepository studentRepository,
                        SubjectRepository subjectRepository){
        this.studentRepository = studentRepository;
        this.subjectRepository = subjectRepository;
        this.groupRepository = repository;
    }

    public Group createGroup(HashMap<String, List<Student>> hashMap){

        Group group = new Group();
        List<Student> studentList = new ArrayList<>();

        //get data from Hashmap
        for(Map.Entry<String, List<Student>> entry : hashMap.entrySet()){
            group.setName(entry.getKey());
            studentList = entry.getValue();
        }

        Group group1 = groupRepository.save(group);
        for(Student student: studentList){
            student.setGroup(group1);
        }
        studentRepository.saveAll(studentList);
        return group1;
    }



    public void deleteById(Long id){
        groupRepository.deleteById(id);
    }

    public Iterable<Group> getGroups(){
        return  groupRepository.findAll();
    }

    public Optional<Group> getGroupById(Long id){
        return groupRepository.findById(id);
    }

    public Group addSubjectsIntoGroup(HashMap<Long,List<Subject>> hashMap){
        Long idgroup = null;
        List<Subject> subjectList = new ArrayList<>();

        for(Map.Entry<Long, List<Subject>> entry : hashMap.entrySet()){
            idgroup = entry.getKey();
            subjectList = entry.getValue();
        }

        Optional<Group> groupOptional = getGroupById(idgroup);
        Group group = groupOptional.isPresent() ? groupOptional.get() : new Group();
        if(group.getSubjects().isEmpty()){
            group.setSubjects(subjectList);
        }else{
            group.addSubjects(subjectList);
        }

        return groupRepository.save(group);
    }

    public Group removeSubjectFromGroup(Long idgroup, Long idsub){
        Optional<Group> groupOptional = getGroupById(idgroup);
        Group group = groupOptional.isPresent() ? groupOptional.get() : new Group();
        Subject subject =subjectRepository.findById(idsub).get();
        group.removeSubject(subject);
        return groupRepository.save(group);

    }

}
