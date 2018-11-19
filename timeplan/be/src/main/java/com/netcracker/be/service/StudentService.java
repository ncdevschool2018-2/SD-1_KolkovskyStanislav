package com.netcracker.be.service;

import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {

    private StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository repository) { this.studentRepository = repository; }

    public Student saveStudentAccount(Student studentModel){
        return  studentRepository.save(studentModel);
    }

    public Iterable<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Iterable<Student> getAllStudentsNotGroup(){

        Iterable<Student> studentModels = studentRepository.findAll() ;
        Iterator<Student> iterator = studentModels.iterator();
        List<Student> studentModelList = new ArrayList<Student>();

        while(iterator.hasNext()){
            Student student = iterator.next();
            if(student.getGroup() == null){
                studentModelList.add(student);
            }
        }
        return studentModelList;
    }

    public void deleteStudent(Long id){
        studentRepository.deleteById(id);
    }
}
