package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.service.TotalEmotionsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class TotalEmotionsController {
    private final TotalEmotionsService totalEmotionsService;

    @PostMapping("/api/totalemotions")
    public TotalEmotions save(@RequestParam("minutes") Minutes minutes,
                              @RequestParam("happy") float happy,
                              @RequestParam("emotionless") float emotionless,
                              @RequestParam("sad") float sad,
                              @RequestParam("angry") float angry) {

        return totalEmotionsService.save(minutes, happy, emotionless, sad, angry);
    }
}
