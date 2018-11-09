package com.netcracker.be.entity;


import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "subjects")
public class SubjectModel {

    @Id
    private Long idsubject;
    private String name;

    public SubjectModel(){}

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
