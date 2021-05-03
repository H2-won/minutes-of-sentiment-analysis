package com.boks.emotionalminutes.web.dto.sentence;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Getter
@NoArgsConstructor
public class SentenceRequestDto {
    private User user;
    private Minutes minutes;
    private String content;
    private String emotion;
    private Time createdTime;

    public Sentence toEntity() {
        return Sentence.builder()
                .user(user)
                .minutes(minutes)
                .content(content)
                .emotion(emotion)
                .createdTime(createdTime)
                .build();
    }
}
