package com.boks.emotionalminutes.web.dto.intervalKeywords;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class IntervalKeywordsResponseDto {
    private final Long id;
    private final String interval1Keywords;
    private final String interval2Keywords;
    private final String interval3Keywords;

    public IntervalKeywordsResponseDto (IntervalKeywords entity) {
        this.id = entity.getId();
        this.interval1Keywords = entity.getInterval1Keywords();
        this.interval2Keywords = entity.getInterval2Keywords();
        this.interval3Keywords = entity.getInterval3Keywords();
    }
}
