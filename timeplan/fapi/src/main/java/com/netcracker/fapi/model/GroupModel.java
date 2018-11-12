package com.netcracker.fapi.model;

public class GroupModel {
    private Long idgroup;
    private String name;

    public GroupModel() {
    }

    public GroupModel(Long id, String name) {
        this.idgroup = id;
        this.name = name;
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
}
