package com.boks.emotionalminutes.domain.totalKeywords;

import com.boks.emotionalminutes.domain.minutes.Minutes;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class TotalKeywords {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
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

    @Builder
    public TotalKeywords(Minutes minutes, String mainKeyword1, String mainKeyword2, String mainKeyword3,
                         String mainKeyword4, String mainKeyword5) {
        this.minutes = minutes;
        this.mainKeyword1 = mainKeyword1;
        this.mainKeyword2 = mainKeyword2;
        this.mainKeyword3 = mainKeyword3;
        this.mainKeyword4 = mainKeyword4;
        this.mainKeyword5 = mainKeyword5;
    }
}
