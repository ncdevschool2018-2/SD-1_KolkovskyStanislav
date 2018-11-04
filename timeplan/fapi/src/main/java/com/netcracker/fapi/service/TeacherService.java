package com.netcracker.fapi.service;


import com.netcracker.fapi.model.StudentModel;
import com.netcracker.fapi.model.TeacherModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class TeacherService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public List<TeacherModel> getAllTeachers() {
        RestTemplate restTemplate = new RestTemplate();
        TeacherModel[] teacherModels = restTemplate.getForObject(backendServerUrl + "/api/teacher/", TeacherModel[].class);
        return Arrays.asList(teacherModels);
    }

    public TeacherModel saveTeacherAccount(TeacherModel teacherModel){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/teacher/", teacherModel, TeacherModel.class).getBody();
    }

    public void deleteTeacherAccount(Long id){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/teacher/"+id);
    }

}
