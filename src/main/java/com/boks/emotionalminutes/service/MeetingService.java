package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class MeetingService {
    private final MeetingRepository meetingRepository;
    private final UserRepository userRepository;
    private final ParticipationRepository participationRepository;

    @Transactional
    public Meeting create(String code, Long userId, String name) {
        Optional<Meeting> m = meetingRepository.findById(code);
        User user = userRepository.findById(userId).get();

        if (m.isPresent())
            return null;

        Meeting meeting = Meeting.builder()
                .code(code)
                .user(user)
                .name(name)
                .build();

        Participation participation = Participation.builder()
                .user(user)
                .meeting(meeting)
                .build();

        meetingRepository.save(meeting);
        participationRepository.save(participation);

        return meeting;
    }
}
