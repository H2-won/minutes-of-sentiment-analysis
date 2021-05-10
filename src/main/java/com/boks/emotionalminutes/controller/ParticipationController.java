package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.service.ParticipationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class ParticipationController {
    private final ParticipationService participationService;

    @PostMapping("/api/participation")
    public Long save(@RequestParam("user_id") User user,
                              @RequestParam("meeting_id")Meeting meeting) {

        return participationService.save(user, meeting);
    }

}
