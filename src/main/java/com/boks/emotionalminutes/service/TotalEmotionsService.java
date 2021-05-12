package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotionsRepository;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsRequestDto;
import com.boks.emotionalminutes.web.dto.totalEmotions.TotalEmotionsResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class TotalEmotionsService {
    private final TotalEmotionsRepository totalEmotionsRepository;
    private final MinutesRepository minutesRepository;

    @Transactional
    public Long save(TotalEmotionsRequestDto requestDto) {
        return totalEmotionsRepository.save(requestDto.toEntity()).getId();
    }

    public TotalEmotionsResponseDto findByMinutesId(Long minutesId) {
        Minutes minutes = minutesRepository.findById(minutesId).get();
        return new TotalEmotionsResponseDto(minutes.getTotalEmotions());
    }
}