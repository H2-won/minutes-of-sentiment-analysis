package com.boks.emotionalminutes.service;

import com.boks.emotionalminutes.domain.bookmark.Bookmark;
import com.boks.emotionalminutes.domain.bookmark.BookmarkRepository;
import com.boks.emotionalminutes.domain.minutes.Minutes;
import com.boks.emotionalminutes.domain.minutes.MinutesRepository;
import com.boks.emotionalminutes.domain.sentence.Sentence;
import com.boks.emotionalminutes.domain.sentence.SentenceRepository;
import com.boks.emotionalminutes.domain.user.User;
import com.boks.emotionalminutes.domain.user.UserRepository;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkListResponseDto;
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkRequestDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Transactional
@RequiredArgsConstructor
@Service
public class BookmarkService {
    @Autowired
    private final BookmarkRepository bookmarkRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final SentenceRepository sentenceRepository;

    @Autowired
    private final MinutesRepository minutesRepository;

    @Transactional
    public Long save(BookmarkRequestDto requestDto) {
        User user = userRepository.findById(requestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + requestDto.getUserId()));
        Sentence sentence = sentenceRepository.findById(requestDto.getSentenceId())
                .orElseThrow(() -> new IllegalArgumentException("해당 문장이 없습니다. id=" + requestDto.getSentenceId()));
        if (sentence.getBookmark() != null)
            return null;
        return bookmarkRepository.save(requestDto.toEntity(user, sentence)).getId();
    }

    @Transactional
    public List<BookmarkListResponseDto> saveInMinutes(BookmarkRequestDto requestDto) {
        User user = userRepository.findById(requestDto.getUserId())
                .orElseThrow(() -> new IllegalArgumentException("해당 사용자가 없습니다. id=" + requestDto.getUserId()));
        Sentence sentence = sentenceRepository.findById(requestDto.getSentenceId())
                .orElseThrow(() -> new IllegalArgumentException("해당 문장이 없습니다. id=" + requestDto.getSentenceId()));
        if (sentence.getBookmark() != null)
            return null;
        bookmarkRepository.save(requestDto.toEntity(user, sentence));
        Minutes minutes = sentence.getMinutes();
        return getBookmarkListResponseDtos(minutes);
    }

    @Transactional
    public List<BookmarkListResponseDto> update(Long id, String memo) {
        Bookmark bookmarkEntity = bookmarkRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 북마크가 없습니다. id=" + id));
        memo = memo.substring(1, memo.length() - 1);
        bookmarkEntity.setMemo(memo);
        Minutes minutes = bookmarkEntity.getSentence().getMinutes();
        return getBookmarkListResponseDtos(minutes);
    }

    @Transactional
    public List<BookmarkListResponseDto> delete(Long id) {
        Bookmark bookmarkEntity = bookmarkRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 북마크가 없습니다. id=" + id));
        Minutes minutes = bookmarkEntity.getSentence().getMinutes();
        bookmarkEntity.getUser().getBookmarks().remove(bookmarkEntity);
        bookmarkEntity.getSentence().setBookmark(null);
        bookmarkRepository.deleteById(id);
        return getBookmarkListResponseDtos(minutes);
    }

    @Transactional
    public List<BookmarkListResponseDto> findAll(Long minutesId) {
        Minutes minutes = minutesRepository.findById(minutesId)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. minutesId=" + minutesId));
        return getBookmarkListResponseDtos(minutes);
    }

    private List<BookmarkListResponseDto> getBookmarkListResponseDtos(Minutes minutes) {
        List<BookmarkListResponseDto> dtos = new ArrayList<>();
        minutes.getSentences().stream()
                .map(Sentence::getBookmark)
                .forEach(bookmark -> {
                    if (bookmark != null) {
                        Sentence sentence = bookmark.getSentence();
                        dtos.add(BookmarkListResponseDto.builder()
                                .bookmarkId(bookmark.getId())
                                .userName(bookmark.getUser().getName())
                                .memo(bookmark.getMemo())
                                .sentenceId(sentence.getId())
                                .createdTime(sentence.getCreatedTime())
                                .build());
                    }
                });
        return dtos;
    }
}
