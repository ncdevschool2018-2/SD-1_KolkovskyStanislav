package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.List;

//@JsonIgnoreProperties(ignoreUnknown = true)
public class Group {

    private Long idgroup;
    private String name;

    private List<Student> studentList;

    public Group() {
    }


    public Group(Long idgroup, String name, List<Student> studentList) {
        this.idgroup = idgroup;
        this.name = name;
        this.studentList = studentList;
    }

    public Long getId() {
        return idgroup;
    }

    public void setId(Long id) {
        this.idgroup = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getIdgroup() {
        return idgroup;
    }

    public void setIdgroup(Long idgroup) {
        this.idgroup = idgroup;
    }

    public List<Student> getStudentList() {
        return studentList;
    }

    public void setStudentList(List<Student> studentList) {
        this.studentList = studentList;
    }
}
