package com.boks.emotionalminutes.domain.totalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Getter;

import javax.persistence.*;

@Entity
@Getter
public class TotalKeywords {
    @Id
    @Column(name = "id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @Column(name = "main_keyword1")
    private String mainKeyword1;

    @Column(name = "main_keyword2")
    private String mainKeyword2;

    @Column(name = "main_keyword3")
    private String mainKeyword3;

    @Column(name = "main_keyword4")
    private String mainKeyword4;

    @Column(name = "main_keyword5")
    private String mainKeyword5;
}
