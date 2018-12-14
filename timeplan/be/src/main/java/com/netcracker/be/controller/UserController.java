package com.netcracker.be.controller;

import com.netcracker.be.entity.User;
import com.netcracker.be.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/auth")
public class UserController {


    @Autowired
    private UserService userService;

    @GetMapping("/{value}")
    public User getUserByEmail(@PathVariable(name ="value") String value){
        return userService.getUserByEmail(value);
    }

}
