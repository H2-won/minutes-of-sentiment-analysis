package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@NoArgsConstructor
public class MinutesRequestDto {
    private String meetingId;
    private String password;
    private String voiceFileLink;

//    public Minutes toEntity() {
//        Date now = new Date();
//        return Minutes.builder()
//                .meeting(meeting)
//                .password(password)
//                .voiceFileLink(voiceFileLink)
//                .createdDate(now)
//                .build();
//    }
}
