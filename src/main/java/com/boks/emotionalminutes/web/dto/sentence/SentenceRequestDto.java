package com.boks.emotionalminutes.web.dto.sentence;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.sql.Time;

@Getter
@NoArgsConstructor
public class SentenceRequestDto {
    private UserRepository userRepository;
    private MinutesRepository minutesRepository;

    private Long userId;
    private Long minutesId;
    private String content;
    private String emotion;
    private Time createdTime;

    public Sentence toEntity() {
        User user = userRepository.findById(userId).get();
        Minutes minutes = minutesRepository.findById(minutesId).get();

        return Sentence.builder()
                .user(user)
                .minutes(minutes)
                .content(content)
                .emotion(emotion)
                .createdTime(createdTime)
                .build();
    }
}
