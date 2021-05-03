package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MinutesService {
    private final MinutesRepository minutesRepository;

    @Transactional
    public Minutes save(MinutesRequestDto requestDto) {
        return minutesRepository.save(requestDto.toEntity());
    }

    public MinutesResponseDto findById(Long id) {
        Minutes entity = minutesRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("해당 회의록이 없습니다"));
        return new MinutesResponseDto(entity);
    }

    @Transactional
    public Minutes update(Long id) throws ParseException {
        Minutes minutes = minutesRepository.findById(id)
                .orElseThrow();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = format.parse(minutes.getCreatedDate());
        Date now = new Date();
        long secs = (now.getTime() - date.getTime())/(1000);
        String hour = String.valueOf(secs/(60*60));
        String min = String.valueOf(secs%(60*60)/60);
        String sec = String.valueOf(secs%60);
        String progressTime = hour+":"+min+":"+sec;
        minutes.update(progressTime);
        return minutes;
    }
}