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

    // 2021.05.25 사용하지 않는 API
//    @PostMapping("/api/total-emotions")
//    public Long save(@RequestBody TotalEmotionsRequestDto requestDto) {
//        return totalEmotionsService.save(requestDto);
//    }

    @GetMapping("/api/minutes/{id}/total-emotions")
    public TotalEmotionsResponseDto findByMinutesId(@PathVariable Long id) {
        return totalEmotionsService.findByMinutesId(id);
    }
}
