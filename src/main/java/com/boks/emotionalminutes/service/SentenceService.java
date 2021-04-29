package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Time;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class SentenceService {
    private final SentenceRepository sentenceRepository;

    @Transactional
    public Sentence save(User user, Minutes minutes, String content, String emotion, Time createdTime) {
        Sentence sentence = Sentence.builder()
                .user(user)
                .minutes(minutes)
                .content(content)
                .emotion(emotion)
                .createdTime(createdTime)
                .build();

        sentenceRepository.save(sentence);
        return sentence;
    }
}
