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

import javax.servlet.http.HttpServletRequest;

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
    public UserResponseDto findByToken(HttpServletRequest request) {
        String jwt = request.getHeader("Authorization").substring(7);
        Long id = tokenProvider.getUserIdFromToken(jwt);
        return userService.findById(id);
    }
}
