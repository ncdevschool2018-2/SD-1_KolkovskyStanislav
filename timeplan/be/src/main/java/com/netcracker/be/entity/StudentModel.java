package com.netcracker.be.entity;

import javax.persistence.*;

@Entity
@Table(name ="students")
public class StudentModel {
    @Id
    private Long idstudents;
    @Column(name="fname")
    private String fname;
    @Column(name="lname")
    private String lname;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;
    @Column(name="ng")
    private String ng;

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
