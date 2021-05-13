package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.service.SentenceService;
import com.boks.emotionalminutes.web.dto.sentence.SentenceRequestDto;
import com.boks.emotionalminutes.web.dto.sentence.SentenceResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class SentenceController {
    private final SentenceService sentenceService;

    @PostMapping("/api/sentence")
    public Long save(@RequestBody SentenceRequestDto sentenceRequestDto) {
        return sentenceService.save(sentenceRequestDto);
    }

    @GetMapping("/api/minutes/{id}/sentences")
    public List<SentenceResponseDto> findById(@PathVariable Long id) {
        return sentenceService.findById(id);
    }
}
