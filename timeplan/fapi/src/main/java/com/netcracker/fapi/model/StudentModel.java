package com.netcracker.fapi.model;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.Id;

@JsonIgnoreProperties(ignoreUnknown = true)
public class StudentModel {

    private Long idstudents;
    private String fname;
    private String lname;
    private String email;
    private String password;
    private String ng;


    public StudentModel() {
    }

    public StudentModel(Long idstudents, String fname, String lname, String email, String password, String ng) {
        this.idstudents = idstudents;
        this.fname = fname;
        this.lname = lname;
        this.email = email;
        this.password = password;
        this.ng = ng;
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

    public String getNg() {
        return ng;
    }

    public void setNg(String ng) {
        this.ng = ng;
    }
}
