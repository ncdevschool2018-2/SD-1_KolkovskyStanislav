package com.netcracker.be.repository;

import com.netcracker.be.entity.StudentModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends CrudRepository<StudentModel,Long> {
}
