package com.netcracker.be.service;

import com.netcracker.be.entity.Subject;
import com.netcracker.be.entity.Teacher;
import com.netcracker.be.repository.SubjectRepository;
import com.netcracker.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class TeacherService {

    private SubjectRepository subjectRepository;
    private TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository, SubjectRepository subjectRepository) {
        this.teacherRepository = teacherRepository;
        this.subjectRepository = subjectRepository;
    }

    public Teacher saveTeacherAccount(Teacher teacher){
        List<Subject> subjects = teacher.getSubjects();
        List<Subject> addSubjects = new ArrayList<>();
        teacher.setSubjects(Collections.emptyList());
        Teacher teacher1 = teacherRepository.save(teacher);

        for(int i = 0; i < subjects.size(); i++){
            Optional<Subject> subjectOptional = subjectRepository.findById(subjects.get(i).getIdsubjects());
            addSubjects.add(subjectOptional.get());
        }
        teacher1.setSubjects(addSubjects);
        return teacherRepository.save(teacher1);
    }

    public Iterable<Teacher> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public void deleteTeacher(Long id){
        teacherRepository.deleteById(id);
    }

    public Optional<Teacher> getTeacherById(Long id){
        return teacherRepository.findById(id);
    }

    public Iterable<Teacher> getTeacherByIdSubject(Long id) {
        Optional<Subject> subjectOptional = subjectRepository.findById(id);
        Subject subject = subjectOptional.isPresent()? subjectOptional.get() : new Subject();
        List<Teacher> teacherList = subject.getTeachers();
        return teacherList;
    }

}
