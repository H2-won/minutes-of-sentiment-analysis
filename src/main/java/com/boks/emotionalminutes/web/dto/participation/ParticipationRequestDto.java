package com.boks.emotionalminutes.web.dto.participation;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ParticipationRequestDto {
    private User user;
    private Meeting meeting;

    public Participation toEntity() {
        return Participation.builder()
                .user(user)
                .meeting(meeting)
                .build();
    }
}
