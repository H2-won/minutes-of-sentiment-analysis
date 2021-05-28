package com.boks.emotionalminutes.web.dto.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class MinutesListResponseDto {
    private Long minutesId;
    private String meetingCode;
    private String title;
    private String createdDate;
    private List<String> pictures;
    private List<String> keywords = new ArrayList<>();
    private float happy;
    private float emotionless;
    private float sad;
    private float angry;

    @Builder
    public MinutesListResponseDto(Minutes minutes, Meeting meeting, List<String> pictures, TotalKeywords keywords, TotalEmotions emotions) {
        this.minutesId = minutes.getId();
        this.meetingCode = meeting.getCode();
        this.title = meeting.getName();
        SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
        this.createdDate = format.format(minutes.getCreatedDate());
        this.pictures = pictures;
        this.keywords.add(keywords.getMainKeyword1());
        this.keywords.add(keywords.getMainKeyword2());
        this.keywords.add(keywords.getMainKeyword3());
        this.keywords.add(keywords.getMainKeyword4());
        this.keywords.add(keywords.getMainKeyword5());
        this.happy = emotions.getHappy();
        this.emotionless = emotions.getEmotionless();
        this.sad = emotions.getSad();
        this.angry = emotions.getAngry();
    }
}
