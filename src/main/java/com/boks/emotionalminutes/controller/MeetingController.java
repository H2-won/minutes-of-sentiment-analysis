package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.service.MeetingService;
import com.boks.emotionalminutes.web.dto.meeting.MeetingCodeResponseDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class MeetingController {
    private final MeetingService meetingService;

    @PostMapping("/api/meeting")
    public MeetingCodeResponseDto save(@RequestBody MeetingRequestDto requestDto) {
        return new MeetingCodeResponseDto(meetingService.save(requestDto));
    }

    @GetMapping("/api/meeting/{code}")
    public MeetingResponseDto findByCode(@PathVariable String code) {
        return meetingService.findByCode(code);
    }
}
