package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Subject {

    private Long idsubjects;
    private String name;
    @JsonIgnore
    private List<Teacher> teacherList;

    public Subject() {
    }


    public Subject(Long idsubjects, String name, List<Teacher> teacherList) {
        this.idsubjects = idsubjects;
        this.name = name;
        this.teacherList = teacherList;
    }

    public Long getIdsubjects() {
        return idsubjects;
    }

    public void setIdsubjects(Long idsubjects) {
        this.idsubjects = idsubjects;
    }

    public List<Teacher> getTeacherList() {
        return teacherList;
    }

    public void setTeacherList(List<Teacher> teacherList) {
        this.teacherList = teacherList;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
