package com.netcracker.be.repository;

import com.netcracker.be.entity.TeacherModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends CrudRepository<TeacherModel,Long> {
}
