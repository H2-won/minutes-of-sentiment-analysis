package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.MinutesService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class MinutesController {
    private final MinutesService minutesService;

    @PostMapping("/api/minutes")
    public Minutes save(@RequestParam("meeting_code") Meeting meeting,
                                 @RequestParam("password") String password,
                                 @RequestParam("voice_file_link") String voiceFileLink) {
        return minutesService.save(meeting, password, voiceFileLink);
    }
}
