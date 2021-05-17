package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.IntervalKeywordService;
import com.boks.emotionalminutes.web.dto.intervalKeywords.IntervalKeywordsRequestDto;
import com.boks.emotionalminutes.web.dto.intervalKeywords.IntervalKeywordsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class IntervalKeywordsController {
    private final IntervalKeywordService intervalKeywordService;

    @PostMapping("/api/minutes/{id}/interval-keywords")
    public Long save(@PathVariable Long id, @RequestBody IntervalKeywordsRequestDto requestDto) {
        return intervalKeywordService.save(id, requestDto);
    }

    @GetMapping("/api/minutes/{id}/interval-keywords")
    public IntervalKeywordsResponseDto find(@PathVariable Long id) {
        return intervalKeywordService.findById(id);
    }
}
