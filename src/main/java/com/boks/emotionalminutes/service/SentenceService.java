package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.web.dto.sentence.SentenceRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class SentenceService {
    private final SentenceRepository sentenceRepository;

    @Transactional
    public Sentence save(SentenceRequestDto sentenceRequestDto) {
        return sentenceRepository.save(sentenceRequestDto.toEntity());
    }
}
