package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/api/user/{id}")
    public User findById(@PathVariable Long id) {
        return userService.findById(id);
    }
}
