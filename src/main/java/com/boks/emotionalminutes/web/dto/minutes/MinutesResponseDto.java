package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class MinutesResponseDto {
    private final Long id;
    private final Meeting meeting;
    private final String password;
    private final String voiceFileLink;

    public MinutesResponseDto (Minutes entity) {
        this.id = entity.getId();
        this.meeting = getMeeting();
        this.password = getPassword();
        this.voiceFileLink = getVoiceFileLink();
    }
}
