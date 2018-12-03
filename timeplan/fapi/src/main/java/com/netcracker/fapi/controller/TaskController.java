package com.netcracker.fapi.controller;


import com.netcracker.fapi.model.Task;
import com.netcracker.fapi.service.TaskSerice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.xml.ws.Response;
import java.util.List;

@RestController
@RequestMapping("/api/ts")
public class TaskController {


    @Autowired
    private TaskSerice taskService;

    @RequestMapping(value="/add",method= RequestMethod.POST)
    public ResponseEntity<Task> addTask(@RequestBody Task task){
        if(task != null)
            return ResponseEntity.ok(taskService.addTask(task));
        else
            return ResponseEntity.ok(null);
    }


    @RequestMapping(value = "/get/{idgroup}", method = RequestMethod.GET)
    public ResponseEntity<List<Task>> getTaskByIdGroup(@PathVariable(name = "idgroup")String id){
        return ResponseEntity.ok(taskService.getTaskByIdGroup(Long.valueOf(id)));
    }

    @RequestMapping(value ="/get/teacher/{idteacher}",method = RequestMethod.GET)
    public ResponseEntity<List<Task>> getTaskByIdTeacher(@PathVariable(name = "idteacher") String id){
        if(id != null){
            return  ResponseEntity.ok(taskService.getTaskByIdTeacher(Long.valueOf(id)));
        }else{
            return null;
        }
    }


    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteTaskById(@PathVariable(name = "id") String id){
        taskService.deleteTaskById(Long.valueOf(id));
    }
}
