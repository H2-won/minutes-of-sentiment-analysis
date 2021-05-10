package com.boks.emotionalminutes.domain.sentence;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.Time;

@Entity
@Getter
@NoArgsConstructor
public class Sentence {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "minutes_id")
    private Minutes minutes;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "sentence")
    private Bookmark bookmark;

    @Column
    private String content;

    @Column
    private String emotion;

    @Column(name = "created_time")
    private Time createdTime;

    @Builder
    public Sentence(User user, Minutes minutes, String content, String emotion, Time createdTime) {
        this.user = user;
        this.minutes = minutes;
        this.content = content;
        this.emotion = emotion;
        this.createdTime = createdTime;

        user.getSentences().add(this);
        minutes.getSentences().add(this);
    }

    public void setBookmark(Bookmark bookmark) {
        this.bookmark = bookmark;
    }
}
