package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.minutes.MinutesListResponseDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
import com.boks.emotionalminutes.web.dto.minutes.MinutesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.text.ParseException;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class MinutesService {
    @Autowired
    private final MinutesRepository minutesRepository;

    @Autowired
    private final MeetingRepository meetingRepository;

    @Autowired
    private final UserRepository userRepository;

    @Transactional
    public Long save(MinutesRequestDto requestDto) {
        Meeting meeting = meetingRepository.findById(requestDto.getMeetingCode())
                .orElseThrow(() -> new IllegalArgumentException("해당 회의가 없습니다. code=" + requestDto.getMeetingCode()));
        if (meeting.getMinutes() != null)
            return null;
        return minutesRepository.save(requestDto.toEntity(meeting)).getId();
    }

    @Transactional(readOnly = true)
    public List<MinutesListResponseDto> findAllDesc(Long userId) {
        List<MinutesListResponseDto> dtos = new ArrayList<MinutesListResponseDto>();
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 회원 없습니다. id=" + userId));
        user.getParticipation().stream()
                .map(Participation::getMeeting)
                .forEach(meeting -> {
                    Minutes minutes = meeting.getMinutes();
                    if (minutes != null) {
                        dtos.add(MinutesListResponseDto.builder()
                                .id(minutes.getId())
                                .title(meeting.getName())
                                .host(meeting.getUser().getName())
                                .createdDate(minutes.getCreatedDate())
                                .build());
                    }
                });
        return dtos;
    }

    @Transactional(readOnly = true)
    public MinutesResponseDto findById(Long id) {
        Minutes entity = minutesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. id=" + id));
        Meeting meeting = entity.getMeeting();

        TotalEmotionsService totalEmotionsService = null;
        assert false;
        totalEmotionsService.save(1L);

        return new MinutesResponseDto(entity, meeting);
    }

    @Transactional(readOnly = true)
    public MinutesResponseDto findByMeetingCodeAndPassword(String code, String password) {
        Optional<Minutes> minutes = minutesRepository.findByMeetingCode(code);
        if (minutes.isEmpty()) return null;
        Minutes entity = minutes.get();
        if (!password.equals(entity.getPassword())) return null;
        Meeting meeting = entity.getMeeting();
        return new MinutesResponseDto(entity, meeting);
    }

    @Transactional(readOnly = true)
    public String getVoiceFileLink(Long id) {
        return minutesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. id=" + id))
                .getVoiceFileLink();
    }

    @Transactional
    public Long update(Long id) throws ParseException {
        Minutes minutes = minutesRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. id=" + id));
        Date now = new Date();
        int totalSec = (int) ((now.getTime() - minutes.getCreatedDate().getTime())/(1000));
        int hour = totalSec/(60*60);
        int min = totalSec%(60*60)/60;
        int sec = totalSec%60;
        LocalTime progressTime = LocalTime.of(hour, min, sec);
        minutes.update(progressTime);
        return id;
    }
}