package com.boks.emotionalminutes.web.dto.totalKeywords;

import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
public class TotalKeywordsResponseDto {
    private List<String> keywords= new ArrayList<>();

    public TotalKeywordsResponseDto (TotalKeywords entity) {
        this.keywords.add(entity.getMainKeyword1());
        this.keywords.add(entity.getMainKeyword2());
        this.keywords.add(entity.getMainKeyword3());
        this.keywords.add(entity.getMainKeyword4());
        this.keywords.add(entity.getMainKeyword5());
    }
}

