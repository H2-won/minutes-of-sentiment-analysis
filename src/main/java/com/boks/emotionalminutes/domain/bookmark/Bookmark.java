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

    // 한명의 유저에 여러개 북마크가 있으니 북마크(Many) to 유저(one)
    // ManyToOne 이 맞나?
    // 근데 북마크 내용이 컬럼으로 있으니 전부 OneToOne 으로 해야하는거 아닌가..?
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    // 여기도?
    // 다대다 일대다 다대일...
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
