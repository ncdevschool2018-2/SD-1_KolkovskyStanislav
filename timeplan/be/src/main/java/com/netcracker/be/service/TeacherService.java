package com.netcracker.be.service;

import com.netcracker.be.entity.Teacher;
import com.netcracker.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    private TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
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
}
