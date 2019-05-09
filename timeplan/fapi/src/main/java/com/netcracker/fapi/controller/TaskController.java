package com.netcracker.fapi.controller;


import com.netcracker.fapi.model.Task;
import com.netcracker.fapi.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/TaskController")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(value = "/addTask", method = RequestMethod.POST)
    public ResponseEntity<Task> addTask(@RequestBody Task task) {
        if (task != null)
            return ResponseEntity.ok(taskService.addTask(task));
        else
            return ResponseEntity.ok(null);
    }

    @RequestMapping(value = "/getTaskByGroup", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN') or hasRole('STUDENT')")
    public ResponseEntity<List<Task>> getTaskByIdGroup(@RequestParam(name = "id") String id) {
        return ResponseEntity.ok(taskService.getTaskByIdGroup(Long.valueOf(id)));
    }

    @RequestMapping(value = "/getTaskByTeacher", method = RequestMethod.GET)
    @PreAuthorize("hasRole('ADMIN') or hasRole('TEACHER')")
    public ResponseEntity<List<Task>> getTaskByIdTeacher(@RequestParam(name = "id") String id) {
        if (id != null) {
            return ResponseEntity.ok(taskService.getTaskByIdTeacher(Long.valueOf(id)));
        } else {
            return ResponseEntity.ok(null);
        }
    }

    @RequestMapping(value = "/deleteTask/{id}", method = RequestMethod.DELETE)
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteTaskById(@PathVariable(name = "id") String id) {
        taskService.deleteTaskById(Long.valueOf(id));
    }
}
