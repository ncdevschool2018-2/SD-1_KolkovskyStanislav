package com.netcracker.be.controller;

import com.netcracker.be.entity.GroupModel;
import com.netcracker.be.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/group")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(method = RequestMethod.POST)
    public GroupModel addStudent(@RequestBody GroupModel groupModel) {
        return groupService.createGroup(groupModel);
    }

}
