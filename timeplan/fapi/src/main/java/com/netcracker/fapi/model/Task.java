package com.netcracker.fapi.model;

public class Task {

    private Long id;
    private Long day;
    private Long time;
    private Group group;
    private Subject subject;
    private Teacher teacher;

    public Task() {
    }

    public Task(Long id, Long day, Long time, Group group, Subject subject, Teacher teacher) {
        this.id = id;
        this.day = day;
        this.time = time;
        this.group = group;
        this.subject = subject;
        this.teacher = teacher;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getDay() {
        return day;
    }

    public void setDay(Long day) {
        this.day = day;
    }

    public Long getTime() {
        return time;
    }

    public void setTime(Long time) {
        this.time = time;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }

    public Subject getSubject() {
        return subject;
    }

    public void setSubject(Subject subject) {
        this.subject = subject;
    }

    public Teacher getTeacher() {
        return teacher;
    }

    public void setTeacher(Teacher teacher) {
        this.teacher = teacher;
    }
}
