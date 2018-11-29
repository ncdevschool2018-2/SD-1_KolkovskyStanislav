package com.netcracker.fapi.service;


import com.netcracker.fapi.model.Teacher;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class TeacherService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public List<Teacher> getAllTeachers() {
        RestTemplate restTemplate = new RestTemplate();
        Teacher[] teachers = restTemplate.getForObject(backendServerUrl + "/api/teacher/getall", Teacher[].class);
        return  teachers == null ? Collections.emptyList() :Arrays.asList(teachers);
    }

    public Teacher saveTeacherAccount(Teacher teacher){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/teacher/", teacher, Teacher.class).getBody();
    }


    public void deleteTeacherAccount(Long id){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/teacher/"+id);
    }

}
