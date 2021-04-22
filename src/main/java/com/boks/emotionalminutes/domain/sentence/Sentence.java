package com.boks.emotionalminutes.domain.sentence;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Getter
public class Sentence {
    @Id
    @Column(name = "id")
    private Long id;

    // 이게 맞나?
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @Column(name = "content")
    private String content;

    @Column(name = "emotion")
    private String emotion;

    @Column(name = "created_time")
    private Time created_time;
}
