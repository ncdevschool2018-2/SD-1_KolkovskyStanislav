package com.netcracker.be.service;

import com.netcracker.be.entity.GroupModel;
import com.netcracker.be.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class GroupService {

    private GroupRepository groupRepository;

    @Autowired
    public GroupService(GroupRepository repository){
        this.groupRepository = repository;
    }

    public GroupModel createGroup(GroupModel groupModel){
        return groupRepository.save(groupModel);
    }
}
