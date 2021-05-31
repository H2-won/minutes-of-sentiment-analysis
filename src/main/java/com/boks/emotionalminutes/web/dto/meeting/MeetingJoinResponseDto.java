package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import lombok.Getter;

@Getter
public class MeetingJoinResponseDto {
    private final String meetingCode;
    private final Long minutesId;

    public MeetingJoinResponseDto (Meeting entity) {
        System.out.println(entity.getCode());
        System.out.println(entity.getMinutes().getId());
        this.meetingCode = entity.getCode();
        this.minutesId = entity.getMinutes().getId();
    }
}
