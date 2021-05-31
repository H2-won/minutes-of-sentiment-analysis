package com.boks.emotionalminutes.domain.minutes;

import com.boks.emotionalminutes.domain.intervalKeywords.IntervalKeywords;
import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.totalEmotions.TotalEmotions;
import com.boks.emotionalminutes.domain.totalKeywords.TotalKeywords;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@NoArgsConstructor
@Entity
@Getter
public class Minutes {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meeting_code")
    private Meeting meeting;

    @Column
    private String password;

    @Column(name = "voice_file_link")
    private String voiceFileLink;

    @OneToMany(mappedBy = "minutes")
    private List<Sentence> sentences = new ArrayList<>();

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "minutes")
    private IntervalKeywords intervalKeywords;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "minutes")
    private TotalEmotions totalEmotions;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "minutes")
    private TotalKeywords totalKeywords;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "progress_time")
    private LocalTime progressTime;

    @Builder
    public Minutes (Meeting meeting, String password) {
        this.meeting = meeting;
        this.password = password;
        meeting.setMinutes(this);
    }

    public void startRecord(String voiceFileLink) {
        this.createdDate = new Date();
        this.voiceFileLink = voiceFileLink;
    }

    public void endRecord (LocalTime progressTime) {
        this.progressTime = progressTime;
    }

    public void setIntervalKeywords (IntervalKeywords intervalKeywords) {
        this.intervalKeywords = intervalKeywords;
    }

    public void setTotalKeywords (TotalKeywords totalKeywords) {
        this.totalKeywords = totalKeywords;
    }

    public void setTotalEmotions (TotalEmotions totalEmotions) {
        this.totalEmotions = totalEmotions;
    }

    public void addSentence(Sentence sentence) {
        this.getSentences().add(sentence);
    }
}