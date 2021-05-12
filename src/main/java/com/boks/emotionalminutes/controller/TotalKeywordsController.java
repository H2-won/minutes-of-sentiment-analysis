package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.service.TotalKeywordsService;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsRequestDto;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class TotalKeywordsController {
    private final TotalKeywordsService totalKeywordsService;

    @PostMapping("/api/total-keywords")
    public Long save(@RequestBody TotalKeywordsRequestDto requestDto) {
        return totalKeywordsService.save(requestDto);
    }

    @GetMapping("/api/minutes/{id}/total-keywords")
    public TotalKeywordsResponseDto findByMinutesId(@PathVariable Long id) {
        return totalKeywordsService.findByMinutesId(id);
    }
}
