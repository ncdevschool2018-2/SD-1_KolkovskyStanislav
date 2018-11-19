package com.netcracker.fapi.service;

import com.netcracker.fapi.model.Group;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class GroupService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public Group createGroup(Group group){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/group", group, Group.class).getBody();
    }

    public List<Group> getAllGroups(){
        RestTemplate restTemplate = new RestTemplate();
        Group [] groups = restTemplate.getForObject(backendServerUrl + "/api/group/getgroups", Group[].class);
        return groups == null ? Collections.emptyList(): Arrays.asList(groups);
    }

    public void deleteGroupById(Long id){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/group/delete/"+id);
    }
}
