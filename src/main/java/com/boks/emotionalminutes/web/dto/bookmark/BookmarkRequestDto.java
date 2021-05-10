package com.boks.emotionalminutes.web.dto.bookmark;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class BookmarkRequestDto {
    // 프론트에서 받아올 땐 유저 객체가 아니라 유저 아이디를 가져와야 하는데..
    private Long userId;
    private Long sentenceId;
    private String memo;

    public Bookmark toEntity(User user, Sentence sentence) {
        return Bookmark.builder()
                .user(user)
                .sentence(sentence)
                .memo(memo)
                .build();
    }
}
