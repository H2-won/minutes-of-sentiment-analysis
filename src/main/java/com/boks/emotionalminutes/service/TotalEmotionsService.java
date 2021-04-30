package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotionsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalEmotionsService {
    private final TotalEmotionsRepository totalEmotionsRepository;

    @Transactional
    public TotalEmotions save(Minutes minutes, float happy, float emotionless, float sad, float angry) {
        TotalEmotions totalEmotions = TotalEmotions.builder()
                .minutes(minutes)
                .happy(happy)
                .emotionless(emotionless)
                .sad(sad)
                .angry(angry)
                .build();

        totalEmotionsRepository.save(totalEmotions);
        return totalEmotions;
    }

}
