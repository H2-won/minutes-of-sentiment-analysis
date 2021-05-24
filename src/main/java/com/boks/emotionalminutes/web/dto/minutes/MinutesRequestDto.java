package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
public class MinutesRequestDto {
    private String meetingCode;
    private String voiceFileLink;

    public Minutes toEntity(Meeting meeting) {
        Date now = new Date();
        return Minutes.builder()
                .meeting(meeting)
                .password(meeting.getPassword())
                .voiceFileLink(voiceFileLink)
                .createdDate(now)
                .build();
    }
}
