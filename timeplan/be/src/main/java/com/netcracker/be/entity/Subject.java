package com.netcracker.be.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;
import java.util.Objects;
import java.util.Set;

@Entity
@Table(name = "subjects")
public class Subject {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idsubjects;
    private String name;

    @ManyToMany(fetch = FetchType.LAZY,  mappedBy = "subjects")
    @JsonIgnore
    private List<Teacher> teachers;

    @ManyToMany(fetch = FetchType.LAZY,  mappedBy = "subjects")
    @JsonIgnore
    private List<Group> groups;

    @OneToMany(mappedBy = "subject", fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Task> tasks;

    public Subject(){}

    public Long getIdsubjects() {
        return idsubjects;
    }

    public void setIdsubjects(Long idsubjects) {
        this.idsubjects = idsubjects;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Teacher> getTeachers() {
        return teachers;
    }

    public void setTeachers(List<Teacher> teachers) {
        this.teachers = teachers;
    }
    public void addTeacher(Teacher teacher) { this.teachers.add(teacher);}

    public List<Group> getGroups() {
        return groups;
    }

    public void setGroups(List<Group> groups) {
        this.groups = groups;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Subject)) return false;
        Subject subject = (Subject) o;
        return Objects.equals(getIdsubjects(), subject.getIdsubjects()) &&
                Objects.equals(getName(), subject.getName());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdsubjects(), getName());
    }
}
