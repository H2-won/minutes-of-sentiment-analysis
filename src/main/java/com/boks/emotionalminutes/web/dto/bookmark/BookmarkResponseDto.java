package com.boks.emotionalminutes.web.dto.bookmark;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class BookmarkResponseDto {
    private final Long id;
    private final User user;
    private final Sentence sentence;
    private final String memo;

    public BookmarkResponseDto(Bookmark entity) {
        this.id = entity.getId();
        this.user = entity.getUser();
        this.sentence = entity.getSentence();
        this.memo = entity.getMemo();
    }
}
