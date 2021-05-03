package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestBody;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MinutesService {
    private final MinutesRepository minutesRepository;

    @Transactional
    public Minutes save(@RequestBody MinutesRequestDto requestDto) {
        return minutesRepository.save(requestDto.toEntity());
    }

    public MinutesResponseDto findById(Long id) {
        Minutes entity = minutesRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 회의록이 없습니다"));
        return new MinutesResponseDto(entity);
    }
}