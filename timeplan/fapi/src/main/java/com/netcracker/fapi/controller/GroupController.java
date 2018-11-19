package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Group;
import com.netcracker.fapi.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gp")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(value="/creategp",method = RequestMethod.POST)
    public ResponseEntity<Group> createGroup(@RequestBody Group group){
        if(group != null){
            return ResponseEntity.ok(groupService.createGroup(group));
        }
        return null;
    }

    @RequestMapping(value ="/getgp",method = RequestMethod.GET)
    public ResponseEntity<List<Group>> getAllGroups(){
        return  ResponseEntity.ok(groupService.getAllGroups());
    }

    @RequestMapping(value="/delete/{id}",method = RequestMethod.DELETE)
    public void deleteGroup(@PathVariable(name ="id") String id){
        groupService.deleteGroupById(Long.valueOf(id));
    }

}
