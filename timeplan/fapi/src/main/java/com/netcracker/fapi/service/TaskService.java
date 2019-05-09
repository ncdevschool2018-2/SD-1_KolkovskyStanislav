package com.netcracker.fapi.service;


import com.netcracker.fapi.model.Task;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.awt.image.AreaAveragingScaleFilter;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class TaskService {

    @Value("${backend.server.url}")
    private String backendServerUrl;

    public Task addTask(Task task) {
        RestTemplate restTemplate = new RestTemplate();
        List<Task> tasks = Arrays.asList(restTemplate.getForObject(backendServerUrl + "/api/task/gets/" + task.getGroup().getId(), Task[].class));
        if (tasks.size() == 0) {
            return restTemplate.postForEntity(backendServerUrl + "/api/task/add", task, Task.class).getBody();
        } else {
            for (Task task1 : tasks) {
                if (task1.getDay().equals(task.getDay()) && task1.getTime().equals(task.getTime())) {
                    return new Task();
                }
            }
            return restTemplate.postForEntity(backendServerUrl + "/api/task/add", task, Task.class).getBody();
        }
    }

    public List<Task> getTaskByIdGroup(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        List<Task> taskList = Arrays.asList(restTemplate.getForObject(backendServerUrl + "/api/task/gets/" + id, Task[].class));
        sortTaskList(taskList);
        return taskList;
    }

    public List<Task> getTaskByIdTeacher(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        List<Task> taskList = Arrays.asList(restTemplate.getForObject(backendServerUrl + "/api/task/gets/teachers/" + id, Task[].class));
        sortTaskList(taskList);
        return taskList;
    }


    public void deleteTaskById(Long id) {
        RestTemplate restTemplate = new RestTemplate();
        restTemplate.delete(backendServerUrl + "/api/task/delete/" + id);
    }


    private void sortTaskList(List<Task> list) {
        Collections.sort(list, new Comparator<Task>() {
            @Override
            public int compare(Task o1, Task o2) {
                return o1.getDay() < o2.getDay() ? -1 : (o1.getDay() > o2.getDay()) ? 1 : 0;
            }
        });

        Collections.sort(list, new Comparator<Task>() {
            @Override
            public int compare(Task o1, Task o2) {
                if (o1.getDay() == o2.getDay()) {
                    return o1.getTime() < o2.getTime() ? -1 : (o1.getTime() > o2.getTime()) ? 1 : 0;
                }
                return 0;
            }
        });

    }
}
