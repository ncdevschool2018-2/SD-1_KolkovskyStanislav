package com.netcracker.be.repository;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Student;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface GroupRepository extends CrudRepository<Group,Long> {
}
