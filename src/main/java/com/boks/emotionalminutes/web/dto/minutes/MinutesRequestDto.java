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
    private Meeting meeting;
    private String password;
    private String voiceFileLink;

    public Minutes toEntity() {
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        Date date = new Date();
        String createdDate = format.format(date);
        return Minutes.builder()
                .meeting(meeting)
                .password(password)
                .voiceFileLink(voiceFileLink)
                .createdDate(createdDate)
                .build();
    }
}
