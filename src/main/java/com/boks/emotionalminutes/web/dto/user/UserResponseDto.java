package com.boks.emotionalminutes.web.dto.user;

import com.boks.emotionalminutes.domain.user.User;
import lombok.Data;
import lombok.Getter;

@Data
@Getter
public class UserResponseDto {
    private final Long id;
    private final String name;
    private final String email;
    private final String picture;

    public UserResponseDto (User entity) {
        this.id = entity.getId();
        this.name = entity.getName();
        this.email = entity.getEmail();
        this.picture = entity.getPicture();
    }
}
