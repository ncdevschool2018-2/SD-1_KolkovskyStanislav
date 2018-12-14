package com.netcracker.be.service;


import com.netcracker.be.entity.Admin;
import com.netcracker.be.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    private AdminRepository adminRepository;

    @Autowired
    public AdminService(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    public Admin createAdmin(Admin admin){
        return adminRepository.save(admin);
    }


}
