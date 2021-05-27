// package com.boks.emotionalminutes.bookmark;

// import com.boks.emotionalminutes.domain.meeting.Meeting;
// import com.boks.emotionalminutes.domain.meeting.MeetingRepository;
// import com.boks.emotionalminutes.domain.user.User;
// import com.boks.emotionalminutes.domain.user.UserRepository;
// import com.boks.emotionalminutes.service.BookmarkService;
// import com.boks.emotionalminutes.service.MeetingService;
// import com.boks.emotionalminutes.service.MinutesService;
// import com.boks.emotionalminutes.service.SentenceService;
// import com.boks.emotionalminutes.web.dto.bookmark.BookmarkListResponseDto;
// import com.boks.emotionalminutes.web.dto.bookmark.BookmarkRequestDto;
// import com.boks.emotionalminutes.web.dto.meeting.MeetingRequestDto;
// import com.boks.emotionalminutes.web.dto.minutes.MinutesRequestDto;
// import com.boks.emotionalminutes.web.dto.sentence.SentenceRequestDto;
// import org.junit.jupiter.api.BeforeEach;
// import org.junit.jupiter.api.Test;
// import org.junit.jupiter.api.extension.ExtendWith;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;
// import org.springframework.boot.web.server.LocalServerPort;
// import org.springframework.test.context.junit.jupiter.SpringExtension;

// import java.sql.Time;
// import java.text.ParseException;
// import java.time.LocalTime;
// import java.util.List;

// @ExtendWith(SpringExtension.class)
// @SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
// public class BookmarkApiControllerTest {

//     @LocalServerPort
//     private int port;

//     @Autowired
//     private UserRepository userRepository;

//     @Autowired
//     private MeetingService meetingService;

//     @Autowired
//     private MinutesService minutesService;

//     @Autowired
//     private SentenceService sentenceService;

//     @Autowired
//     private BookmarkService bookmarkService;

//     Long userId, minutesId, sentenceId, sentenceId2;
//     String meetingCode;

//     @BeforeEach
//     public void setup() throws ParseException {
//         User user = userRepository.save(User.builder()
//                 .name("방규빈").email("rbqls1057@naver.com").build());

//         userId = user.getId();

//         String code = "1234567890";
//         String meetingName = "회의1";

//         MeetingRequestDto meetingRequestDto = new MeetingRequestDto();
//         meetingRequestDto.setCode(code);
//         meetingRequestDto.setName(meetingName);
//         meetingRequestDto.setUserId(user.getId());
//         meetingCode = meetingService.save(meetingRequestDto);

//         MinutesRequestDto minutesRequestDto = new MinutesRequestDto();
//         minutesRequestDto.setPassword("1234");
//         minutesRequestDto.setMeetingCode(meetingCode);
//         minutesRequestDto.setVoiceFileLink("firebase/voice");
//         minutesId = minutesService.save(minutesRequestDto);

//         SentenceRequestDto sentenceRequestDto = new SentenceRequestDto();
//         sentenceRequestDto.setUserId(user.getId());
//         sentenceRequestDto.setMinutesId(minutesId);
//         sentenceRequestDto.setContent("안녕하세요");
//         sentenceRequestDto.setEmotion("무감정");
//         sentenceRequestDto.setCreatedTime(Time.valueOf(LocalTime.of(0, 0, 1)));
//         sentenceId = sentenceService.save(sentenceRequestDto);

//         sentenceRequestDto = new SentenceRequestDto();
//         sentenceRequestDto.setUserId(user.getId());
//         sentenceRequestDto.setMinutesId(minutesId);
//         sentenceRequestDto.setContent("반갑습니다.");
//         sentenceRequestDto.setEmotion("기쁨");
//         sentenceRequestDto.setCreatedTime(Time.valueOf(LocalTime.of(0, 0, 15)));
//         sentenceId2 = sentenceService.save(sentenceRequestDto);

//         minutesService.update(minutesId);
//     }

//     @Test
//     public void Bookmark_saveAndUpdate() throws ParseException {
//         //given 유저, 회의, 회의록, 문장 만들어져있음


//         BookmarkRequestDto bookmarkRequestDto = new BookmarkRequestDto();
//         bookmarkRequestDto.setUserId(userId);
//         bookmarkRequestDto.setSentenceId(sentenceId);
//         bookmarkRequestDto.setMemo("첫 인삿말");
//         Long bookmarkId = bookmarkService.save(bookmarkRequestDto);

//         List<BookmarkListResponseDto> dtos = bookmarkService.findAll(minutesId);
//         dtos.forEach(bookmarkListResponseDto -> {
//             System.out.println(bookmarkListResponseDto.getBookmarkId()
//                     + bookmarkListResponseDto.getUserName()
//                     + bookmarkListResponseDto.getSentenceId()
//                     + bookmarkListResponseDto.getCreatedTime()
//                     + bookmarkListResponseDto.getMemo());
//         });

//         bookmarkService.update(bookmarkId, "환영 인사");

//         dtos = bookmarkService.findAll(minutesId);
//         dtos.forEach(bookmarkListResponseDto -> {
//             System.out.println(bookmarkListResponseDto.getBookmarkId()
//                     + bookmarkListResponseDto.getUserName()
//                     + bookmarkListResponseDto.getSentenceId()
//                     + bookmarkListResponseDto.getCreatedTime()
//                     + bookmarkListResponseDto.getMemo());
//         });

//         bookmarkService.delete(bookmarkId);

//         dtos = bookmarkService.findAll(minutesId);
//         dtos.forEach(bookmarkListResponseDto -> {
//             System.out.println(bookmarkListResponseDto.getBookmarkId()
//                     + bookmarkListResponseDto.getUserName()
//                     + bookmarkListResponseDto.getSentenceId()
//                     + bookmarkListResponseDto.getCreatedTime()
//                     + bookmarkListResponseDto.getMemo());
//         });

//     }
// }
