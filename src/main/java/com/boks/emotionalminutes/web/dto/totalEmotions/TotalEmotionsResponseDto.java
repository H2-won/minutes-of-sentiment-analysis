package com.boks.emotionalminutes.web.dto.totalEmotions;

import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class TotalEmotionsResponseDto {
    private float happy;
    private float emotionless;
    private float sad;
    private float angry;

    public TotalEmotionsResponseDto (TotalEmotions entity) {
        this.happy = entity.getHappy();
        this.emotionless = entity.getEmotionless();
        this.sad = entity.getSad();
        this.angry = entity.getAngry();
    }
}
