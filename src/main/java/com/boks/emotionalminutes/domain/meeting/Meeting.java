package com.boks.emotionalminutes.domain.meeting;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Meeting {
    @Id
    @Column
    private String code;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "meeting")
    private Minutes minutes;

    @Column
    private String name;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "progress_time")
    private Time progressTime;

    @OneToMany(mappedBy = "meeting")
    private List<Participation> participation = new ArrayList<>();

    @Builder
    public Meeting(String code, User user, String name) {
        this.code = code;
        this.user = user;
        this.name = name;
    }
}
