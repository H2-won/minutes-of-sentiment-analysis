package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
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
}
