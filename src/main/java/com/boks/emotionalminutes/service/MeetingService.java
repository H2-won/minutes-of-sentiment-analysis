package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MeetingService {
    private final MeetingRepository meetingRepository;
    private final ParticipationRepository participationRepository;

    @Transactional
    public Meeting save(MeetingRequestDto requestDto) {
        while (meetingRepository.findById(requestDto.getCode()).isEmpty()) {
            requestDto.setCode(getRandomCode(10));
            meetingRepository.save(requestDto.toEntity());
        }

        Participation participation = Participation.builder()
                .user(requestDto.getUser())
                .meeting(requestDto.toEntity())
                .build();
        participationRepository.save(participation);
        return requestDto.toEntity();
    }

    public static String getRandomCode(int size) {
        char[] tmp = new char[size];
        for (int i = 0; i < tmp.length; i++) {
            int div = (int) Math.floor(Math.random() * 3);

            if (div == 0) { // 0이면 숫자로
                tmp[i] = (char) (Math.random() * 10 + '0');
            } else if (div == 1) { //1이면 알파벳 대문자
                tmp[i] = (char) (Math.random() * 26 + 'A');
            } else {
                tmp[i] = (char) (Math.random() * 26 + 'a');
            }
        }
        return new String(tmp);
    }
}