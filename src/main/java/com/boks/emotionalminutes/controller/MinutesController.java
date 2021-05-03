package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.MinutesService;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@RequiredArgsConstructor
@RestController
public class MinutesController {
    private final MinutesService minutesService;

    @PostMapping("/api/minutes")
    public Minutes save(@RequestBody MinutesRequestDto requestDto) {
        return minutesService.save(requestDto);
    }

    @PutMapping("/api/minutes/{id}")
    public Minutes update(@PathVariable Long id) throws ParseException {
        return minutesService.update(id);
    }

    @GetMapping("/api/minutes/{id}")
    public MinutesResponseDto findById(@PathVariable Long id) {
        return minutesService.findById(id);
    }
}