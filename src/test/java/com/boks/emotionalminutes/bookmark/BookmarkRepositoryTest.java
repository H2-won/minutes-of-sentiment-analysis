package com.boks.emotionalminutes.bookmark;

import com.boks.emotionalminutes.domain.bookmark.BookmarkRepository;
import com.boks.emotionalminutes.domain.meeting.Meeting;
import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.participation.Participation;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.service.MeetingService;
import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@ExtendWith(SpringExtension.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class BookmarkRepositoryTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MeetingRepository meetingRepository;

    @Autowired
    private MeetingService meetingService;

    @Autowired
    private MinutesRepository minutesRepository;

    @Autowired
    private SentenceRepository sentenceRepository;

    @Autowired
    private BookmarkRepository bookmarkRepository;

    @Test
    public void User_등록된다() throws Exception {
        //given
        String name = "Bang";
        String email = "rbqls1057@naver.com";
        User user = userRepository.save(User.builder()
                .name(name)
                .email(email)
                .build());

        //when
        User user2 = userRepository.findByEmail(email).get();

        //then
        System.out.println("비교중..." + user2.getId() + ", " + user2.getName());
    }

    @Test
    @Transactional
    public void Meeting_등록된다() {
        //given
        String name = "Bang";
        String email = "rbqls1057@naver.com";
        User user = userRepository.save(User.builder()
                .name(name)
                .email(email)
                .build());

        System.out.println("user id="+user.getId());

        String code = "1234567890";
        String meetingName = "meeting name";

        MeetingRequestDto requestDto = new MeetingRequestDto();
        requestDto.setCode(code);
        requestDto.setName(meetingName);
        requestDto.setUserId(user.getId());

        //when
        String code2 = meetingService.save(requestDto);
        System.out.println("Random Code="+code2);

        //then
        Meeting meeting1 = meetingRepository.findById(code2).get();
        System.out.println("회의 개설자="+meeting1.getUser().getName());
        List<Participation> participations = meeting1.getParticipation();
        System.out.println(participations.get(0).getUser().getId());

    }
}
