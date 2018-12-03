package com.netcracker.fapi.service;


import com.netcracker.fapi.model.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class TaskSerice {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public Task addTask(Task task){

        RestTemplate restTemplate = new RestTemplate();

        Task [ ] tasks = restTemplate.getForObject(backendServerUrl + "/api/task/gets/"+ task.getGroup().getId(), Task[].class);
        if(tasks == null){
            return  restTemplate.postForEntity(backendServerUrl + "/api/task/add", task, Task.class ).getBody();
        }else{
            List<Task> taskList = Arrays.asList(tasks);
            for(Task task1 : taskList){
                if(task1.getDay() == task.getDay()
                    && task1.getTime() == task.getTime()){
                    return  new Task();
                }
            }
            return  restTemplate.postForEntity(backendServerUrl + "/api/task/add", task, Task.class ).getBody();
        }
    }

    public List<Task> getTaskByIdGroup(Long id){
        RestTemplate restTemplate = new RestTemplate();
        Task[] tasks = restTemplate.getForObject(backendServerUrl + "/api/task/gets/" + id,Task[].class);

        List<Task> taskList = Arrays.asList(tasks);

        sortTaskList(taskList);

        return taskList;
    }

    public List<Task> getTaskByIdTeacher(Long id){
        RestTemplate restTemplate = new RestTemplate();
        Task[] tasks = restTemplate.getForObject(backendServerUrl + "/api/task/gets/teachers/"+id,Task[].class);
        List<Task> taskList = Arrays.asList(tasks);

        sortTaskList(taskList);

        return taskList;

    }


    public void deleteTaskById(Long id){
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/task/delete/"+id);
    }


    private void sortTaskList(List<Task> list){
        Collections.sort(list, new Comparator<Task>() {
            @Override
            public int compare(Task o1, Task o2) {
                return o1.getDay() < o2.getDay() ? -1 : (o1.getDay() > o2.getDay()) ? 1 : 0;
            }
        });

        Collections.sort(list, new Comparator<Task>() {
            @Override
            public int compare(Task o1, Task o2) {
                if(o1.getDay() == o2.getDay()){
                    return o1.getTime() < o2.getTime() ? -1 : (o1.getTime() > o2.getTime()) ? 1 : 0;
                }
                return 0;
            }
        });

    }
}
