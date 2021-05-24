package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import lombok.Getter;

@Getter
public class MeetingCodeAndHostIDResponseDto {
    private final String code;
    private final Long hostId;

    public MeetingCodeAndHostIDResponseDto(Meeting entity) {
        this.code = entity.getCode();
        this.hostId = entity.getUser().getId();
    }
}