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
import java.util.ArrayList;
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

    @OneToOne(mappedBy = "minutes")
    private IntervalKeywords intervalKeywords;

    @OneToOne(mappedBy = "minutes")
    private TotalEmotions totalEmotions;

    @OneToOne(mappedBy = "minutes")
    private TotalKeywords totalKeywords;

    @Column(name = "created_date")
    private String createdDate;

    @Column(name = "progress_time")
    private String progressTime;

    @Builder
    public Minutes (Meeting meeting, String password, String voiceFileLink, String createdDate, String progressTime) {
        this.meeting = meeting;
        this.password = password;
        this.voiceFileLink = voiceFileLink;
        this.createdDate = createdDate;
        this.progressTime = progressTime;
    }

    public void update (String progressTime) {
        this.progressTime = progressTime;
    }
}