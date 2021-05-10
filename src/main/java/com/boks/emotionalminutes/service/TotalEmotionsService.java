package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotionsRepository;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalEmotionsService {
    private final TotalEmotionsRepository totalEmotionsRepository;

    @Transactional
    public Long save(TotalEmotionsRequestDto requestDto) {
        return totalEmotionsRepository.save(requestDto.toEntity()).getId();
    }
}