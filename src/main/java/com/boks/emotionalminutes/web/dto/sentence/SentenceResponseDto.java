package com.boks.emotionalminutes.web.dto.sentence;

import com.boks.emotionalminutes.domain.sentence.Sentence;
import lombok.Data;
import lombok.Getter;

import java.sql.Time;

@Data
@Getter
public class SentenceResponseDto {
    private String userName;
    private String content;
    private String emotion;
    private Time createdTime;

    public SentenceResponseDto (Sentence entity) {
        this.userName = entity.getUser().getName();
        this.content = entity.getContent();
        this.emotion = entity.getEmotion();
        this.createdTime = entity.getCreatedTime();
    }
}
