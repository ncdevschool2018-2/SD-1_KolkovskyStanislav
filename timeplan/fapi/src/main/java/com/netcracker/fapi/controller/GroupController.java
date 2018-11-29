package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Group;
import com.netcracker.fapi.model.Student;
import com.netcracker.fapi.model.Subject;
import com.netcracker.fapi.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/gp")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @RequestMapping(value="/create/{name}",method = RequestMethod.POST)
    public ResponseEntity<Group> createGroup(@PathVariable(name="name")String name, @RequestBody Student[] students){
        if(students != null){
            return ResponseEntity.ok( groupService.createGroup(name,students));
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


    @RequestMapping(value="/addsub/{idgroup}",method = RequestMethod.POST)
    public ResponseEntity<Group> addSubjects(@PathVariable(name="idgroup") String idgroup, @RequestBody Subject[] subjects){
        if(subjects != null){
            return ResponseEntity.ok(groupService.addSubjects(Long.valueOf(idgroup),subjects));
        }
        return null;
    }


    @RequestMapping(value="/remove/{idgroup}/{idsub}",method = RequestMethod.GET)
    public void removeSubjectFromGroup(@PathVariable(name="idsub")String idsub,
                                       @PathVariable(name="idgroup")String idgroup){
       groupService.removeSubjectFromGroup(Long.valueOf(idgroup), Long.valueOf(idsub));
    }


}
