package com.boks.emotionalminutes.web.dto.totalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class TotalKeywordsRequestDto {
    private MinutesRepository minutesRepository;

    private Long minutesId;
    private String mainKeyword1;
    private String mainKeyword2;
    private String mainKeyword3;
    private String mainKeyword4;
    private String mainKeyword5;

    public TotalKeywords toEntity() {
        return TotalKeywords.builder()
                .minutes(minutesRepository.findById(minutesId).get())
                .mainKeyword1(mainKeyword1)
                .mainKeyword2(mainKeyword2)
                .mainKeyword3(mainKeyword3)
                .mainKeyword4(mainKeyword4)
                .mainKeyword5(mainKeyword5)
                .build();
    }
}
