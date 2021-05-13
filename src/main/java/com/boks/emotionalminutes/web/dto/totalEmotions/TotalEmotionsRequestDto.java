package com.boks.emotionalminutes.web.dto.totalEmotions;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TotalEmotionsRequestDto {
    private Long minutesId;

//    private float happy;
//    private float emotionless;
//    private float sad;
//    private float angry;

/*    public TotalEmotions toEntity(Minutes minutes) {
        return TotalEmotions.builder()
                .minutes(minutes)
                .happy(happy)
                .emotionless(emotionless)
                .sad(sad)
                .angry(angry)
                .build();
    }*/
}
