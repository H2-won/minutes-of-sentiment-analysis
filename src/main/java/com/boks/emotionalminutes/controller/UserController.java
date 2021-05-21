package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.security.TokenProvider;
import com.boks.emotionalminutes.security.UserPrincipal;
import com.boks.emotionalminutes.service.UserService;
import com.boks.emotionalminutes.web.dto.user.UserResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private TokenProvider tokenProvider;

    @GetMapping("/api/user/{id}")
    public UserResponseDto findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @GetMapping("/api/user-info")
    public UserResponseDto findByToken() {
        UserPrincipal userPrincipal = (UserPrincipal) SecurityContextHolder.getContext().getAuthentication().getDetails();
        Long id = userPrincipal.getId();
        return userService.findById(id);
    }
}
