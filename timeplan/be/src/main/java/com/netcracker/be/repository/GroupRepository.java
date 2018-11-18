package com.netcracker.be.repository;

import com.netcracker.be.entity.Group;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface GroupRepository extends CrudRepository<Group,Long> {
}
