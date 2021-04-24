package com.boks.emotionalminutes.domain.meeting;

import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;

import javax.persistence.*;
import java.sql.Time;
import java.util.Date;

@Entity
@Getter
public class Meeting {
    @Id
    @Column(name = "code")
    private String code;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "name")
    private String name;

    @Column(name = "created_date")
    private Date createdDate;

    @Column(name = "progress_time")
    private Time progressTime;
}
