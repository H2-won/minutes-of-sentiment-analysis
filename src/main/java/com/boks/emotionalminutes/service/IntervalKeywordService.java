package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywordsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class IntervalKeywordService {
    private final IntervalKeywordsRepository intervalKeywordsRepository;
}
