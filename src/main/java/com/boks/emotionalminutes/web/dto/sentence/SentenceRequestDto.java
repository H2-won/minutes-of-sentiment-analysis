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
    private Long userId;
    private Long minutesId;
    private String content;
    private String emotion;
    private Time createdTime;

    public Sentence toEntity(User user, Minutes minutes) {
        return Sentence.builder()
                .user(user)
                .minutes(minutes)
                .content(content)
                .emotion(emotion)
                .createdTime(createdTime)
                .build();
    }
}
