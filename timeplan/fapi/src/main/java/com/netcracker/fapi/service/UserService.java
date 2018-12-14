package com.netcracker.fapi.service;

import com.netcracker.fapi.model.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashSet;
import java.util.Set;

@Service("customUserDetailService")
public class UserService implements UserDetailsService {
    @Value("${backend.server.url}")
    private String backendServerUrl;


    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        RestTemplate restTemplate = new RestTemplate();
        User user = restTemplate.getForObject(backendServerUrl + "/api/auth/"+ s, User.class);
        if(user != null){
            return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),getAuthority(user))   ;
        }else return  null;
    }

    private Set<SimpleGrantedAuthority> getAuthority(User user) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getRole()));
        return authorities;
    }
}
