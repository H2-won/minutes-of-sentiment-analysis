package com.boks.emotionalminutes.domain.minutes;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class Minutes {
    @Id
    @Column(name = "id")
    // 설계서에 pk는 Int 인데 Long 으로 되어있는 것 확인 요망
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "meeting_code")
    private Meeting meeting;

    @Column(name = "password")
    private String password;

    @Column(name = "voice_file_link")
    private String voiceFileLink;
}