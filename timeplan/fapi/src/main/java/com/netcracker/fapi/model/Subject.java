package com.netcracker.fapi.model;

import java.util.List;

public class Subject {

    private Long idsubject;
    private String name;

    private List<Teacher> teacherList;

    public Subject() {
    }

    public Subject(Long idsubject, String name, List<Teacher> teacherList) {
        this.idsubject = idsubject;
        this.name = name;
        this.teacherList = teacherList;
    }

    public List<Teacher> getTeacherList() {
        return teacherList;
    }

    public void setTeacherList(List<Teacher> teacherList) {
        this.teacherList = teacherList;
    }

    public Long getIdsubject() {
        return idsubject;
    }

    public void setIdsubject(Long idsubject) {
        this.idsubject = idsubject;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
