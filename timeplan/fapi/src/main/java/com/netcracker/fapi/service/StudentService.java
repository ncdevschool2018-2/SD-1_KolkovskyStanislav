package com.netcracker.fapi.service;

import com.netcracker.fapi.model.StudentModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class StudentService {


    @Value("${backend.server.url}")
    private String backendServerUrl;


    public List<StudentModel> getAllStudent() {
        RestTemplate restTemplate = new RestTemplate();
        StudentModel[] studentModels = restTemplate.getForObject(backendServerUrl + "/api/student", StudentModel[].class);
        return Arrays.asList(studentModels);
    }

    public StudentModel getStudentAccount(int id) {
        return null;
    }

    public StudentModel saveStudentAccount(StudentModel studentModel) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/student", studentModel, StudentModel.class).getBody();
    }

    public void deleteStudentAccount(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/student/"+id);
    }

    public StudentModel updateStudentAccount(StudentModel studentModel){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl+"/api/student/update", studentModel, StudentModel.class).getBody();
    }
}
