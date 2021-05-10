package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Getter
public class MinutesResponseDto {
    private final Long id;
    private final String title;
    private final String createdDate;
    private final String progressTime;
    private final List<String> userNameList = new ArrayList<String>();

    public MinutesResponseDto (Minutes entity, Meeting meeting) {
        this.id = entity.getId();
        this.title = entity.getMeeting().getName();
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        SimpleDateFormat timeFormat = new SimpleDateFormat("HH:mm:ss");
        this.createdDate = dateFormat.format(entity.getCreatedDate());
        this.progressTime = timeFormat.format(entity.getProgressTime());
        meeting.getParticipation().stream()
                .map(Participation::getUser)
                .forEach(user -> this.userNameList.add(user.getName()));
    }
}
