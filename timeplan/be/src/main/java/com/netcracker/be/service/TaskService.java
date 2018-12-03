package com.netcracker.be.service;


import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Task;
import com.netcracker.be.repository.GroupRepository;
import com.netcracker.be.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class TaskService {

    private TaskRepository taskRepository;
    private GroupRepository groupRepository;

    @Autowired
    public TaskService(TaskRepository repository, GroupRepository groupRepository){
        this.taskRepository = repository;
        this.groupRepository = groupRepository;
    }

    public Task addTask(Task task){
        return taskRepository.save(task);
    }

    public Iterable<Task> getTaskByIdGroup(Long idgroup){
       // Optional<Group> groupOptional = groupRepository.findById(idgroup);
        Iterable<Task> taskIterable = taskRepository.findAllByGroupId(idgroup);
        return  taskIterable;
    }


    public Optional<Task> getTask(Long id){
        return taskRepository.findById(id);
    }

    public Iterable<Task> getTaskByIdTeacher(Long idteacher){
        return taskRepository.findAllByTeacherIdteachers(idteacher);
    }


    public void deleteTaskById(Long id){
         taskRepository.deleteById(id);
    }


 }
