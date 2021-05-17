package com.boks.emotionalminutes.domain.totalEmotions;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
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

    @Builder
    public TotalEmotions(Minutes minutes, float happy, float emotionless, float sad, float angry) {
        this.minutes = minutes;
        this.happy = happy;
        this.emotionless = emotionless;
        this.sad = sad;
        this.angry = angry;
        minutes.setTotalEmotions(this);
    }
}
