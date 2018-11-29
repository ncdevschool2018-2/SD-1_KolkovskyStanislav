package com.netcracker.fapi.service;

import com.netcracker.fapi.model.Student;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Service
public class StudentService {


    @Value("${backend.server.url}")
    private String backendServerUrl;

    public List<Student> getAllStudent() {
        RestTemplate restTemplate = new RestTemplate();
        Student[] students = restTemplate.getForObject(backendServerUrl + "/api/student/getall",Student[].class);
        return students  == null ? Collections.emptyList() :Arrays.asList(students);
    }

    public Student removeGroup(Long id){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(backendServerUrl +"/api/student/group/remove/"+id,Student.class);
    }

    public Student getStudentAccount(int id) {
        return null;
    }

    public Student saveStudentAccount(Student student) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/student/save", student, Student.class).getBody();
    }

    public void deleteStudentAccount(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/student/delete/"+id);
    }

    public List<Student> getAllStudentsNotGroup(){
        RestTemplate restTemplate = new RestTemplate();
        Student[] students = restTemplate.getForObject(backendServerUrl + "/api/student/notgroup", Student[].class);
        return  students == null ? Collections.emptyList() : Arrays.asList(students);
    }

    public List<Student> getStudentByGroupId(Long id){
        RestTemplate restTemplate = new RestTemplate();
        Student[] students = restTemplate.getForObject(backendServerUrl + "/api/student/getall/" + id, Student[].class);
        return students == null ? Collections.emptyList() : Arrays.asList(students);
    }

    public List<Student> addingInGroup(Long idgroup,Student[] students){
        HashMap<Long,List<Student>> hashMap = new HashMap<>();
        hashMap.put(idgroup, Arrays.asList(students));
        RestTemplate restTemplate = new RestTemplate();
        Student[] students1 =  restTemplate.postForEntity(backendServerUrl + "/api/student/addinggroup/",hashMap,Student[].class).getBody();
        return students1  == null ? Collections.emptyList() :Arrays.asList(students1);
    }


}
