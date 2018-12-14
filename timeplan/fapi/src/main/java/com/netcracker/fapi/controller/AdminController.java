package com.netcracker.fapi.controller;

import com.netcracker.fapi.model.Admin;
import com.netcracker.fapi.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/ad")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/test/{email}/{password}", method = RequestMethod.GET)
    public Admin createTestAdmin(@PathVariable(name = "email") String email,
                                 @PathVariable(name = "password") String password){
        Admin admin = new Admin();
        admin.setEmail(email);
        admin.setPassword(password);
        admin.setRole("ADMIN");
        return adminService.createAdmin(admin);
    }

}
