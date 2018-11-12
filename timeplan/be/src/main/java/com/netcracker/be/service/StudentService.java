package com.netcracker.be.service;

import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.entity.StudentModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

//    public Iterable<StudentModel> getAllStudentsNotGroup(){
//
//    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }

    public StudentModel updateStudentAccount(StudentModel student){

        Optional<StudentModel> studentModel = studentRepository.findById(student.getIdstudents());
        if(studentModel.isPresent()){
            StudentModel ss = studentModel.get();
            ss = student;

        }
        return  student;
    }
}
