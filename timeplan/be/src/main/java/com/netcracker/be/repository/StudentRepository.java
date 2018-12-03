package com.netcracker.be.repository;

import com.netcracker.be.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends CrudRepository<Student,Long> {
    List<Student> findAllByLname(String fname);
}
