package com.boks.emotionalminutes.web.dto.meeting;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class MeetingRequestDto {
    private String code;
    private User user;
    private String name;

    public Meeting toEntity() {
        return Meeting.builder()
                .code(code)
                .user(user)
                .name(name)
                .build();
    }
}
