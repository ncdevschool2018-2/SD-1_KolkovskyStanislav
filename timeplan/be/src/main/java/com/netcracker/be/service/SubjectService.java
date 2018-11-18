package com.netcracker.be.service;

import com.netcracker.be.entity.Subject;
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

    public Subject createSubject(Subject subject){
        return subjectRepository.save(subject);
    }

    public Iterable<Subject> getSubjects(){
        return subjectRepository.findAll();
    }

    public void deleteSubject(Long id){ subjectRepository.deleteById(id);}
}
