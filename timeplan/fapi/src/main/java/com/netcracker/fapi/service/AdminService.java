package com.netcracker.fapi.service;

import com.netcracker.fapi.model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AdminService {
    @Value("${backend.server.url}")
    private String backendServerUrl;

    @Bean
    PasswordEncoder getEncoder() {
        return new BCryptPasswordEncoder();
    }

    public Admin createAdmin(Admin admin){
        admin.setPassword(getEncoder().encode(admin.getPassword()));
        RestTemplate restTemplate = new RestTemplate();
        Admin admin1 = restTemplate.postForEntity(backendServerUrl + "/api/admin/add",admin,Admin.class).getBody();
        return admin1;
    }
}
