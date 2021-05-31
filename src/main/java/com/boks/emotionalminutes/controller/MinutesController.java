package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.MinutesService;
import com.boks.emotionalminutes.web.dto.minutes.MinutesListResponseDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class MinutesController {
    private final MinutesService minutesService;

    @GetMapping("/api/user/{id}/minutes")
    public List<MinutesListResponseDto> findAll(@PathVariable Long id) {
        return minutesService.findAllDesc(id);
    }

    @PostMapping("/api/minutes")
    public Long save(@RequestBody MinutesRequestDto requestDto) {
        return minutesService.startRecord(requestDto);
    }

    @PutMapping("/api/minutes/{id}")
    public Long update(@PathVariable Long id) throws ParseException {
        return minutesService.update(id);
    }

    @GetMapping("/api/minutes/{id}")
    public MinutesResponseDto findById(@PathVariable Long id) {
        return minutesService.findById(id);
    }

    @PostMapping("/api/minutes/{code}")
    public MinutesResponseDto findByMinutesCodeAndPassword(@PathVariable String code, @RequestBody String password) {
        return  minutesService.findByMeetingCodeAndPassword(code, password);
    }

    @GetMapping("/api/minutes/{id}/voice")
    public String getVoiceFileLink(@PathVariable Long id) {
        return minutesService.getVoiceFileLink(id);
    }
}