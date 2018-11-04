package com.netcracker.be.service;

import com.netcracker.be.entity.StudentModel;
import com.netcracker.be.entity.TeacherModel;
import com.netcracker.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class TeacherService {

    private TeacherRepository teacherRepository;

    @Autowired
    public TeacherService(TeacherRepository teacherRepository) {
        this.teacherRepository = teacherRepository;
    }

    public TeacherModel saveTeacherAccount(TeacherModel teacherModel){
        return teacherRepository.save(teacherModel);
    }

    public Iterable<TeacherModel> getAllTeachers() {
        return teacherRepository.findAll();
    }

    public void deleteTeacher(Long id){
        teacherRepository.deleteById(id);
    }
}
