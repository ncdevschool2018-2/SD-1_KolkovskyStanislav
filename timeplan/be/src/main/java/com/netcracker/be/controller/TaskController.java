package com.netcracker.be.controller;


import com.netcracker.be.entity.Task;
import com.netcracker.be.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(value="/gets/{idgroup}",method = RequestMethod.GET)
    public Iterable<Task> getTaskByGroup(@PathVariable(name = "idgroup") Long idgroup){
        if(idgroup != null){
            return taskService.getTaskByIdGroup(idgroup);
        }else {
            return null;
        }
    }

    @RequestMapping(value = "/gets/teachers/{idteacher}", method = RequestMethod.GET)
    public Iterable<Task> getTaskByTeacher(@PathVariable(name = "idteacher")Long id){
        if(id != null){
            return taskService.getTaskByIdTeacher(id);
        }else{
            return null;
        }
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Task addTask(@RequestBody Task task){
        if(task != null){
            return taskService.addTask(task);
        }else{
            return null;
        }
    }


    @RequestMapping(value = "/delete/{id}", method = RequestMethod.DELETE)
    public void deleteTaskById(@PathVariable(name = "id")Long id){
        taskService.deleteTaskById(id);
    }


}
