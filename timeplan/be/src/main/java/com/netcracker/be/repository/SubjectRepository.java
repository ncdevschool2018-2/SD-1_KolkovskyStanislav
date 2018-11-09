package com.netcracker.be.repository;

import com.netcracker.be.entity.SubjectModel;
import javafx.scene.shape.CubicCurve;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends CrudRepository<SubjectModel,Long> {
}
