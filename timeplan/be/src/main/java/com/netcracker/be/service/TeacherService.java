package com.netcracker.be.service;

import com.netcracker.be.entity.Subject;
import com.netcracker.be.entity.Teacher;
import com.netcracker.be.repository.SubjectRepository;
import com.netcracker.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

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
        return teacherRepository.save(teacher);
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
