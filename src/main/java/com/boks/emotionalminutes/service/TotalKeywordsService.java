package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywordsRepository;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalKeywordsService {
    private final TotalKeywordsRepository totalKeywordsRepository;

    @Transactional
    public Long save(TotalKeywordsRequestDto requestDto) {
        return totalKeywordsRepository.save(requestDto.toEntity()).getId();
    }
}
