package com.boks.emotionalminutes.web.dto.participation;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class ParticipationResponseDto {
    private final Long id;
    private final User user;
    private final Meeting meeting;

    public ParticipationResponseDto (Participation entity) {
        this.id = entity.getId();
        this.user = entity.getUser();
        this.meeting = entity.getMeeting();
    }
}
