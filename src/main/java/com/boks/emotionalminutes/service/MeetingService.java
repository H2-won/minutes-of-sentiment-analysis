package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.meeting.MeetingCodeAndHostIDResponseDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingJoinRequestDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import com.boks.emotionalminutes.web.dto.meeting.MeetingResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MeetingService {
    private final UserRepository userRepository;
    private final MeetingRepository meetingRepository;
    private final ParticipationRepository participationRepository;

    @Transactional
    public MeetingCodeAndHostIDResponseDto save(MeetingRequestDto requestDto) {
        do {
            requestDto.setCode(setRandomCode(10));

            // 테스트 위한 고정 코드 발급
//            requestDto.setCode("AAAAA");
        } while (meetingRepository.findById(requestDto.getCode()).isPresent());
        User user = userRepository.findById(requestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 개최자가 없습니다. id=" + requestDto.getUserId()));

        Meeting meeting = meetingRepository.save(requestDto.toEntity(user));

        Participation participation = Participation.builder()
                .user(user)
                .meeting(meeting)
                .build();
        participationRepository.save(participation);

        return new MeetingCodeAndHostIDResponseDto(meeting);
    }

    public MeetingResponseDto findByCode(String code) {
        Meeting entity = meetingRepository.findById(code).orElseThrow(() ->
                new IllegalArgumentException("해당 회의가 존재하지 않습니다"));
        return new MeetingResponseDto(entity);
    }

    @Transactional
    public String join(MeetingJoinRequestDto requestDto) {
        User user = userRepository.findById(requestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 개최자가 없습니다. id=" + requestDto.getUserId()));

        Meeting meeting = meetingRepository.findById(requestDto.getCode())
                .orElseThrow(() -> new IllegalArgumentException("해당 회의가 없습니다. id=" + requestDto.getUserId()));

        Optional<Participation> participationInfo = participationRepository.findByUserIdAndMeetingCode(user.getId(), meeting.getCode());
        if (participationInfo.isPresent())
            return meeting.getCode();

        Participation participation = Participation.builder()
                .user(user)
                .meeting(meeting)
                .build();
        participationRepository.save(participation);

        return meeting.getCode();
    }

    // 회의 랜덤 코드 발급 함수
    private String setRandomCode(int size) {
        char[] tmp = new char[size];
        for (int i = 0; i < tmp.length; i++) {
            int div = (int) Math.floor(Math.random() * 3);

            if (div == 0) {
                tmp[i] = (char) (Math.random() * 10 + '0');
            } else if (div == 1) {
                tmp[i] = (char) (Math.random() * 26 + 'a');
            } else {
                tmp[i] = (char) (Math.random() * 26 + 'A');
            }
        }
        return new String(tmp);
    }
}