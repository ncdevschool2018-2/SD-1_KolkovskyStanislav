package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Subject {
    private Long idsubject;
    private String name;
    private List<Teacher> teachers;
    @JsonIgnore
    private List<Group> groups;

    public Subject() {
    }


    public Subject(Long idsubject, String name, List<Teacher> teachers) {
        this.idsubject = idsubject;
        this.name = name;
        this.teachers = teachers;
    }

    public Long getIdsubject() {
        return idsubject;
    }

    public void setIdsubject(Long idsubject) {
        this.idsubject = idsubject;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }

    public List<Group> getGroups() {
        return groups;
    }

    public void setGroups(List<Group> groups) {
        this.groups = groups;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
