package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;

public class MeetingJoinResponseDto {
    private final String meetingCode;
    private final Long minutesId;

    public MeetingJoinResponseDto (Meeting entity) {
        this.meetingCode = entity.getCode();
        this.minutesId = entity.getMinutes().getId();
    }
}
