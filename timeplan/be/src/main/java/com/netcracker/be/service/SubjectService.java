package com.netcracker.be.service;

import com.netcracker.be.entity.SubjectModel;
import com.netcracker.be.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubjectService {


    private SubjectRepository subjectRepository;

    @Autowired
    public SubjectService(SubjectRepository repository){
        this.subjectRepository = repository;
    }

    public SubjectModel createSubject(SubjectModel subjectModel){
        return subjectRepository.save(subjectModel);
    }

    public Iterable<SubjectModel> getSubjects(){
        return subjectRepository.findAll();
    }
}
