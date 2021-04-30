package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.service.SentenceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.sql.Time;

@RequiredArgsConstructor
@RestController
public class SentenceController {
    private final SentenceService sentenceService;

    @PostMapping("/api/sentence")
    public Sentence save(@RequestParam("user_id") User user,
                         @RequestParam("minutes_id") Minutes minutes,
                         @RequestParam("content") String content,
                         @RequestParam("emotion") String emotion,
                         @RequestParam("created_time") Time created_time) {

        return sentenceService.save(user, minutes, content, emotion, created_time);
    }
}
