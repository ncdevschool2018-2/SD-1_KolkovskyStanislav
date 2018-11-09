package com.netcracker.fapi.model;

public class SubjectModel {

    private Long idsubject;
    private String name;

    public SubjectModel() {
    }

    public SubjectModel(Long idsubject, String name) {
        this.idsubject = idsubject;
        this.name = name;
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
