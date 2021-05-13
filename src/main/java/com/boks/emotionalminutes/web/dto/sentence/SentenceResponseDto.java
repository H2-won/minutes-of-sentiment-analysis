package com.boks.emotionalminutes.web.dto.sentence;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

import java.sql.Time;

@Data
@Getter
public class SentenceResponseDto {
    private Long id;
    private String content;
    private String emotion;
    private Time createdTime;

    public SentenceResponseDto (Sentence entity) {
        this.id = entity.getId();
        this.content = entity.getContent();
        this.emotion = entity.getEmotion();
        this.createdTime = entity.getCreatedTime();
    }
}
