package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MeetingJoinRequestDto {
    private String code;
    private Long userId;

    public Meeting toEntity(User user) {
        return Meeting.builder()
                .code(code)
                .user(user)
                .build();
    }
}
