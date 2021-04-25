package com.boks.emotionalminutes.domain.totalEmotions;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class TotalEmotions {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @Column
    private float happy;

    @Column
    private float emotionless;

    @Column
    private float sad;

    @Column
    private float angry;
}
