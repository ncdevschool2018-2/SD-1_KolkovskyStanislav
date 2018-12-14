package com.netcracker.be.controller;

import com.netcracker.be.entity.Admin;
import com.netcracker.be.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Admin addAdmin(@RequestBody Admin admin){
        if(admin != null) {
            return adminService.createAdmin(admin);
        }else return null;
    }


}
