package com.boks.emotionalminutes.web.dto.meeting;

import lombok.Getter;

@Getter
public class MeetingCodeResponseDto {
    private final String code;

    public MeetingCodeResponseDto (String code) {
        this.code = code;
    }
}