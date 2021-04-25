package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.participation.ParticipationRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class MeetingServiceTest {

    @Autowired
    MeetingService meetingService;

    @Autowired
    MeetingRepository meetingRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    ParticipationRepository participationRepository;

//    @AfterEach
//    public void cleanup() {
//        meetingRepository.deleteAll();
//    }

    @Test
    public void test() {
        //given
        User user = userRepository.save(User.builder()
                .name("방규빈")
                .email("rbqls1057@gmail.con")
                .build());

        String code = "123456789";
        Long userId = user.getId();
        String name = "정기회의3";

        //when
        meetingService.create(code, userId, name);

        //then
        Meeting meeting = meetingRepository.findById(code).get();
        System.out.println(participationRepository.count());

        assertThat(meeting.getName()).isEqualTo(name);
        assertThat(meeting.getUser().getId()).isEqualTo(userId);
    }
}
