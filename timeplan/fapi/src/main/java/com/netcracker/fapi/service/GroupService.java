package com.netcracker.fapi.service;

import com.netcracker.fapi.model.Group;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GroupService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public Group createGroup(Group group){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/group", group, Group.class).getBody();
    }

}
