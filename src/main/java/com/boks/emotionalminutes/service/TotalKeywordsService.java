package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywordsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalKeywordsService {
    private final TotalKeywordsRepository totalKeywordsRepository;

    @Transactional
    public TotalKeywords save(Minutes minutes, String mainKeyword1, String mainKeyword2, String mainKeyword3,
                              String mainKeyword4, String mainKeyword5) {
        TotalKeywords totalKeywords = TotalKeywords.builder()
                .minutes(minutes)
                .mainKeyword1(mainKeyword1)
                .mainKeyword2(mainKeyword2)
                .mainKeyword3(mainKeyword3)
                .mainKeyword4(mainKeyword4)
                .mainKeyword5(mainKeyword5)
                .build();

        totalKeywordsRepository.save(totalKeywords);
        return totalKeywords;
    }
}
