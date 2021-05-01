package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.MinutesService;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MinutesController {
    private final MinutesService minutesService;

    @PostMapping("/api/minutes")
    public Minutes save(@RequestBody MinutesRequestDto requestDto) {
        return minutesService.save(requestDto);
    }
}
