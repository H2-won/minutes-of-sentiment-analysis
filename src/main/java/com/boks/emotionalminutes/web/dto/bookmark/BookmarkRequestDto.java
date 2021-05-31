package com.boks.emotionalminutes.web.dto.bookmark;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter @Setter
@NoArgsConstructor
public class BookmarkRequestDto {
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
