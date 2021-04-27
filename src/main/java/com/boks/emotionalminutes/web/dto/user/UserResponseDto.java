package com.boks.emotionalminutes.web.dto.user;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

import java.util.ArrayList;
import java.util.List;

@Data
@Getter
public class UserResponseDto {
    private final Long id;
    private final String name;
    private final String email;
    private final List<Participation> participation;
    private final List<Bookmark> bookmarks;

    public UserResponseDto (User entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        this.participation = entity.getParticipation();
        this.bookmarks = entity.getBookmarks();
    }
}
