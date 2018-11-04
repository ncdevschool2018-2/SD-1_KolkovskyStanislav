package com.netcracker.fapi.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class TeacherModel {
    private Long id;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String level;

    public TeacherModel() {
    }

    public TeacherModel(Long id, String fname, String lname, String email, String password, String level) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.level = level;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFname() {
        return fname;
    }

    public void setFname(String fname) {
        this.fname = fname;
    }

    public String getLname() {
        return lname;
    }

    public void setLname(String lname) {
        this.lname = lname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
