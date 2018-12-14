package com.netcracker.be.repository;

import com.netcracker.be.entity.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepository extends PagingAndSortingRepository<Teacher,Long> {
    Optional<Teacher> findByEmail(String email);
}
