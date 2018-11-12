package com.netcracker.fapi.service;

import com.netcracker.fapi.model.GroupModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class GroupService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public GroupModel createGroup(GroupModel groupModel){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(backendServerUrl + "/api/group",groupModel, GroupModel.class).getBody();
    }

}
