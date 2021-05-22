package com.boks.emotionalminutes.domain.intervalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class IntervalKeywords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @Column(name = "interval1_keywords")
    private String interval1Keywords;

    @Column(name = "interval2_keywords")
    private String interval2Keywords;

    @Column(name = "interval3_keywords")
    private String interval3Keywords;

    @Builder
    public IntervalKeywords(Minutes minutes, String interval1Keywords, String interval2Keywords,
                            String interval3Keywords) {
        this.minutes = minutes;
        this.interval1Keywords = interval1Keywords;
        this.interval2Keywords = interval2Keywords;
        this.interval3Keywords = interval3Keywords;
        minutes.setIntervalKeywords(this);
    }
}
