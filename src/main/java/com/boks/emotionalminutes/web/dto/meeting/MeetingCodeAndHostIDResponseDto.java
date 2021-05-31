package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;

@Getter
public class MeetingCodeAndHostIDResponseDto {
    private final String code;
    private final Long minutesId;
    private final Long hostId;

    public MeetingCodeAndHostIDResponseDto(Meeting entity) {
        this.code = entity.getCode();
        this.minutesId = entity.getMinutes().getId();
        this.hostId = entity.getUser().getId();
    }
}