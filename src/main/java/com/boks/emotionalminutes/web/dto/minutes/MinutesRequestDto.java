package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MinutesRequestDto {
    private Meeting meeting;
    private String password;
    private String voiceFileLink;

    public Minutes toEntity() {
        return Minutes.builder()
                .meeting(meeting)
                .password(password)
                .voiceFileLink(voiceFileLink)
                .build();
    }
}
