package com.boks.emotionalminutes.web.dto.intervalKeywords;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IntervalKeywordsRequestDto {
    private String interval1Keywords;
    private String interval2Keywords;
    private String interval3Keywords;

    public IntervalKeywords toEntity(Minutes minutes) {
        return IntervalKeywords.builder()
                .minutes(minutes)
                .interval1Keywords(interval1Keywords)
                .interval2Keywords(interval2Keywords)
                .interval3Keywords(interval3Keywords)
                .build();
    }
}
