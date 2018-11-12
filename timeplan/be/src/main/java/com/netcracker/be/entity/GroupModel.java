package com.netcracker.be.entity;

import javax.persistence.*;

@Entity
@Table(name="groups")
public class GroupModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long idgroup;
    private String name;



    public Long getIdgroup() {
        return idgroup;
    }

    public void setIdgroup(Long idgroup) {
        this.idgroup = idgroup;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
