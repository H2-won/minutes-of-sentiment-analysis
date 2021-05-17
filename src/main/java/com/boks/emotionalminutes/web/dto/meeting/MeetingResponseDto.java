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
    private final String name;

    public MeetingResponseDto (Meeting entity) {
        this.code = entity.getCode();
        this.name = entity.getName();
    }
}
