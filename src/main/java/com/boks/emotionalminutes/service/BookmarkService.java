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
import com.boks.emotionalminutes.web.dto.bookmark.BookmarkResponseDto;
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
    public Long update(Long id, String memo) {
        Bookmark bookmark = bookmarkRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 북마크가 없습니다. id=" + id));
        bookmark.setMemo(memo);
        return id;
    }

    @Transactional
    public void delete(Long id) {
        Bookmark bookmark = bookmarkRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 북마크가 없습니다. id=" + id));
        bookmark.getUser().getBookmarks().remove(bookmark);
        bookmark.getSentence().setBookmark(null);
        bookmarkRepository.deleteById(id);
    }

    @Transactional
    public List<BookmarkListResponseDto> findAll(Long minutesId) {
        Minutes minutes = minutesRepository.findById(minutesId)
                .orElseThrow(() -> new IllegalArgumentException("해당 회의록이 없습니다. minutesId=" + minutesId));
        List<BookmarkListResponseDto> dtos = new ArrayList<BookmarkListResponseDto>();
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
