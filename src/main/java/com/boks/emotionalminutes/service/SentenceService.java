package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class SentenceService {
    private final SentenceRepository sentenceRepository;
}
