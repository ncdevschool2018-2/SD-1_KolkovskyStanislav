package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.GroupModel;
import com.netcracker.fapi.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/gp")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<GroupModel> createGroup(@RequestBody GroupModel groupModel){
        if(groupModel != null){
            return ResponseEntity.ok(groupService.createGroup(groupModel));
        }
        return null;
    }

}
