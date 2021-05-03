package com.boks.emotionalminutes.web.dto.intervalKeywords;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class IntervalKeywordsRequestDto {
    private Minutes minutes;
    private String interval1Keywords;
    private String interval2Keywords;
    private String interval3Keywords;
    private String interval4Keywords;
    private String interval5Keywords;

    public IntervalKeywords toEntity() {
        return IntervalKeywords.builder()
                .minutes(minutes)
                .interval1Keywords(interval1Keywords)
                .interval2Keywords(interval2Keywords)
                .interval3Keywords(interval3Keywords)
                .interval4Keywords(interval4Keywords)
                .interval5Keywords(interval5Keywords)
                .build();
    }
}
