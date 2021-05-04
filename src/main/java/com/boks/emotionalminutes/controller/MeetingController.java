package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.service.MeetingService;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class MeetingController {
    MeetingService meetingService;

    @PostMapping("/api/meeting")
    public Meeting save(@RequestBody MeetingRequestDto requestDto) {
        return meetingService.save(requestDto);
    }

    @GetMapping("/api/meeting/{code}")
    public MeetingResponseDto findByCode(@PathVariable String code) {
        return meetingService.findByCode(code);
    }
}
