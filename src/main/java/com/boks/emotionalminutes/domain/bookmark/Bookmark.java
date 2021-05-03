package com.boks.emotionalminutes.domain.bookmark;

import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@NoArgsConstructor
@Entity
@Getter
public class Bookmark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sentence_id")
    private Sentence sentence;

    @Column
    private String memo;

    @Builder
    public Bookmark(User user, Sentence sentence, String memo) {
        this.user = user;
        this.sentence = sentence;
        this.memo = memo;
        user.getBookmarks().add(this);
    }
}
