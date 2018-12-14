package com.netcracker.be.service;


import com.netcracker.be.entity.User;
import com.netcracker.be.repository.AdminRepository;
import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    private StudentRepository studentRepository;
    private TeacherRepository teacherRepository;
    private AdminRepository adminRepository;

    @Autowired
    public UserService(StudentRepository studentRepository, TeacherRepository teacherRepository, AdminRepository adminRepository) {
        this.studentRepository = studentRepository;
        this.teacherRepository = teacherRepository;
        this.adminRepository = adminRepository;
    }

    public User getUserByEmail(String email){
        if(adminRepository.findByEmail(email).isPresent()){
            return  adminRepository.findByEmail(email).get();
        }
        if(teacherRepository.findByEmail(email).isPresent()){
            return teacherRepository.findByEmail(email).get();
        }else{
            if(studentRepository.findByEmail(email).isPresent()){
                return studentRepository.findByEmail(email).get();
            }else {
                return null;
            }
        }
    }

}
