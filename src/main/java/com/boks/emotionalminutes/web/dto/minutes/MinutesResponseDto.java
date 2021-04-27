package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class MinutesResponseDto {
    private final Long id;
    private final Meeting meeting;
    private final String password;
    private final String voiceFileLink;
}
