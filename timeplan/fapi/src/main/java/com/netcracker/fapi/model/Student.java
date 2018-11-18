package com.netcracker.fapi.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

//@JsonIgnoreProperties(ignoreUnknown = true)
public class Student {

    private Long idstudents;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private Group group;

    public Student() {
    }

    public Student(Long idstudents, String fname, String lname, String email, String password, Group group) {
        this.idstudents = idstudents;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.group = group;
    }

    public Long getIdstudents() {
        return idstudents;
    }

    public void setIdstudents(Long idstudents) {
        this.idstudents = idstudents;
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

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
