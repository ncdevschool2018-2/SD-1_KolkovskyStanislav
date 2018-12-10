package com.netcracker.be.repository;

import com.netcracker.be.entity.Teacher;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeacherRepository extends PagingAndSortingRepository<Teacher,Long> {
}
