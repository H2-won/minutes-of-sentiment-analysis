package com.boks.emotionalminutes.controller;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.service.IntervalKeywordService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class IntervalKeywordsController {
    private final IntervalKeywordService intervalKeywordService;

    @PostMapping("/api/intervalkeywords")
    public IntervalKeywords save(@RequestParam("minutes") Minutes minutes,
                                 @RequestParam("interval1_keywords") String interval1Keywords,
                                 @RequestParam("interval2_keywords") String interval2Keywords,
                                 @RequestParam("interval3_keywords") String interval3Keywords,
                                 @RequestParam("interval4_keywords") String interval4Keywords,
                                 @RequestParam("interval5_keywords") String interval5Keywords) {

        return intervalKeywordService.save(minutes, interval1Keywords, interval2Keywords, interval3Keywords,
                interval4Keywords, interval5Keywords);
    }
}
