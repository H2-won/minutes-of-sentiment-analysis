package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

import java.sql.Time;
import java.util.Date;
import java.util.List;

@Data
@Getter
public class MeetingResponseDto {
    private final String code;
    private final User user;
    private final String name;
    private final Date createdDate;
    private final Time progressTime;
    private final List<Participation> participation;

    public MeetingResponseDto (Meeting entity) {
        this.code = entity.getCode();
        this.user = entity.getUser();
        this.name = entity.getName();
        this.createdDate = entity.getCreatedDate();
        this.progressTime = entity.getProgressTime();
        this.participation = entity.getParticipation();
    }
}
