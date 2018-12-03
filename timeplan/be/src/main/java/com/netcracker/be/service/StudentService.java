package com.netcracker.be.service;

import com.netcracker.be.entity.Group;
import com.netcracker.be.entity.Subject;
import com.netcracker.be.repository.GroupRepository;
import com.netcracker.be.repository.StudentRepository;
import com.netcracker.be.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class StudentService {

    private StudentRepository studentRepository;
    private GroupRepository groupRepository;

    @Autowired
    public StudentService(StudentRepository repository, GroupRepository groupRepository) {
        this.studentRepository = repository;
        this.groupRepository = groupRepository;
    }

    public Student saveStudentAccount(Student studentModel){
        return  studentRepository.save(studentModel);
    }

    public Iterable<Student> saveAllStudents(Iterable<Student> students){
        return studentRepository.saveAll(students);
    }

    public Iterable<Student> addStudentInGroup(HashMap<Long , List<Student>> hashMap){
        Long id = null;
        List<Student> studentList = new ArrayList<>();

        for(Map.Entry<Long, List<Student>> entry : hashMap.entrySet()){
            id = entry.getKey();
            studentList = entry.getValue();
        }

        Optional<Group> groupOptional = groupRepository.findById(id);
        Group group = groupOptional.isPresent()? groupOptional.get() : new Group();

        for(int i = 0; i < studentList.size(); i++){
            studentList.get(i).setGroup(group);
        }

        return studentRepository.saveAll(studentList);

    }

    public Iterable<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    public Iterable<Student> getAllStudentsNotGroup(){

        Iterable<Student> studentModels = studentRepository.findAll() ;
        Iterator<Student> iterator = studentModels.iterator();
        List<Student> studentModelList = new ArrayList<Student>();

        while(iterator.hasNext()){
            Student student = iterator.next();
            if(student.getGroup() == null){
                studentModelList.add(student);
            }
        }
        return studentModelList;
    }

    public Iterable<Student> getAllStudentsByGroupId(Long id){

        Iterable<Student> studentIterable = studentRepository.findAll();
        Iterator<Student> studentIterator = studentIterable.iterator();
        List<Student> students = new ArrayList<>();

        while(studentIterator.hasNext()){
            Student student = new Student();
            student = studentIterator.next();
            if(student.getGroup() != null && student.getGroup().getId().equals(id)){
                students.add(student);
            }
        }
        return students;
    }

    public void deleteStudent(Long id){
        //can't delete if group setted
        studentRepository.deleteById(id);
    }

    public Student removeGroup(Long id){
        Optional<Student> studentOptional  = studentRepository.findById(id);
        Student student = studentOptional.get();
        student.setGroup(null);
        return studentRepository.save(student);
    }



    public List<Student> getStudentByLname(String string){
        List<Student> list = studentRepository.findAllByLname(string);
        return  list;
    }
}
