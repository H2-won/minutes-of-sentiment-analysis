package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import com.boks.emotionalminutes.service.TotalKeywordsService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class TotalKeywordsController {
    private final TotalKeywordsService totalKeywordsService;

    @PostMapping("/api/total-keywords")
    public TotalKeywords save(@RequestParam("minutes") Minutes minutes,
                              @RequestParam("main_keyword1") String mainKeywords1,
                              @RequestParam("main_keyword2") String mainKeywords2,
                              @RequestParam("main_keyword3") String mainKeywords3,
                              @RequestParam("main_keyword4") String mainKeywords4,
                              @RequestParam("main_keyword5") String mainKeywords5) {

        return totalKeywordsService.save(minutes, mainKeywords1, mainKeywords2,
                mainKeywords3, mainKeywords4, mainKeywords5);
    }


}
