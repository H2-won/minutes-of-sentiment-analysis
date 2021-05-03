package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Data;
import lombok.Getter;

import java.util.List;

@Data
@Getter
public class MinutesResponseDto {
    private final Long id;
    private final Meeting meeting;
    private final String password;
    private final String voiceFileLink;

    private final List<Sentence> sentenceList;
    private final IntervalKeywords intervalKeywords;
    private final TotalEmotions totalEmotions;
    private final TotalKeywords totalKeywords;

    public MinutesResponseDto (Minutes entity) {
        this.id = entity.getId();
        this.meeting = getMeeting();
        this.password = getPassword();
        this.voiceFileLink = getVoiceFileLink();

        this.sentenceList = entity.getSentences();
        this.intervalKeywords = entity.getIntervalKeywords();
        this.totalEmotions = entity.getTotalEmotions();
        this.totalKeywords = entity.getTotalKeywords();
    }
}
