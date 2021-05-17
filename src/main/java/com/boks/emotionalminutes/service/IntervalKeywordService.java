package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywordsRepository;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.web.dto.intervalKeywords.IntervalKeywordsRequestDto;
import com.boks.emotionalminutes.web.dto.intervalKeywords.IntervalKeywordsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class IntervalKeywordService {
    @Autowired
    private final IntervalKeywordsRepository intervalKeywordsRepository;

    @Autowired
    private final MinutesRepository minutesRepository;

    @Transactional
    public Long save(Long id, IntervalKeywordsRequestDto requestDto) {
        Minutes minutes = minutesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. code=" + id));
        return intervalKeywordsRepository.save(requestDto.toEntity(minutes)).getId();
    }

    @Transactional
    public IntervalKeywordsResponseDto findById(Long minutesId) {
        Minutes minutes = minutesRepository.findById(minutesId)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. code=" + minutesId));
        return new IntervalKeywordsResponseDto(minutes.getIntervalKeywords());
    }
}
