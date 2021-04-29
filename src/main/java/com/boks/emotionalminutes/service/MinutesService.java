package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class MinutesService {
    private final MinutesRepository minutesRepository;

    @Transactional
    public Minutes save(Meeting meeting, String password, String voiceFileLink) {
        Minutes minutes = Minutes.builder()
                .meeting(meeting)
                .password(password)
                .voiceFileLink(voiceFileLink)
                .build();

        minutesRepository.save(minutes);
        return minutes;
    }
}
