package com.boks.emotionalminutes.domain.totalEmotions;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class TotalEmotions {
    @Id
    @Column(name = "id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @Column(name = "happy")
    private float happy;

    @Column(name = "emotionless")
    private float emotionless;

    @Column(name = "sad")
    private float sad;

    @Column(name = "angry")
    private float angry;
}
