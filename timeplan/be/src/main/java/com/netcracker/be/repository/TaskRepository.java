package com.netcracker.be.repository;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    List<Task> findAllByGroup(Group group);
    List<Task> findAllByTeacherIdteachers(Long id);
    Optional<Task> findById(Long id);
    List<Task> findAllByGroupId(Long id);



}
