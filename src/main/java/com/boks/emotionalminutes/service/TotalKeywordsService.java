package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywordsRepository;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsRequestDto;
import com.boks.emotionalminutes.web.dto.totalKeywords.TotalKeywordsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalKeywordsService {
    private final TotalKeywordsRepository totalKeywordsRepository;
    private final MinutesRepository minutesRepository;

    @Transactional
    public Long save(TotalKeywordsRequestDto requestDto) {
        Minutes minutes = minutesRepository.findById(requestDto.getMinutesId()).get();
        return totalKeywordsRepository.save(requestDto.toEntity(minutes)).getId();
    }

    public TotalKeywordsResponseDto findByMinutesId(Long id) {
        Minutes minutes = minutesRepository.findById(id).get();
        return new TotalKeywordsResponseDto(minutes.getTotalKeywords());
    }
}
