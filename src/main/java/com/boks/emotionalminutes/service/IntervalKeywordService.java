package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywordsRepository;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class IntervalKeywordService {
    private final IntervalKeywordsRepository intervalKeywordsRepository;

    @Transactional
    public IntervalKeywords save(Minutes minutes, String interval1Keywords, String interval2Keywords,
                            String interval3Keywords, String interval4Keywords, String interval5Keywords) {
        IntervalKeywords intervalKeywords = IntervalKeywords.builder()
                .minutes(minutes)
                .interval1Keywords(interval1Keywords)
                .interval2Keywords(interval2Keywords)
                .interval3Keywords(interval3Keywords)
                .interval4Keywords(interval4Keywords)
                .interval5Keywords(interval5Keywords)
                .build();

        intervalKeywordsRepository.save(intervalKeywords);
        return intervalKeywords;
    }
}
