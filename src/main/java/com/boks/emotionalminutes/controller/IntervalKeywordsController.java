package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.IntervalKeywordService;
import com.boks.emotionalminutes.web.dto.intervalKeywords.IntervalKeywordsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class IntervalKeywordsController {
    private final IntervalKeywordService intervalKeywordService;

    @PostMapping("/api/interval-keywords")
    public Long save(@RequestBody IntervalKeywordsRequestDto requestDto) {
        return intervalKeywordService.save(requestDto);
    }
}
