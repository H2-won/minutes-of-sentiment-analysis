package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.service.MeetingService;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class MeetingController {

    MeetingService meetingService;

    @PostMapping("/api/meeting")
    public Meeting save(@RequestBody MeetingRequestDto requestDto) {
        return meetingService.save(requestDto);
    }
}
