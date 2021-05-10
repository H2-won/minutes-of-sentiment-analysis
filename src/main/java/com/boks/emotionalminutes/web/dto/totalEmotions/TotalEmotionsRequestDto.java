package com.boks.emotionalminutes.web.dto.totalEmotions;

import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TotalEmotionsRequestDto {
    private MinutesRepository minutesRepository;

    private Long minutesId;
    private float happy;
    private float emotionless;
    private float sad;
    private float angry;

    public TotalEmotions toEntity() {
        return TotalEmotions.builder()
                .minutes(minutesRepository.findById(minutesId).get())
                .happy(happy)
                .emotionless(emotionless)
                .sad(sad)
                .angry(angry)
                .build();
    }
}
