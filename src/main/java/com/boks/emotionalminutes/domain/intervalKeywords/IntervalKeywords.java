package com.boks.emotionalminutes.domain.intervalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class IntervalKeywords {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @Column(name = "interval4_keywords")
    private String interval4Keywords;

    @Column(name = "interval5_keywords")
    private String interval5Keywords;
}
