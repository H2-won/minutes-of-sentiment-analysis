package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.user.UserResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;

    @Transactional(readOnly = true)
    public UserResponseDto findById(Long id) {
        User entity = userRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 유저가 없습니다. id=" + id));
        return new UserResponseDto(entity);
    }
}
