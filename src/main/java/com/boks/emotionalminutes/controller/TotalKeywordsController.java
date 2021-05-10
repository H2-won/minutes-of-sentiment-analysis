package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import com.boks.emotionalminutes.service.TotalKeywordsService;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class TotalKeywordsController {
    private final TotalKeywordsService totalKeywordsService;

    @PostMapping("/api/total-keywords")
    public Long save(@RequestBody TotalKeywordsRequestDto requestDto) {
        return totalKeywordsService.save(requestDto);
    }
}
