package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywordsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class TotalKeywordsService {
    private final TotalKeywordsRepository totalKeywordsRepository;
}
