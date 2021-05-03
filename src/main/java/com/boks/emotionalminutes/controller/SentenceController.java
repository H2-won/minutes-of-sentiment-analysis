package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.service.SentenceService;
import com.boks.emotionalminutes.web.dto.sentence.SentenceRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class SentenceController {
    private final SentenceService sentenceService;

    @PostMapping("/api/sentence")
    public Sentence save(@RequestBody SentenceRequestDto sentenceRequestDto) {
        return sentenceService.save(sentenceRequestDto);
    }
}
