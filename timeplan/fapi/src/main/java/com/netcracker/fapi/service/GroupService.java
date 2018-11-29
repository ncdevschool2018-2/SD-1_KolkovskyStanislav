package com.netcracker.fapi.service;

import com.netcracker.fapi.model.Group;
import com.netcracker.fapi.model.Student;
import com.netcracker.fapi.model.Subject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class GroupService {

    @Value("${backend.server.url}")
    private String backendServerUrl;
    public Group createGroup(String name, Student[] students){
        HashMap<String,List<Student>> hashMap = new HashMap<>();
        hashMap.put(name, Arrays.asList(students));
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/group/create", hashMap, Group.class).getBody();
    }

    public List<Group> getAllGroups(){
        RestTemplate restTemplate = new RestTemplate();
        Group [] groups = restTemplate.getForObject(backendServerUrl + "/api/group/getgroups", Group[].class);
        return groups == null ? Collections.emptyList(): Arrays.asList(groups);
    }

    public void removeSubjectFromGroup(Long idgroup, Long idsub){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.getForObject(backendServerUrl + "/api/group/remove/"+idgroup+"/"+idsub,void.class);
    }

    public Group addSubjects(Long idgrop, Subject[] subjects){
        HashMap<Long , List<Subject>> hashMap = new HashMap<>();
        hashMap.put(idgrop,Arrays.asList(subjects));
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/group/addsubjects",hashMap,Group.class).getBody();
    }

    public void deleteGroupById(Long id){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/group/delete/"+id);
    }
}
