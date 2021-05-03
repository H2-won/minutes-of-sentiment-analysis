package com.boks.emotionalminutes.service;


import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import com.boks.emotionalminutes.domain.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@RequiredArgsConstructor
@Service
public class ParticipationService {
    private final ParticipationRepository participationRepository;

    @Transactional
    public Participation save(User user, Meeting meeting) {
        Participation participation = Participation.builder()
                .user(user)
                .meeting(meeting)
                .build();

        participationRepository.save(participation);
        return participation;
    }
}
