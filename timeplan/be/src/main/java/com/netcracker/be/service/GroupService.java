package com.netcracker.be.service;

import com.netcracker.be.entity.Group;
import com.netcracker.be.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class GroupService {

    private GroupRepository groupRepository;

    @Autowired
    public GroupService(GroupRepository repository){
        this.groupRepository = repository;
    }

    public Group createGroup(Group group){
        return groupRepository.save(group);
    }

    public void deleteById(Long id){
        groupRepository.deleteById(id);
    }
    public Iterable<Group> getGroups(){
        return  groupRepository.findAll();
    }

    public Optional<Group> getGroupById(Long id){
        return groupRepository.findById(id);
    }
}
