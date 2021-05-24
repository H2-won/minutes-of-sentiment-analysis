package com.boks.emotionalminutes.domain.meeting;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
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

    @Column
    private String password;

    @OneToMany(mappedBy = "meeting")
    private List<Participation> participation = new ArrayList<>();

    @Builder
    public Meeting(String code, User user, String name, String password) {
        this.code = code;
        this.user = user;
        this.name = name;
        this.password = password;
    }

    public void setMinutes(Minutes minutes) {
        this.minutes = minutes;
    }

    public void addParticipation(Participation participation) {
        this.getParticipation().add(participation);
    }
}
