package com.netcracker.fapi.model;

public class User {

    private java.lang.String email;
    private java.lang.String password;
    private String role;



    public String getRole() {
        return role;
    }

    public void setRole(String string) {
        this.role = string;
    }


    public java.lang.String getEmail() {
        return email;
    }

    public void setEmail(java.lang.String email) {
        this.email = email;
    }

    public java.lang.String getPassword() {
        return password;
    }

    public void setPassword(java.lang.String password) {
        this.password = password;
    }
}
