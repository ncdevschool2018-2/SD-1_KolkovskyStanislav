package com.netcracker.fapi.service;

import com.netcracker.fapi.model.SubjectModel;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@Service
public class SubjectService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public List<SubjectModel> getSubjects(){
        RestTemplate restTemplate = new RestTemplate();
        SubjectModel[] subjectModels = restTemplate.getForObject(backendServerUrl + "/api/subject", SubjectModel[].class );
        return Arrays.asList(subjectModels);
    }

    public SubjectModel createSubject(SubjectModel subjectModel){
        RestTemplate restTemplate = new RestTemplate();
        return  restTemplate.postForEntity(backendServerUrl + "/api/subject", subjectModel, SubjectModel.class).getBody();
    }

}
