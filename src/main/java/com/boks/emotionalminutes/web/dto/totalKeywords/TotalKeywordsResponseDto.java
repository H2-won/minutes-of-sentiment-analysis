package com.boks.emotionalminutes.web.dto.totalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class TotalKeywordsResponseDto {
    private Long id;
    private String mainKeyword1;
    private String mainKeyword2;
    private String mainKeyword3;
    private String mainKeyword4;
    private String mainKeyword5;

    public TotalKeywordsResponseDto (TotalKeywords entity) {
        this.id = entity.getId();
        this.mainKeyword1 = entity.getMainKeyword1();
        this.mainKeyword2 = entity.getMainKeyword2();
        this.mainKeyword3 = entity.getMainKeyword3();
        this.mainKeyword4 = entity.getMainKeyword4();
        this.mainKeyword5 = entity.getMainKeyword5();
    }
}

