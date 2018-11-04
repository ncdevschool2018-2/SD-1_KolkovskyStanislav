package com.netcracker.be.service;

import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.entity.StudentModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository repository) { this.studentRepository = repository; }

    public StudentModel saveStudentAccount(StudentModel studentModel){
        return  studentRepository.save(studentModel);
    }

    public Iterable<StudentModel> getAllStudents() {
        return studentRepository.findAll();
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }
}
