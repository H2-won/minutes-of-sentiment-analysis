package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.service.TotalEmotionsService;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class TotalEmotionsController {
    private final TotalEmotionsService totalEmotionsService;

    @PostMapping("/api/total-emotions")
    public TotalEmotions save(@RequestBody TotalEmotionsRequestDto requestDto) {
        return totalEmotionsService.save(requestDto);
    }
}
