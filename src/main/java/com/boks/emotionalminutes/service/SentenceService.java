package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.sentence.SentenceRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class SentenceService {
    private final UserRepository userRepository;
    private final MinutesRepository minutesRepository;
    private final SentenceRepository sentenceRepository;

    @Transactional
    public Long save(SentenceRequestDto sentenceRequestDto) {
        User user = userRepository.findById(sentenceRequestDto.getUserId()).get();
        Minutes minutes = minutesRepository.findById(sentenceRequestDto.getMinutesId()).get();

        return sentenceRepository.save(sentenceRequestDto.toEntity(user, minutes)).getId();
    }
}
