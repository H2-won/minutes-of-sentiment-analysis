package com.boks.emotionalminutes.domain.user;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String email;

    @OneToMany(mappedBy = "user")
    private List<Participation> participation = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Sentence> sentences = new ArrayList<>();

    @Builder
    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public void addBookmark(Bookmark bookmark) {
        this.getBookmarks().add(bookmark);
    }

    public void addParticipation(Participation participation) {
        this.getParticipation().add(participation);
    }

    public void addSentence(Sentence sentence) {
        this.getSentences().add(sentence);
    }

    public User update(String name) {
        this.name = name;

        return this;
    }
}
