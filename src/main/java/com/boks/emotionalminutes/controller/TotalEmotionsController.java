package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.service.TotalEmotionsService;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsRequestDto;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class TotalEmotionsController {
    private final TotalEmotionsService totalEmotionsService;

    @PostMapping("/api/total-emotions")
    public Long save(@RequestBody TotalEmotionsRequestDto requestDto) {
        return totalEmotionsService.save(requestDto);
    }

    @GetMapping("/api/total-emotions/{minutesId}")
    public TotalEmotionsResponseDto findByMinutesId(@PathVariable Long minutesId) {
        return totalEmotionsService.findByMinutesId(minutesId);
    }
}
